const express = require("express");
const app = express();
var ig = require('instagram-node').instagram();
const exphbs = require("express-handlebars");

const translations = require("./views/helpers/translations")

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
    getPortraitsPage1English,
    getPortraitsPage1Portuguese,
    getPortraitsPage2English,
    getPortraitsPage2Portuguese,
    getPortraitsPage3English,
    getPortraitsPage3Portuguese,
    getPortraitsPage4English,
    getPortraitsPage4Portuguese,
    getPortraitsPage5English,
    getPortraitsPage5Portuguese,
    getKidsAndFamiliesPageEnglish,
    getKidsAndFamiliesPagePortuguese,
    getKidsAndFamiliesPage1English,
    getKidsAndFamiliesPage1Portuguese,
    getKidsAndFamiliesPage2English,
    getKidsAndFamiliesPage2Portuguese,
    getKidsAndFamiliesPage3English,
    getKidsAndFamiliesPage3Portuguese,
    getKidsAndFamiliesPage4English,
    getKidsAndFamiliesPage4Portuguese,
    getKidsAndFamiliesPage5English,
    getKidsAndFamiliesPage5Portuguese,
    getKidsAndFamiliesPage6English,
    getKidsAndFamiliesPage6Portuguese,
    getKidsAndFamiliesPage7English,
    getKidsAndFamiliesPage7Portuguese,
    getPregnancyPageEnglish,
    getPregnancyPagePortuguese,
    getPregnancyPage1English,
    getPregnancyPage1Portuguese,
    getPregnancyPage2English,
    getPregnancyPage2Portuguese,
    getPregnancyPage3English,
    getPregnancyPage3Portuguese,
    getPregnancyPage4English,
    getPregnancyPage4Portuguese,
    getCouplesPage1Portuguese,
    getCouplesPage1English,
    getInstagramEnglish,
    getInstagramPortuguese,
    getNewbornPagePortuguese,
    getNewbornPageEnglish,
    getNewbornPage1Portuguese,
    getNewbornPage1English,
    getNewbornPage2Portuguese,
    getNewbornPage2English,
    getNewbornPage3Portuguese,
    getNewbornPage3English
} = require("./controllers/views");

app.use(express.static("public"));

const hbs = exphbs.create({
    helpers: {
        translate: translations.translateHelper,
        link: translations.websiteLink
    }
});
app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.get("/en", getFirstPageEnglish);
app.get("/pt", getFirstPagePortuguese);

app.get("/en/couples", getCouplesPageEnglish);
app.get("/pt/couples", getCouplesPagePortuguese);

app.get("/en/couples/1", getCouplesPage1English);
app.get("/pt/couples/1", getCouplesPage1Portuguese);

app.get("/en/kidsandfamilies", getKidsAndFamiliesPageEnglish);
app.get("/pt/kidsandfamilies", getKidsAndFamiliesPagePortuguese);
app.get("/en/kidsandfamilies/1", getKidsAndFamiliesPage1English);
app.get("/pt/kidsandfamilies/1", getKidsAndFamiliesPage1Portuguese);
app.get("/en/kidsandfamilies/2", getKidsAndFamiliesPage2English);
app.get("/pt/kidsandfamilies/2", getKidsAndFamiliesPage2Portuguese);
app.get("/en/kidsandfamilies/3", getKidsAndFamiliesPage3English);
app.get("/pt/kidsandfamilies/3", getKidsAndFamiliesPage3Portuguese);
app.get("/en/kidsandfamilies/4", getKidsAndFamiliesPage4English);
app.get("/pt/kidsandfamilies/4", getKidsAndFamiliesPage4Portuguese);
app.get("/en/kidsandfamilies/5", getKidsAndFamiliesPage5English);
app.get("/pt/kidsandfamilies/5", getKidsAndFamiliesPage5Portuguese);
app.get("/en/kidsandfamilies/6", getKidsAndFamiliesPage6English);
app.get("/pt/kidsandfamilies/6", getKidsAndFamiliesPage6Portuguese);
app.get("/en/kidsandfamilies/7", getKidsAndFamiliesPage7English);
app.get("/pt/kidsandfamilies/7", getKidsAndFamiliesPage7Portuguese);

