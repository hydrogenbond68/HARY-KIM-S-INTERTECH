import os
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, fields, marshal_with
from flask_cors import CORS
from flask_migrate import Migrate

# print(os.environ.get('DATABASE_URL'))        os.environ.get('DATABASE_URL')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
api = Api(app)
migrate = Migrate(app, db)

CORS(app)


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image = db.Column(db.String(500), nullable=False)
    description = db.Column(db.String(500), nullable=True)  

# Cart model
class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    items = db.relationship('CartItem', backref='cart', lazy=True)

# CartItem model
class CartItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)
    cart_id = db.Column(db.Integer, db.ForeignKey('cart.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    product = db.relationship('Product')

# Serializer fields
productsFields = {
    'id': fields.Integer,
    'title': fields.String,
    'price': fields.Float,
    'image': fields.String,
    'description': fields.String 
}

cartItemFields = {
    'id': fields.Integer,
    'product': fields.Nested(productsFields),
    'quantity': fields.Integer
}

cartFields = {
    'id': fields.Integer,
    'items': fields.List(fields.Nested(cartItemFields))
}

# Product Resource
class Products(Resource):
    @marshal_with(productsFields)
    def get(self):
        products = Product.query.all()
        return products
    
    @marshal_with(productsFields)
    def post(self):
        data = request.get_json()
        if isinstance(data, list):
            products = []
            for item in data:
                new_product = Product(
                    title=item['title'],
                    price=item['price'],
                    image=item['image'],
                    description=item.get('description', '')  # Handle description
                )
                db.session.add(new_product)
                db.session.commit()
                products.append(new_product)
            return products, 201
        else:
            new_product = Product(
                title=data['title'],
                price=data['price'],
                image=data['image'],
                description=data.get('description', '')  # Handle description
            )
            db.session.add(new_product)
            db.session.commit()
            return new_product, 201

    @marshal_with(productsFields)
    def put(self, id):
        data = request.get_json()
        product = Product.query.get_or_404(id)
       
        product.title = data['title']
        product.price = data['price']
        product.image = data['image']
        product.description = data.get('description', '')  # Handle description
       
        db.session.commit()
        return product, 200

    def delete(self, id):
        product = Product.query.get_or_404(id)
        db.session.delete(product)
        db.session.commit()
        return '', 204

api.add_resource(Products, '/products', '/products/<int:id>')

# Cart Resource
class CartResource(Resource):
    @marshal_with(cartFields)
    def get(self, id):
        cart = Cart.query.get_or_404(id)
        cart_items = CartItem.query.filter_by(cart_id=cart.id).all()
        cart.items = cart_items
        return cart

    @marshal_with(cartFields)
    def post(self, id):
        data = request.get_json()
        cart = Cart.query.get_or_404(id)
        
        product = Product.query.get_or_404(data['product_id'])
        existing_item = CartItem.query.filter_by(cart_id=cart.id, product_id=product.id).first()
        
        if existing_item:
            existing_item.quantity += data['quantity']
        else:
            new_item = CartItem(
                product_id=product.id,
                cart_id=cart.id,
                quantity=data['quantity']
            )
            db.session.add(new_item)
        
        db.session.commit()
        return cart, 201

api.add_resource(CartResource, '/carts/<int:id>')

# Create Cart Resource
class CreateCartResource(Resource):
    def post(self):
        new_cart = Cart()
        db.session.add(new_cart)
        db.session.commit()
        return {'cart_id': new_cart.id}, 201

api.add_resource(CreateCartResource, '/carts')

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create the database tables
    app.run(debug=True, port=5555)

