//=== DEPENDENCIES ============================================
const express = require("express");

//=== SET UP THE EXPRESS APP ==================================
const app = express();
const PORT = process.env.PORT || 8080;

//=== SET UP THE EXPRESS APP TO HANDLE DATA PARSING ============
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== REQUIRE HANDLEBARS =========
const exphbs = require("express-handlebars");

// Register '.handlebars' extension with exphbs
app.engine("handlebars", exphbs({
   defaultLayout: "main",
   extname: ".handlebars"
}));
// Set our default template engine to "handlebars"
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

//=== STATIC DIRECTORY ========================================
app.use(express.static("public"));

//=== ROUTES ==========================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//=== START THE SERVER TO BEGIN LISTENING ==========================================================
app.listen(PORT, () => {
   console.log("App listening on http://localhost:" + PORT);
});