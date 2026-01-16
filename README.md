# Next.js Dashboard Application

![Dashboard Preview](./public/dashboard-preview.png)

A full-stack invoice management dashboard built following the Next.js App Router tutorial. This application demonstrates modern web development practices including server-side rendering, authentication, database integration, and form validation.

## Live Demo

The application is deployed and accessible at: [https://acme-nextjs-dashboard-rouge.vercel.app/](https://acme-nextjs-dashboard-rouge.vercel.app/)

**Test credentials:**
- Email: user@nextmail.com
- Password: 123456

## Features

- User authentication with NextAuth.js
- Invoice management (create, read, update, delete)
- Customer management
- Revenue tracking and visualization
- Search and pagination
- Form validation with Zod
- Streaming and loading states
- Error handling
- Responsive design with Tailwind CSS

## Technologies Used

**Frontend:**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Heroicons

**Backend:**
- Next.js API Routes
- Server Actions
- NextAuth.js (Authentication)

**Database:**
- PostgreSQL
- Postgres.js client

**Validation & Security:**
- Zod (Schema validation)
- bcrypt (Password hashing)

**Development Tools:**
- ESLint
- TypeScript
- pnpm

## Prerequisites

- Node.js 18.17 or later
- pnpm (or npm/yarn)
- PostgreSQL database

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rofeeqshittu/nextjs-dashboard.git
cd nextjs-dashboard
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="your-postgres-connection-string"
POSTGRES_URL="your-postgres-connection-string"
AUTH_SECRET="your-auth-secret"
```

Generate a secret key for authentication:

```bash
openssl rand -base64 32
```

### 4. Seed the database

```bash
pnpm run dev
```

Then visit `http://localhost:3000/seed` to populate the database with sample data.

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Login credentials

Use the following credentials to login:
- Email: user@nextmail.com
- Password: 123456

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard pages
│   ├── login/              # Authentication
│   ├── lib/                # Utilities and data functions
│   │   ├── actions.ts      # Server actions
│   │   ├── data.ts         # Data fetching
│   │   └── definitions.ts  # TypeScript types
│   └── ui/                 # React components
├── public/                 # Static assets
├── auth.config.ts          # NextAuth configuration
├── auth.ts                 # Authentication setup
└── next.config.ts          # Next.js configuration
```

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

This application can be deployed to Vercel, the platform from the creators of Next.js:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

Alternatively, deploy to any platform that supports Node.js applications.

## Learn More

This project was built following the [Next.js Learn Course](https://nextjs.org/learn). For more details about Next.js features and API, check the [Next.js documentation](https://nextjs.org/docs).

## License

MIT
