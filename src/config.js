import 'dotenv/config';

// URI DATABASE
export const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/calendar';

// PORT
export const PORT = process.env.PORT || 8080;