app.get("/en/landscapesandcityscapes", getLandscapesPageEnglish);
app.get("/pt/landscapesandcityscapes", getLandscapesPagePortuguese);

app.get("/en/portraits", getPortraitsPageEnglish);
app.get("/pt/portraits", getPortraitsPagePortuguese);
app.get("/en/portraits/1", getPortraitsPage1English);
app.get("/pt/portraits/1", getPortraitsPage1Portuguese);
app.get("/en/portraits/2", getPortraitsPage2English);
app.get("/pt/portraits/2", getPortraitsPage2Portuguese);
app.get("/en/portraits/3", getPortraitsPage3English);
app.get("/pt/portraits/3", getPortraitsPage3Portuguese);
app.get("/en/portraits/4", getPortraitsPage4English);
app.get("/pt/portraits/4", getPortraitsPage4Portuguese);
app.get("/en/portraits/5", getPortraitsPage5English);
app.get("/pt/portraits/5", getPortraitsPage5Portuguese);

app.get("/en/maternity", getPregnancyPageEnglish);
app.get("/pt/maternity", getPregnancyPagePortuguese);
app.get("/en/maternity/1", getPregnancyPage1English);
app.get("/pt/maternity/1", getPregnancyPage1Portuguese);
app.get("/en/maternity/2", getPregnancyPage2English);
app.get("/pt/maternity/2", getPregnancyPage2Portuguese);
app.get("/en/maternity/3", getPregnancyPage3English);
app.get("/pt/maternity/3", getPregnancyPage3Portuguese);
app.get("/en/maternity/4", getPregnancyPage4English);
app.get("/pt/maternity/4", getPregnancyPage4Portuguese);

app.get("/en/newborns", getNewbornPageEnglish);
app.get("/pt/newborns", getNewbornPagePortuguese);
app.get("/en/newborns/1", getNewbornPage1English);
app.get("/pt/newborns/1", getNewbornPage1Portuguese);
app.get("/en/newborns/2", getNewbornPage2English);
app.get("/pt/newborns/2", getNewbornPage2Portuguese);
app.get("/en/newborns/3", getNewbornPage3English);
app.get("/pt/newborns/3", getNewbornPage3Portuguese);

app.get("/en/contact", getContactPageEnglish);
app.get("/pt/contact", getContactPagePortuguese);

app.get("/en/about", getAboutMePageEnglish);
app.get("/pt/about", getAboutMePagePortuguese);

app.get("/en/fotosemberlim", getBerlinPageEnglish);
app.get("/pt/fotosemberlim", getBerlinPagePortuguese);

app.get("/en/instagram", getInstagramEnglish);
app.get("/pt/instagram", getInstagramPortuguese);

// ig.use({
//     client_id: 'b3f7ab47aa5042528720b15689525bbf',
//     client_secret: '52755404379e499c9ce04347e35c9659'
// });
//
// var redirectUri = 'http://localhost:8080/en/instagram'
//
// app.get('/authorize', function(req, res){
//     res.redirect(ig.get_authorization_url(redirectUri, { scope : ['public_content','likes']}) );
// });
//
// app.get('/handleAuth', function(req, res){
//     ig.authorize_user(req.query.code, redirectUri, function(err, result){
//         if(err) res.send( err );
//         accessToken = result.access_token;
//         res.redirect('/en');
//      });
//  })
//
//  app.get('/', function(req, res){
//     ig.use({
//      access_token : accessToken
//     });
//
//     ig.user_media_recent('access_token.split('.')[0]', function(err, result, pagination, remaining, limit) {
//         if(err) res.json(err);
//         res.render("views/index", { instagram : result });
//     });
// });
app.listen(5050);
