const express = require("express");
const app = express();
const hb = require("express-handlebars");
const {
    getFirstPageEnglish,
    getFirstPagePortuguese,
    getContactPageEnglish,
    getContactPagePortuguese,
    getAboutMePageEnglish,
    getAboutMePagePortuguese,
    getBerlinPageEnglish,
    getBerlinPagePortuguese,
    getCouplesPageEnglish,
    getCouplesPagePortuguese,
    getLandscapesPageEnglish,
    getLandscapesPagePortuguese,
    getPortraitsPageEnglish,
    getPortraitsPagePortuguese,
    getKidsAndFamilyPageEnglish,
    getKidsAndFamilyPagePortuguese
} = require("./controllers/views");

app.use(express.static("public"));

app.engine("handlebars", hb());

app.set("view engine", "handlebars");

app.get("/", getFirstPageEnglish);
app.get("/pt", getFirstPagePortuguese);

app.get("/couples", getCouplesPageEnglish);
app.get("/pt/casais", getCouplesPagePortuguese);

app.get("/kidsandfamily", getKidsAndFamilyPageEnglish);
app.get("/pt/criancasefamilia", getKidsAndFamilyPagePortuguese);

app.get("/landscapes", getLandscapesPageEnglish);
app.get("/pt/paisagens", getLandscapesPagePortuguese);

app.get("/portraits", getPortraitsPageEnglish);
app.get("/pt/retratos", getPortraitsPagePortuguese);

app.get("/contact", getContactPageEnglish);
app.get("/pt/contato", getContactPagePortuguese);

app.get("/about", getAboutMePageEnglish);
app.get("/pt/sobre", getAboutMePagePortuguese);

app.get("/fotosemberlim", getBerlinPageEnglish);
app.get("/pt/fotosemberlim", getBerlinPagePortuguese);

app.listen(8080);
