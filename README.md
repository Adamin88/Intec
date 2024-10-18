
# Intec Ecommerce Web App

### Author: Mohamed Elhihi

## Overview
Welcome to the Intec Ecommerce Web App! This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to provide a robust, scalable, and maintainable solution for your ecommerce needs.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
To get started with the Intec Ecommerce Web App, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/Intec.git
```

### 2. Navigate to the project directory:
```bash
cd Intec
```

### 3. Install backend dependencies:
```bash
cd backend
npm install
```

### 4. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

### 5. Configure environment variables:
Create a `.env` file in the `backend` directory with the following environment variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Usage
### 1. Start the backend server:
```bash
cd backend
npm run dev
```

### 2. Start the frontend development server:
```bash
cd ../frontend
npm start
```

### 3. Access the application:  
Open your browser and navigate to `http://localhost:3000`.

## Features
- **User Authentication**: Secure login and registration using JWT.
- **Product Management**: CRUD operations for products.
- **Shopping Cart**: Add, remove, and update items in the cart.
- **Order Management**: Place orders and track status.
- **Payment Integration**: Stripe API for secure payments.
- **Admin Panel**: Manage users, products, and orders.

## Contributing
Contributions are welcome! If you have suggestions or want to contribute to this project, please fork the repository and submit a pull request.

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/NewFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/NewFeature
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
