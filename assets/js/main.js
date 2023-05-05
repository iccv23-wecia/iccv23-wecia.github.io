(function () {
    //===== Preloader

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


})();

//====== Managing navigation logic
const MainNav = {
    Home: "home-nav",
    Workshop: "workshop-nav",
    Challenge: "challenge-nav",
    Submission: "submission-nav",
    Speakers: "speakers-nav",
    Organizers: "organizers-nav",
    Dates: "dates-nav",
    Program: "program-nav",
    Schedule: "schedule-nav",
}
ACTIVE_NAV = MainNav.Home

function switch_nav(nav) {
    document.getElementById(ACTIVE_NAV).classList.remove("active")
    ACTIVE_NAV = nav
    document.getElementById(ACTIVE_NAV).classList.add("active")
}
