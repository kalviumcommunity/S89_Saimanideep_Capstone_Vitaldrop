# Vitaldrop Backend

This is the backend for the Vitaldrop login and signup system.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file (already provided) and set your MongoDB URI and JWT secret.
3. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

- `POST /api/signup` — Register a new user (fields: name, email, password)
- `POST /api/login` — Authenticate user (fields: email, password)

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- bcrypt for password hashing