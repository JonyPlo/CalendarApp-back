import 'dotenv/config';

// PORT
export const PORT = process.env.PORT || 4000;

// URI DATABASE
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/calendarDB';

// SEED JWT
export const SEED_JWT = process.env.SECRET_JWT_SEED;
