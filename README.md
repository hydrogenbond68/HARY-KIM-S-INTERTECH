# E-com---Shopify-app

## Overview

**E-com---Shopify-app** is an innovative e-commerce application built to enhance the shopping experience on the Shopify platform. This app adds custom functionality to Shopify stores, providing:

- **Customizable Product Filters**: Advanced filtering options for customers.
- **Enhanced Product Pages**: Rich product descriptions and dynamic image galleries.
- **Customer Rewards System**: Incentivize repeat purchases with a points-based reward system.
- **Admin Insights**: Detailed analytics for store management.

## Tech Stack

### Frontend
- **React.js**: For building interactive UI components.
- **Redux**: State management for complex data flows.
- **Shopify Polaris**: Shopify's design system for consistent UI.
- **Apollo Client**: For GraphQL queries and mutations.

### Backend
- **Node.js with Express.js**: Server-side logic and API endpoints.
- **Shopify API**: Integration with Shopify's store data.
- **GraphQL**: Efficient querying of Shopify's data.

### Deployment
- **Shopify App Store**: Deployed as a Shopify app.
- **Heroku** or **AWS** for backend services.

### Additional Tools
- **Shopify CLI**: For developing Shopify apps.
- **Webpack**: For module bundling.
- **Jest**: Testing framework for JavaScript code.

## Getting Started

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later)
- A Shopify Partner account for app development and testing

### Installation

1. **Clone the repository:**
   ```sh
   git clone [your-repository-url]
   cd E-com---Shopify-app

2. **Install dependencies**
    ```sh
    npm install
    
3. **Install Shopify CLI via npm**
   ```sh
      npm install -g @shopify/cli
     
4.    **Authenticate with Shopify**
       ```sh
           shopify login

5. **Configure Environment Variables**
    ```sh
   SHOPIFY_API_KEY=your_api_key
    SHOPIFY_API_SECRET=your_secret_key
    SHOPIFY_SCOPES=read_products,write_products

6.  **Run the App**
    ```sh
    shopify serve

7.**Running Tests**
   ```sh
    npm test
