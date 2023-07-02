const mobilMenu = document.querySelector(".mobil-menu");
const menuBtn = document.querySelector(".btn-open");
const overlay = document.querySelector(".mobil-menu-overlay");
const allSubmenu = document.querySelectorAll(".submenu");
mobilMenu.style.height = window.innerHeight + "px";




allSubmenu.forEach(submenu => {
    submenu.addEventListener("click", submenuActive)
});
menuBtn.addEventListener("click", classCheck);
overlay.addEventListener("click", classCheck);

// Adds required classes

function classCheck() {

    mobilMenu.classList.forEach(grade => {
        if (grade === "mobil-menu") {
            mobilMenu.className = "mobil-menu active";
            overlay.className = "mobil-menu-overlay active";
            menuBtn.className = "btn-open opened";

        }
        else {
            mobilMenu.className = "mobil-menu"
            overlay.className = "mobil-menu-overlay";
            menuBtn.className = "btn-open";
            classReset();
        }
    });

}

// allows to return from the drop-down submenu

function submenuActive(e) {
    e.preventDefault();
    e.target.parentNode.children[1].className = "submenu-content active";


    e.target.parentNode.children[1].children[0].addEventListener("click", function () {

        e.target.parentNode.children[1].className = "submenu-content";

    });
}


// closes the open submenu
function classReset(e) {
    
    document.querySelectorAll(".submenu-content.active").forEach(element => {
        element.className = "submenu-content";
    });
    
}