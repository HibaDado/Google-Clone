var bodyslct = document.querySelector("body");
        var button = document.querySelector(".change-mode");
        var mainslct = document.querySelector(".main");
        var footerslct = document.querySelector("footer");
        var footerInfo = document.querySelector(".info");
        var footerLocation = document.querySelector(".location");
        var topBar = document.querySelector(".top-bar");

        button.addEventListener("click", function() {
            bodyslct.classList.toggle("dark-mode");
            mainslct.classList.toggle("dark-mode");
            footerslct.classList.toggle("dark-mode");
            footerInfo.classList.toggle("dark-mode");
            footerLocation.classList.toggle("darker-mode");
            topBar.classList.toggle("dark-mode");
        });