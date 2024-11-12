# **Book Store**

An interactive and fully functional online book store built using the MERN stack (MongoDB, Express.js, React, Node.js) that provides a seamless browsing, purchasing, and user management experience.

## 🌟 **Features**

### **User-Friendly Interface**
- Modern design with easy navigation using **Bootstrap** and **Material UI**

### **Book Management**
- **Admin Panel**: Manage books, categories, and inventory
- **User Browsing**: Search, filter, and browse books by category, author, or genre
- **Wishlist and Cart**: Add books to a wishlist or shopping cart for future purchases

### **Order and Payment Integration**
- **Secure Checkout Process**: With payment gateway support
- **Order History**: Track past purchases and order statuses

### **User Accounts**
- **Sign-Up/Login**: Authentication for registered users
- **Profile Management**: Edit profile, manage orders, and view purchase history

### **Responsive Design**
- Optimized for viewing across desktops, tablets, and mobile devices

## 🚀 **Technical Architecture**

### **Frontend**
- **React.js**
- **Bootstrap** and **Material UI** for responsive and interactive design
- **Axios** for API integration with the backend

### **Backend**
- **Node.js**
- **Express.js** framework
- **MongoDB** for database management
- **RESTful API** for backend services

## 💻 **Prerequisites**
- **Node.js** (v14 or higher)
- **MongoDB**
- **npm** or **yarn** package manager

## 🛠️ **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-store.git
   cd book-store
   ```

2. **Install dependencies** for both backend and frontend

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file in backend directory
   touch backend/.env

   # Add the following environment variables:
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   PAYMENT_API_KEY=your_payment_gateway_key
   ```

4. **Start the development servers**

   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server in a new terminal
   cd frontend
   npm start
   ```

## 👥 **User Roles**

### **Customer**
- **Register/Login**: Access personalized account features
- **Browse & Search**: View the book catalog, search by title, author, or genre
- **Order Books**: Add items to cart, proceed to checkout, and make payments
- **Wishlist**: Save favorite books for later

### **Admin**
- **Manage Inventory**: Add, update, or delete book listings
- **Order Management**: Oversee user orders and update status
- **User Accounts**: Manage user permissions and profiles

## 🔒 **Security Features**
- **JWT Authentication**
- **Password Encryption**
- **Role-Based Access Control**: For different user roles (Customer/Admin)

## 📱 **Responsive Design**
The platform is optimized for:
- **Desktop computers**
- **Tablets**
- **Mobile devices**

## 🤝 **Contributing**
1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feature/NewFeature`)
3. **Commit your changes** (`git commit -m 'Add some NewFeature'`)
4. **Push to the branch** (`git push origin feature/NewFeature`)
5. **Open a Pull Request**

## 📄 **License**
This project is licensed under the **MIT License** - see the LICENSE file for details.
