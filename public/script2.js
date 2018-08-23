let largePicturePosition;

$(".picture-bottom").on("click", function(event) {
    const url = $(event.currentTarget).attr("src");
    const position = parseInt($(event.currentTarget).attr("data-position"));
    if (position == 0) {
        $(".left-arrow").css({ visibility: " hidden" });
    }
    if (position == $(".picture-bottom").length - 1) {
        $(".right-arrow").css({ visibility: " hidden" });
    }
    largePicturePosition = position;
    console.log(largePicturePosition);
    $(".white-background").css({
        display: "inline",
        opacity: 0.1
    });
    $(".white-background-inlet").css({
        "background-image": `url(${url})`
    });

    setTimeout(function() {
        $(".white-background").css({
            opacity: 1
        });
    });
});

$(".left-arrow").on("click", function() {
    $(".right-arrow").css({ visibility: "visible" });
    if (largePicturePosition === 0) {
        return;
    }
    largePicturePosition--;
    const previousPicture = $(".picture-bottom")[largePicturePosition];
    const url = $(previousPicture).attr("src");
    $(".white-background-inlet").css({
        "background-image": `url(${url})`
    });
});

$(".right-arrow").on("click", function() {
    $(".left-arrow").css({ visibility: "visible" });
    if (largePicturePosition === $(".picture-bottom").length - 1) {
        return;
    }
    largePicturePosition++;
    const previousPicture = $(".picture-bottom")[largePicturePosition];
    const url = $(previousPicture).attr("src");
    $(".white-background-inlet").css({
        "background-image": `url(${url})`
    });
});

$(".close").on("click", function() {
    $(".white-background").css({ display: "none" });
});

document.on("keydown", function(event) {
    if (event.keyCode == 37) {
        if (largePicturePosition === 0) {
            return;
        }
        largePicturePosition--;
        const previousPicture = $(".picture-bottom")[largePicturePosition];
        const url = $(previousPicture).attr("src");
        $(".white-background-inlet").css({
            "background-image": `url(${url})`
        });
    }
});

document.on("keydown", function(event) {
    if (event.keyCode == 39) {
        if (largePicturePosition === $(".picture-bottom").length - 1) {
            return;
        }
        largePicturePosition++;
        const previousPicture = $(".picture-bottom")[largePicturePosition];
        const url = $(previousPicture).attr("src");
        $(".white-background-inlet").css({
            "background-image": `url(${url})`
        });
    }
});
