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
        var btn = document.getElementById("more");
        if (btn) {
            document.getElementById("more").onclick = function() {
                window.location = "servicios.html";
            };
        };  
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