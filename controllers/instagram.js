const ig = require("instagram-node").instagram();

ig.use({
    client_id: "b3f7ab47aa5042528720b15689525bbf",
    client_secret: "52755404379e499c9ce04347e35c9659",
    access_token: "3308807151.b3f7ab4.379272d46f224de098c40d0559d4aaef"
});
const instagramUserId = "3308807151";

exports.getInstagramView = (req, res) => {
    ig.user_media_recent(instagramUserId, function(err, result, pagination, remaining, limit) {
        if (err) {
            console.log(err);
            res.json(err);
        }

        const data = result.map(image => ({
            link: image.link,
            img: image.images.low_resolution.url
        }));

        res.render("instagram", {
            layout: "main",
            language: req.params.language,
            isEnglish: req.params.language === "en",
            isPortuguese: req.params.language === "pt",
            images: data
        });
    });
};
