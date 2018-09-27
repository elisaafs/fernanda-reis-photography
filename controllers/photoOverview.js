exports.renderOverviewPage = (req, res) => {
    let photos;
    let name;
    let descriptionHeading;
    let description1;
    switch (req.params.category) {
        case "portraits":
            name = "portraits";
            descriptionHeading = "PORTRAIT_HEADING";
            description1 = "PORTRAIT_1";
            photos = [
                { src: "/Giordana/03072018-028.jpg", rawName: "Giordana" },
                { src: "/Graziela/09072017-013.jpg", rawName: "Graziela" },
                { src: "/Maria/Maria.png", rawName: "Maria" },
                { src: "/Manoella/03062017-009.jpg", rawName: "Manoella" },
                { src: "/Isadora/26042018-063.jpg", rawName: "Isadora" }
            ];
            break;
        case "newborns":
            name = "newborns";
            descriptionHeading = "NEWBORNS_HEADING";
            description1 = "NEWBORNS_1";
            photos = [
                { src: "/Lavinia/18022017-005.jpg", rawName: "Lavínia" },
                { src: "/Gabriel/28022016-010.jpg", rawName: "Gabriel" },
                { src: "/Manuela/29082015-006.jpg", rawName: "Manuela" },
                { src: "/Elisabeth-Sophie/01082018-019.jpg", rawName: "Elisabeth & Sophie" }
            ];
            break;
        case "kidsandfamilies":
            name = "kidsandfamilies";
            descriptionHeading = "KIDSANDFAMILIES_HEADING";
            description1 = "KIDSANDFAMILIES_1";
            photos = [
                { src: "/Lenita/13062018-026.jpg", rawName: "Lenita" },
                { src: "/Bernardo-9/21092015-002.jpg", name: "BERNARDO_9" },
                { src: "/Manuela-9/05062016-004.jpg", name: "MANUELA_9" },
                { src: "/Bernardo-1/08022016-003.jpg", name: "BERNARDO_1" },
                { src: "/Manuela-12/30072016-010.jpg", name: "MANUELA_1" },
                { src: "/Manuela-Batism/26122015-006.jpg", name: "MANUELA_BAP" },
                { src: "/Malu-3/03092016-006.jpg", rawName: "Malu" }
            ];
            break;
        case "couples":
            name = "couples";
            descriptionHeading = "COUPLES_HEADING";
            description1 = "COUPLES_1";
            photos = [
                { src: "/Talita-Daniel/13022016-003.jpg", rawName: "Talita & Daniel" },
                { src: "/Filiz-Domenico/006.jpg", rawName: "Filiz & Domenico" }
            ];
            break;
        case "maternity":
            name = "maternity";
            descriptionHeading = "MATERNITY_HEADING";
            description1 = "MATERNITY_1";
            photos = [
                { src: "/Livia/19072017-003.jpg", rawName: "Lívia" },
                { src: "/Lucia/24122016-003.jpg", rawName: "Lúcia" },
                { src: "/Miriam/07062015-008.jpg", rawName: "Míriam" },
                { src: "/Renata/28062015-010.jpg", rawName: "Renata" }
            ];
            break;
    }

    res.render("photoOverview", {
        layout: "main",
        language: req.params.language,
        photos,
        name,
        category: req.params.category,
        descriptionHeading,
        description1
    });
};
