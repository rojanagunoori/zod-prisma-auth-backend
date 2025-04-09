# ⚙️ Backend - Zod Prisma Auth

This is the **backend** for the Zod + Prisma authentication system. It handles user registration, login, and secure session management using JWTs.

---

## 🚀 Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **Zod** – Runtime validation
- **Prisma ORM** – Database interaction
- **JWT** – Token-based authentication
- **bcryptjs** – Password hashing
- **dotenv** – Environment variable handling

---

## 📦 Installation & Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file with the following content:

env
Copy
Edit
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
PORT=5000
Set up Prisma schema:

bash
Copy
Edit
npx prisma migrate dev --name init
Start the development server:

bash
Copy
Edit
npm run dev
📁 Folder Structure
bash
Copy
Edit
backend/
├── prisma/
│   └── schema.prisma       # Prisma schema
├── src/
│   ├── controllers/        # Auth logic
│   ├── middlewares/        # JWT authentication
│   ├── routes/             # API routes
│   ├── schemas/            # Zod validation
│   ├── utils/              # Helper functions
│   └── index.ts            # Server entry point
├── .env                    # Environment variables
└── package.json
🛠️ Features
✅ User registration and login

🔐 JWT authentication

🔎 Zod request validation

🔒 Password hashing with bcrypt

⚙️ Prisma-based DB operations

🌐 CORS enabled for frontend communication

API Endpoints
POST /api/auth/register
Registers a new user.

Requires fullName, email, and password.

POST /api/auth/login
Authenticates a user and returns a JWT token.

Requires email and password.

🌍 Deployment
This backend can be deployed to:

Render

Railway

Heroku

Docker

👤 Author
Nagunoori Roja

🔗 GitHub: @rojanagunoori

📜 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Let me know if you want `.env.example` or Postman collection included too!