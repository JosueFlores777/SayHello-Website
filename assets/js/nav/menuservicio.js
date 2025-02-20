class Navbar {
    constructor(targetElementId) {
        this.targetElementId = targetElementId;
    }
    setActiveLink() {
        const currentPath = window.location.pathname
            .replace(/\/$/, "")           // Elimina slash final
            .replace(/\.html$/, "");      // Elimina extensión .html
        console.log("Ruta actual:", currentPath);

        const navLinks = document.querySelectorAll('.navtext');
        console.log("Enlaces encontrados:", navLinks.length);

        navLinks.forEach(link => {
            let linkPath = new URL(link.href, window.location.origin).pathname
                .replace(/\/$/, "")      // Elimina slash final
                .replace(/\.html$/, ""); // Elimina extensión .html

            console.log(`Verificando enlace: ${link.href} | Ruta del enlace: ${linkPath}`);

            // Ajuste para rutas relativas dentro de subdirectorios
            if (currentPath.endsWith(linkPath)) {
                link.classList.add('activeC');
                console.log(`✅ Activado: ${link.textContent}`);

                if (link.closest('.mega-box')) {
                    const servicesLink = document.querySelector('.desktop-item.navtext');
                    if (servicesLink) {
                        servicesLink.classList.add('activeC');
                        console.log(`🔔 Activado enlace padre: ${servicesLink.textContent}`);
                    }
                }
            }
        });
    }



    render() {
        const navHtml = `
            <nav>
                <div class="wrapper fixed-top">
                    <div class="logo">
                        <a href="https://usayhello.com/">
                            <img src="../../public/img/logo blanco.png" alt="Logo">
                        </a>
                    </div>

                    <input type="radio" name="slider" id="menu-btn">
                    <input type="radio" name="slider" id="close-btn">

                    <ul class="nav-links">
                        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                        <li>
                            <a class="desktop-item navtext">Services 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </a>
                            <input type="checkbox" id="showMega">
                            <label for="showMega" class="mobile-item navtext">Services
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </label>
                            <div class="mega-box">
                                <div class="content">
                                    <div class="row">
                                        <header>Digital Services</header>
                                        <ul class="mega-links">
                                            <li><a href="./branding-logodesign" class="navtext">Branding & Graphic Design <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg></a></li>
                                            <li><a href="./digital-marketing" class="navtext">Digital Marketing <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                    <div class="row">
                                      <header class="navtext2">Security services</header>
                                        <ul class="mega-links">
                                            <li><a href="./advertising-plans" class="navtext">Advertising Plans<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg></a></li>
                                            <li><a href="./website-development" class="navtext">Website Development<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                            </svg></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="../work" class="navtext">Work</a></li>
                        <li><a href="../about" class="navtext">About us</a></li>
                        <li><a href="../whyus" class="navtext">Why us</a></li>
                        <li><a href="../contact" class="navtext">Contact</a></li>
                    </ul>
<div class="text-end">
                    <button class="btn2 btn-homeMc" onclick="selectBox(16)">
                        Start a Project
                        <svg style="margin-left:6px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right">
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>


                    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
                </div>
            </nav>
        `;

        const targetElement = document.getElementById(this.targetElementId);
        if (targetElement) {
            targetElement.innerHTML = navHtml;
            this.setActiveLink(); // Activa los enlaces después de renderizar
        } else {
            console.error(`Element with ID "${this.targetElementId}" not found.`);
        }
    }
}

// Inicializa la barra de navegación
const navbar = new Navbar('navbar-container');
navbar.render();
