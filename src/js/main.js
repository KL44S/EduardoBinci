(function() {
    createSidebarEvents();
    createBtnEvents();
    scrollProcess();
    navbarItemsProcess();
    processFooterStyles();

    function processFooterStyles() {
        var sectionDivsNumber = document.getElementsByClassName("section").length;
        var preFooter = document.getElementById("preFooter");
        
        if (sectionDivsNumber % 2) {
            preFooter.classList.add("odd-bk");
        }
        else {
            preFooter.classList.add("even-bk");
        };
    };

    function processLinks(elements, activeClass) {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var anchorElements = element.getElementsByTagName("a");
            if (anchorElements.length > 0) {
                var anchorElement = anchorElements[0];
                var href = anchorElement.getAttribute("href");

                element.onclick = function() {
                    var href = this.getElementsByTagName("a")[0].getAttribute("href");
                    window.location = href;
                };    

                var currentPage = getCurrentPage();
        
                if (href === currentPage) {
                    element.classList.add(activeClass);
                }
                else {
                    element.classList.remove(activeClass);
                }
            }
        };
    };

    function createBtnEvents() {
        var menuItems = document.getElementsByName("menu-item");
        if (menuItems) {
            for (i = 0; i < menuItems.length; i++) {
                menuItems[i].addEventListener("click", function () {
                    var scrollTo = this.getAttribute("scroll-to");
                    smoothScrollTo(scrollTo, 500);
                });
            };
        };

        var chatBtn = document.getElementsByName("chat-btn");
        if (chatBtn) {
            for (i = 0; i < chatBtn.length; i++) {
                chatBtn[i].addEventListener("click", function () {
                    window.open("https://wa.me/5491134289400", '_blank');
                });
            };
        };

        var buttons = document.getElementsByTagName('button');
        if (buttons) {
            for (i = 0; i < buttons.length; i++) {
                var button = buttons[i];
                button.addEventListener("mouseenter", toggleBtnImage);
                button.addEventListener("mouseleave", toggleBtnImage);
                button.addEventListener("mousedown", toggleBtnImage);
                button.addEventListener("focus", toggleBtnImage);
                button.addEventListener("blur", toggleBtnImage);
            };
        };
    };

    function toggleBtnImage(event) {
        button = event.target;
        var images = button.getElementsByTagName("img");
        if (images) {
            var image = images[0];
            if (image) {
                src = image.getAttribute("src");
                newSrc = src;

                if (["mouseenter", "focus", "mousedown"].includes(event.type) && src.includes("white")) {
                    image.setAttribute("src", src.replace("white", "black"));
                }
                else if (["mouseleave", "blur"].includes(event.type) && src.includes("black")) {
                    image.setAttribute("src", src.replace("black", "white"));
                };
            };
        };
    };

    function smoothScrollTo(targetId, duration) {
        var targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 50;
        var startPosition = window.scrollY || document.documentElement.scrollTop;
        var distance = targetPosition - startPosition;
        var startTime = null;

        function animationStep(currentTime) {
            if (!startTime) startTime = currentTime;
            var elapsedTime = currentTime - startTime;
            var t = elapsedTime / duration;
            var ease = t < 0.5
                ? 2 * Math.pow(t, 2)
                : 1 - Math.pow(-2 * t + 2, 2) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (elapsedTime < duration) {
                requestAnimationFrame(animationStep);
            } else {
                window.scrollTo(0, targetPosition);
            };
        };

        requestAnimationFrame(animationStep);
    };

    function createSidebarEvents() {
        document.getElementById("openSidebar").onclick = openSidebar;
        document.getElementById("closeSidebar").onclick = closeSidebar;
    };

    function closeSidebar() {
        document.getElementById("sidebar").classList.remove("open");
    };
    
    function openSidebar() {
        document.getElementById("sidebar").classList.add("open");
    };

    function getCurrentPage() {
        var currentPath = window.location.pathname.split("/");
        var currentPage = currentPath[currentPath.length - 1];

        if (currentPage === "") {
            currentPage = "index.html";
        };

        return currentPage;
    };

    function scrollProcess() {
        document.body.onscroll = function() {
            var navbar = document.getElementById("navbar");
            var className = "collapse";
    
            if (document.body.scrollTop < 100) {
                navbar.classList.remove(className);
            }
            else {
                navbar.classList.add(className);
            };
        };
    };

    function navbarItemsProcess() {
        var navbarElements = document.getElementsByClassName("navbar-item");
        var sidebarElements = document.getElementsByClassName("sidebar-item");
        var activeClass = "active";
    
        processLinks(navbarElements, activeClass);
        processLinks(sidebarElements, activeClass);
    };
})();