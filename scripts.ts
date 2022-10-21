
var titleChangeButton = document.getElementById("changeTitleButton");
var sectionOneTite = document.getElementById("sectionOneTite");

console.log("Hello world!");

titleChangeButton?.addEventListener('click', () => {
    if (sectionOneTite != null ) {
        if(sectionOneTite.innerText === "Starting a TypeScript Project"){
            sectionOneTite.innerText = "CHANGED THE TITLE"
        } else {
            sectionOneTite.innerText = "Starting a TypeScript Project"

        }
    }
})

