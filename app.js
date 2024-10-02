const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require('dotenv');
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// dot env config
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
        secret: 'CookingBlogSecretSession',
        saveUninitialized: true,
        resave: true
}));
app.use(flash());
app.use(fileUpload());

// Templating Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.set('layout', './layouts/main');

const recipeRoutes = require("./src/routes/recipeRoutes");
const recipeAdminRoutes = require("./src/routes/recipeAdminRoutes");
app.use('/', recipeRoutes);
app.use('/admin', recipeRoutes);

app.listen(port, () => {
        console.log(`Listening to http://localhost:${port}`);
});