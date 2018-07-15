$(".picture-bottom").on("click", function(event) {
    const url = $(event.currentTarget).attr("src");
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

$(".close").on("click", function() {
    $(".white-background").css({ display: "none" });
});

$(".white-background").on("click", function() {
    $(".white-background").css({ display: "none" });
});
