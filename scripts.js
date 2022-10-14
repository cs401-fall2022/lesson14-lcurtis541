var titleChangeButton = document.getElementById("changeTitleButton");
var sectionOneTite = document.getElementById("sectionOneTite");
titleChangeButton === null || titleChangeButton === void 0 ? void 0 : titleChangeButton.addEventListener('click', function () {
    if (sectionOneTite != null) {
        if (sectionOneTite.innerText === "Starting a TypeScript Project") {
            sectionOneTite.innerText = "CHANGED THE TITLE";
        }
        else {
            sectionOneTite.innerText = "Starting a TypeScript Project";
        }
    }
});
