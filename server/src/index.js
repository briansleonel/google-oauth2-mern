import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import morgan from "morgan";

const app = express();

// MIDDLEWARES
app.use(session({ secret: "SECRET", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(morgan());

app.listen(process.env.PORT, () =>
    console.log(`Server started on http://localhost:${process.env.PORT}`)
);
