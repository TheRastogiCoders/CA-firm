# CA Firm Website

Production-ready website for a Chartered Accountant firm with:
- `client/`: React + Vite frontend
- `server/`: Node.js + Express backend

## What Is Production Ready Now

- Security middleware (`helmet`, `compression`)
- Rate limiting for form submissions (`/api/contact`)
- Input validation/sanitization on contact API
- Environment-based CORS support
- Express serves `client/dist` in production (single deploy unit)
- SPA fallback route handling
- Root `.gitignore` to avoid pushing `node_modules`, build artifacts, and local env files
- Env templates in `client/.env.example` and `server/.env.example`

## Prerequisites

- Node.js 18+ recommended
- npm 9+ recommended

## Local Development

Install dependencies:

```bash
npm run install:all
```

Run backend:

```bash
npm run server:dev
```

Run frontend (new terminal):

```bash
npm run client
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## Environment Variables

### Server (`server/.env`)

Copy from `server/.env.example`:

```bash
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://yourdomain.com
CONTACT_RATE_LIMIT=10
```

### Client (`client/.env`)

Copy from `client/.env.example`:

```bash
VITE_API_BASE_URL=
VITE_API_PROXY_TARGET=http://localhost:5000
```

Notes:
- Keep `VITE_API_BASE_URL` empty when frontend and backend are served from the same domain.
- Set `VITE_API_BASE_URL=https://api.yourdomain.com` if backend is hosted separately.

## Production Build and Start

From project root:

```bash
npm run build
npm run start
```

or one command:

```bash
npm run start:prod
```

In production, Express serves the built React app from `client/dist`.

## API Endpoints

- `GET /api/health`
- `GET /api/services`
- `POST /api/contact` (required: `name`, `email`, `message`)

## Push To GitHub

Run these commands from project root:

```bash
git init
git add .
git commit -m "Make CA firm app production ready"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If your GitHub repo already exists with commits, use:

```bash
git pull origin main --rebase
git push -u origin main
```
