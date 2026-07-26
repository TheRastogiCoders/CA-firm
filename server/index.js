const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

const services = [
  { id: 1, title: 'Audit & Assurance', description: 'Statutory, internal, tax, and assurance services for businesses.' },
  { id: 2, title: 'Tax & Regulatory Services', description: 'Tax planning, GST, TDS, and regulatory compliance.' },
  { id: 3, title: 'Corporate Law & Compliance', description: 'Incorporation, company law, secretarial, and ROC filings.' },
  { id: 4, title: 'Project Finance & Consultancy Services', description: 'Financial structuring, syndication, valuation, and advisory.' },
  { id: 5, title: 'Government Subsidies', description: 'Scheme selection, applications, and incentive compliance support.' },
  { id: 6, title: 'Startup Advisory', description: 'Setup, compliance, tax, and funding-readiness for startups.' },
];

// In-memory store for contact submissions. Replace with a database in production.
const contactSubmissions = [];

const CLIENT_DIST_PATH = path.resolve(__dirname, '../client/dist');
const CLIENT_INDEX_PATH = path.join(CLIENT_DIST_PATH, 'index.html');
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const trimText = (value, maxLength = 2000) => String(value || '').trim().slice(0, maxLength);
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

app.disable('x-powered-by');
app.set('trust proxy', 1);

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: false, limit: '50kb' }));

if (allowedOrigins.length > 0) {
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          return callback(null, true);
        }
        return callback(new Error('CORS not allowed'));
      },
    })
  );
} else if (!isProduction) {
  app.use(cors());
}

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: Number(process.env.CONTACT_RATE_LIMIT || 10),
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again in a few minutes.' },
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', env: NODE_ENV, message: 'CA Firm API is running' });
});

app.get('/api/services', (req, res) => {
  res.status(200).json({ services });
});

app.post('/api/contact', contactLimiter, (req, res) => {
  const name = trimText(req.body.name, 120);
  const email = trimText(req.body.email, 160).toLowerCase();
  const phone = trimText(req.body.phone, 40);
  const subject = trimText(req.body.subject || 'General Enquiry', 120);
  const message = trimText(req.body.message, 4000);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  contactSubmissions.push({
    id: contactSubmissions.length + 1,
    name,
    email,
    phone,
    subject,
    message,
    createdAt: new Date().toISOString(),
  });

  return res.status(201).json({
    success: true,
    message: 'Thank you. We will get back to you soon.',
  });
});

if (isProduction) {
  app.use(express.static(CLIENT_DIST_PATH, { maxAge: '1d', index: false }));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(CLIENT_INDEX_PATH);
  });
}

app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API route not found' });
  }
  return res.status(404).send('Not found');
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const isOperationalError = status >= 400 && status < 500;
  if (!isOperationalError) {
    console.error(err);
  }
  res.status(status).json({
    error: isOperationalError ? err.message : 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`CA Firm server running in ${NODE_ENV} mode on port ${PORT}`);
});
