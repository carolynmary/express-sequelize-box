//=== DEPENDENCIES ============================================
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const seed = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");

//=== SET UP THE EXPRESS APP ==================================
const app = express();
const PORT = process.env.PORT || 8080;

//=== SET UP THE EXPRESS APP TO HANDLE DATA PARSING ============
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=== REQUIRE HANDLEBARS =========
const exphbs = require("express-handlebars");

// Register '.handlebars' extension with exphbs
app.engine('handlebars', exphbs());
// Set our default template engine to "handlebars"
app.set('view engine', 'handlebars');

//=== STATIC DIRECTORY ========================================
app.use(express.static("public"));

//=== ROUTES ==========================================================
var routes = require("./routes/html-routes/htmlRoutes");
app.use(routes);

//=== START THE SERVER TO BEGIN LISTENING ==========================================================
app.listen(PORT, () => {
   console.log("App listening on http://localhost:" + PORT);
});








//=== RONS TEMPLATE CODE =========================================

// const express = require("express");
// const apiRoutes = require("./routes/api-routes");
// const htmlRoutes = require("./routes/html-routes");
// const db = require("./models");
// const seed = require("./utils/seed");
// const errorHandler = require("./utils/errorHandler");

// const PORT = process.env.PORT || 3000;
// const app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const exphbs = require("express-handlebars");

// app.engine(
//    "handlebars",
//    exphbs({
//       defaultLayout: "main",
//       partialsDir: __dirname + "/views/partials/"
//    })
// );
// app.set("view engine", "handlebars");

// // var routes = require("./controllers/burgersController.js");

// app.use("/api", apiRoutes);
// app.use(htmlRoutes);

// // error handling
// app.use(errorHandler);

// // drops all tables on eevery restart
// db.sequelize.sync({ force: true }).then(async () => {
//    // seed db
//    await seed(db.Test);

//    app.listen(PORT, () => {
//       console.log("🌎 => live on http://localhost:%s", PORT);
//    });
// });
