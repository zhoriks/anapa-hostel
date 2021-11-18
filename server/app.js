const express = require('express');
const session = require('express-session');
const SessionFileStore = require('session-file-store')(session);
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const {
  PORT = 5000,
  SESSION_SECRET = 'my_secret',
} = process.env;

const sessionConfig = {
  store: new SessionFileStore(),
  name: 'user_sid',
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(session(sessionConfig));
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
