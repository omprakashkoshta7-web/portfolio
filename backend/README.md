# Portfolio Backend API

Backend API for Sneha Koshta's Portfolio website built with Node.js, Express, TypeScript, and MongoDB.

## Features

- RESTful API endpoints
- Contact form handling with email notifications
- MongoDB integration for data persistence
- TypeScript for type safety
- CORS enabled for frontend integration
- Environment-based configuration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose)
- **Email**: Nodemailer (Gmail)

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status, MongoDB connection, and email configuration status.

### Contact Form
```
POST /api/contact
Body: { name, email, message }
```
Saves contact form submission and sends email notification.

```
GET /api/contact
```
Retrieves all contact submissions (admin).

### Projects
```
GET /api/projects
```
Retrieves all projects.

```
GET /api/projects/featured
```
Retrieves featured projects only.

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your configuration

3. Run development server:
```bash
npm run dev
```

Server will start on `http://localhost:5000`

## Production Build

1. Build TypeScript:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## Deployment

### Deploy to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add environment variables in Render dashboard
6. Deploy!

### Deploy to Railway

1. Push code to GitHub
2. Create new project on Railway
3. Connect GitHub repository
4. Add environment variables
5. Railway will auto-detect and deploy

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Add environment variables in Vercel dashboard

## Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use generated password as `EMAIL_PASS` in `.env`

## MongoDB Setup

1. Create account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string and add to `MONGODB_URI`

## Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── Contact.ts
│   │   └── Project.ts
│   ├── routes/
│   │   ├── contact.ts
│   │   └── projects.ts
│   └── server.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## License

MIT

## Author

Sneha Koshta
