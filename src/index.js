const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
require("dotenv").config();
const conectarDB = require("./mongoDb");
//Crear app
conectarDB();
const app = express();

//Configuracion
app.set("port", process.env.PORT || 8888);
app.set("views", path.join(__dirname, "/views"));

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./libs/handlebars"),
});
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");

//Middlewares

app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

//Rutas
app.use(require("./routes"));

app.use("/admin/login", require("./routes/admin/login"));
app.use("/admin", require("./routes/admin/panel"));
app.use("/api/comentarios", require("./routes/api/comentarios"));
app.use("/api/tematicas", require("./routes/api/tematicas"));
app.use(require("./routes"));

//Carpeta public
app.use(express.static(path.join(__dirname, "public")));

//Conexion
app.listen(app.get("port"), () =>
    console.log("Server running on port ", app.get("port"))
);