document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector("a");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        const submenuToggles = dropdown.querySelectorAll(".submenu-toggle");
        
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            closeAllDropdowns();
            dropdownContent.classList.toggle("open");
        });
        
        submenuToggles.forEach(toggle => {
            toggle.addEventListener("click", function (event) {
                event.preventDefault();
                let submenu = this.nextElementSibling;
                let isOpen = submenu.classList.contains("open");
                
                closeAllSubmenus();
                
                if (!isOpen) {
                    submenu.classList.add("open");
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                }
            });
        });
    });
    
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.classList.remove("open");
        });
    }
    
    function closeAllSubmenus() {
        document.querySelectorAll(".submenu-content").forEach(menu => {
            menu.classList.remove("open");
            menu.style.maxHeight = null;
        });
    }
    
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            closeAllDropdowns();
            closeAllSubmenus();
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function () {
            let dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.classList.add("visible");
        });
        dropdown.addEventListener("mouseleave", function () {
            let dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.classList.remove("visible");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector("a");
        const dropdownContent = dropdown.querySelector(".dropdown-content");
        const submenuToggles = dropdown.querySelectorAll(".submenu-toggle");
        
        dropdownToggle.addEventListener("click", function (event) {
            event.preventDefault();
            dropdownContent.classList.toggle("open");
            dropdownContent.style.display = dropdownContent.classList.contains("open") ? "block" : "none";
        });
        
        submenuToggles.forEach(toggle => {
            toggle.addEventListener("click", function (event) {
                event.preventDefault();
                let submenu = this.nextElementSibling;
                let isOpen = submenu.classList.contains("open");
                
                closeAllSubmenus();
                
                if (!isOpen) {
                    submenu.classList.add("open");
                    submenu.style.maxHeight = submenu.scrollHeight + "px";
                    submenu.style.display = "block";
                }
            });
        });
    });
    
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.classList.remove("open");
            content.style.display = "none";
        });
    }
    
    function closeAllSubmenus() {
        document.querySelectorAll(".submenu-content").forEach(menu => {
            menu.classList.remove("open");
            menu.style.maxHeight = null;
            menu.style.display = "none";
        });
    }
    
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            closeAllDropdowns();
            closeAllSubmenus();
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function () {
            let dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.classList.add("visible");
            dropdownContent.style.display = "block";
        });
        dropdown.addEventListener("mouseleave", function () {
            let dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.classList.remove("visible");
            dropdownContent.style.display = "none";
        });
    });
});