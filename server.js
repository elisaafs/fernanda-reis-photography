const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const translations = require("./views/helpers/translations");
const { addOne } = require("./views/helpers/misc");

const {
    getFirstPage,
    getContactPage,
    getAboutMePage,
    renderPhotoSetPage
} = require("./controllers/views");

const { renderOverviewPage } = require("./controllers/photoOverview");
const { getInstagramView } = require("./controllers/instagram");

app.use(express.static("public"));

const hbs = exphbs.create({
    helpers: {
        translate: translations.translateHelper,
        link: translations.websiteLink,
        addOne: addOne,
        photoSetName: translations.photoSetName
    }
});
app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.get("/", (req, res) => res.redirect("/en"));

app.get("/:language", getFirstPage);

app.get("/:language/about", getAboutMePage);
app.get("/:language/instagram", getInstagramView);
app.get("/:language/contact", getContactPage);

app.get("/:language/:category", renderOverviewPage);
app.get("/:language/:category/:imageset", renderPhotoSetPage);

app.listen(5050);
