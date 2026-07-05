# Enterprise CRM System 🚀

A full-stack Enterprise CRM (Customer Relationship Management) system built using the MERN Stack. This application enables businesses to manage customers, leads, user authentication, and dashboard analytics with secure role-based access.

## 🌐 Live Demo

### Frontend
https://enterprise-crm-project.netlify.app/

### Backend API
https://crm-backend-rrbr.onrender.com/

---

## 📌 Features

### Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-based Access (Admin & Sales)

### Customer Management
- Add Customer
- View Customers
- View Customer by ID
- Update Customer
- Delete Customer

### Lead Management
- Create Lead
- View Leads
- Update Lead Status
- Delete Lead

### Dashboard
- Total Customers
- Total Leads
- Dashboard Statistics

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- CORS

### Deployment
- Frontend: Netlify
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```
EnterpriseCRM
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/subhiksha-ram05/crm-project.git
```

### Install Frontend

```bash
cd client
npm install
```

### Install Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Run Locally

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |

### Customers

| Method | Endpoint |
|---------|----------|
| GET | /api/customers |
| GET | /api/customers/:id |
| POST | /api/customers |
| PUT | /api/customers/:id |
| DELETE | /api/customers/:id |

### Leads

| Method | Endpoint |
|---------|----------|
| GET | /api/leads |
| POST | /api/leads |
| PUT | /api/leads/:id |
| DELETE | /api/leads/:id |

### Dashboard

| Method | Endpoint |
|---------|----------|
| GET | /api/dashboard |

---

## 🔐 Authentication

All protected routes require a JWT token.

```
Authorization: Bearer YOUR_TOKEN
```

---

## Future Improvements

- Email Notifications
- Search & Filters
- Pagination
- Charts & Analytics
- File Uploads
- Activity Logs
- Dark Mode
- Responsive UI Improvements

---

## 👩‍💻 Author

**Subhiksha Ram**

GitHub: [https://github.com/subhiksha-ram05](https://github.com/subhiksha-ram05)

LinkedIn: [https://www.linkedin.com/in/subhiksha-ram](https://www.linkedin.com/in/subhiksha-ram)

---
