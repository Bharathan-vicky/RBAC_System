# RBAC-Bharathan_Task

A robust **Role-Based Access Control (RBAC)** system built with the **MERN stack** (MongoDB, Express.js, React, Node.js). This application provides enterprise-grade authentication and authorization with distinct dashboards and permission levels for Admins, Managers, and Users.

![RBAC System](https://img.shields.io/badge/MERN-Stack-green) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🚀 Features

### 🔐 **Secure Authentication**
- JWT-based authentication with HTTP-only cookies
- Password hashing using bcrypt
- Token-based session management
- Automatic token refresh and validation

### 👥 **Role Management**
- **Three distinct roles**: Admin, Manager, User
- Role-based dashboards with custom permissions
- Dynamic role assignment during registration
- Hierarchical access control

### 🛡️ **Protected Routes**
- Middleware to guard sensitive API endpoints
- Frontend route protection based on user roles
- Automatic redirect for unauthorized access
- Session persistence across page refreshes

### 🎨 **Modern UI/UX**
- Clean, white-themed interface with glassmorphism effects
- Responsive design for all screen sizes
- Smooth animations and transitions
- Premium card designs with hover effects
- Social media integration (GitHub, LinkedIn, X/Twitter)

---

## 📋 Table of Contents

- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [User Roles & Permissions](#user-roles--permissions)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🌐 Demo

**Live Demo:** [Coming Soon]

**Repository:** [https://github.com/Bharathan-vicky/RBAC_System](https://github.com/Bharathan-vicky/RBAC_System)

---

## 🛠️ Tech Stack

### **Frontend**
- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.9.6) - Client-side routing
- **Axios** (v1.13.2) - HTTP client
- **Lucide React** (v0.554.0) - Icon library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom design system

### **Backend**
- **Node.js** - Runtime environment
- **Express.js** (v5.1.0) - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.20.0) - ODM for MongoDB
- **JWT** (jsonwebtoken v9.0.2) - Authentication
- **bcryptjs** (v3.0.3) - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
RBAC_Systems/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/       # React Context for state management
│   │   │   └── AuthContext.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManagerDashboard.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   └── Unauthorized.jsx
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── .env               # Environment variables
│   ├── package.json
│   └── vite.config.js
│
├── server/                # Backend Node.js application
│   ├── controllers/       # Request handlers
│   │   └── authController.js
│   ├── middleware/        # Custom middleware
│   │   └── authMiddleware.js
│   ├── models/            # Mongoose models
│   │   └── User.js
│   ├── routes/            # API routes
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── .env               # Environment variables
│   ├── server.js          # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 📦 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### **Clone the Repository**
```bash
git clone https://github.com/Bharathan-vicky/RBAC_System.git
cd RBAC_System
```

### **Install Dependencies**

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

### **Backend (.env in `/server`)**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/rbac_db?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
```

### **Frontend (.env in `/client`)**
```env
VITE_API_URL=http://localhost:5000
```

> **Note:** For production, replace `VITE_API_URL` with your deployed backend URL.

---

## 🏃 Running Locally

### **1. Start MongoDB**
If using local MongoDB:
```bash
mongod
```

Or use **MongoDB Atlas** (cloud database).

### **2. Start Backend Server**
```bash
cd server
node server.js
```
Server will run on `http://localhost:5000`

### **3. Start Frontend Development Server**
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:5173`

### **4. Open in Browser**
Navigate to `http://localhost:5173`

---

## 🚀 Deployment

### **Deploy to Render.com**

#### **Backend Deployment**
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. **Settings:**
   - **Name:** `rbac-server`
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. **Environment Variables:**
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Your secret key
   - `PORT`: `5000`
6. Click **Create Web Service**
7. Copy the deployed URL (e.g., `https://rbac-server.onrender.com`)

#### **Frontend Deployment**
1. Click **New +** → **Static Site**
2. Select the same repository
3. **Settings:**
   - **Name:** `rbac-client`
   - **Root Directory:** `client`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variable:**
   - `VITE_API_URL`: Your backend URL (e.g., `https://rbac-server.onrender.com`)
5. Click **Create Static Site**

---

## 🔌 API Endpoints

### **Authentication Routes** (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/register` | Register a new user | Public |
| POST | `/login` | Login user | Public |
| POST | `/logout` | Logout user | Private |
| GET | `/me` | Get current user | Private |

### **User Routes** (`/api/users`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/admin` | Admin dashboard data | Admin only |
| GET | `/manager` | Manager dashboard data | Manager, Admin |
| GET | `/user` | User dashboard data | All authenticated |

---

## 👤 User Roles & Permissions

### **Admin**
- Full system access
- Can view all dashboards
- Manage users and roles
- Access to admin-specific features

### **Manager**
- Access to manager and user dashboards
- Moderate permissions
- Can view reports and analytics

### **User**
- Basic access
- Can view personal dashboard
- Limited permissions

---

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Login Page
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400?text=Admin+Dashboard)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Bharathan Rajkumar**

- **GitHub:** [@Bharathan-vicky](https://github.com/Bharathan-vicky)
- **LinkedIn:** [Bharathan Rajkumar](https://www.linkedin.com/in/bharathan-rajkumar-346a10259/)
- **Twitter/X:** [@BharathanR](https://x.com/home)

**Project Link:** [https://github.com/Bharathan-vicky/RBAC_System](https://github.com/Bharathan-vicky/RBAC_System)

---

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Lucide Icons](https://lucide.dev/)
- [Render.com](https://render.com/)

---

**Made with ❤️ by Bharathan Rajkumar**
