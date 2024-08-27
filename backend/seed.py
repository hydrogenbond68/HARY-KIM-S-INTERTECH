# from models import db, User, Product
# from app import app


# # def seed_users(num_users=10):
# #     User.query.delete()
# #     # You can also add hard-coded users here if needed
# #     for _ in range(num_users):
# #         user = User(
# #             username=fake.user_name(),
# #             email=fake.email(),
# #             password=fake.password()
# #         )
# #         db.session.add(user)
# #     db.session.commit()

# def seed_products():
#     Product.query.delete()

#     products = [
#         {
#             "name": "Product 1",
#             "description": "Description for product 1",
#             "price": 19.99,
#             "image": "https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
#         },
#         {
#             "name": "Product 2",
#             "description": "Description for product 2",
#             "price": 29.99,
#             "image": "https://images.unsplash.com/photo-1721265250424-a2ad2f1efcf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
#         },
#         {
#             "name": "Product 3",
#             "description": "Description for product 3",
#             "price": 39.99,
#             "image": "https://images.unsplash.com/photo-1721265576459-ac6433c540d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
#         },
#         {
#             "name": "Product 4",
#             "description": "Description for product 4",
#             "price": 49.99,
#             "image": "https://images.unsplash.com/photo-1721086130975-83605296fdbb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
#         },
#         {
#             "name": "Product 5",
#             "description": "Description for product 5",
#             "price": 59.99,
#             "image": "https://via.placeholder.com/400x300.png?text=Product+5"
#         },
        
#     ]

#     for product_data in products:
#         product = Product(
#             name=product_data['name'],
#             description=product_data['description'],
#             price=product_data['price'],
#             image=product_data['image']
#         )
#         db.session.add(product)

#     db.session.commit()

# if __name__ == '__main__':
#     with app.app_context():
#         db.create_all()
#         # seed_users()
#         seed_products()
