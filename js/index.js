 
        function toggleSidebar() {
            let sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("collapsed");

            if (window.innerWidth <= 768) {
                sidebar.classList.toggle("open");
            }
        }
