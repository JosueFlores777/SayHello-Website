class Menu {
    constructor(targetElementId, baseActive = 1, menuItems = []) {
        this.targetElementId = targetElementId;
        this.baseActive = baseActive;
        this.menuItems = menuItems;
    }

    getBasePath(level) {
        return ["./", "../../", "../../../"][level - 1] || "./";
    }

    setActiveLink() {
        const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, ""); // Quita el '/' final si existe
    
        this.menuItems.forEach(item => {
            const itemPath = new URL(item.link, window.location.origin).pathname.toLowerCase().replace(/\/$/, "");
            item.active = currentPath.includes(itemPath);
        });
    
        // Si no hay enlace activo, usa el baseActive como predeterminado
        if (!this.menuItems.some(item => item.active)) {
            const defaultIndex = this.baseActive - 1;
            if (this.menuItems[defaultIndex]) {
                this.menuItems[defaultIndex].active = true;
            }
        }
    }
    

    generateServiceSection(headerText, services) {
        return `
            <div class="row">
                <header class="${headerText === 'Security Services' ? 'navtext2' : ''}">${headerText}</header>
                <ul class="mega-links">
                    ${services.map(service => `
                        <li>
                            <a href="${service.link}" class="navtext">
                                ${service.text}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                                </svg>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>`;
    }

    render() {
        this.setActiveLink();

        const servicesSections = [
            {
                header: "Digital Services",
                services: [
                    { text: "Branding & Graphic Design", link: "../view/services/branding-logodesign" },
                    { text: "Digital Marketing", link: "../view/services/digital-marketing" },
                ]
            },
            {
                header: "Security Services",
                services: [
                    { text: "Advertising Plans", link: "../view/services/advertising-plans" },
                    { text: "Website Development", link: "../view/services/website-development" },
                ]
            }
        ];

        const servicesHtml = servicesSections.map(section =>
            this.generateServiceSection(section.header, section.services)
        ).join('');

        const navItemsHtml = this.menuItems.map(item => `
            <li>
                <a href="${item.link}" class="navtext ${item.active ? 'activeC' : ''}">${item.text}</a>
            </li>
        `).join('');

        const navHtml = `
        <nav>
            <div class="wrapper fixed-top">
                <div class="logo">
                    <a href="https://usayhello.com/">
                        <img class="img-fluid" src="../public/img/logo blanco.png" alt="Logo">
                    </a>
                </div>
                <input type="radio" name="slider" id="menu-btn">
                <input type="radio" name="slider" id="close-btn">

                <ul class="nav-links">
                    <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                    <li>
                        <a class="desktop-item navtext">Services 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </a>
                        <input type="checkbox" id="showMega">
                        <label for="showMega" class="mobile-item navtext">Services</label>
                        <div class="mega-box">
                            <div class="content">
                                ${servicesHtml}
                            </div>
                        </div>
                    </li>
                    ${navItemsHtml}
                </ul>

                <div class="text-end">
                   <button class="btn2 btn-homeMc" id="box2" onclick="selectBox(1, event)">Start a Project
                        <svg style="margin-left:6px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right">
                            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>

                <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
            </div>
        </nav>`;

        const targetElement = document.getElementById(this.targetElementId);
        if (targetElement) {
            targetElement.innerHTML = navHtml;
        } else {
            console.error(`Element with ID "${this.targetElementId}" not found.`);
        }
    }
}

// Inicialización con texto y enlaces
const menu = new Menu('navbar-container', 1, [
    { text: 'Work', link: './work', active: false },
    { text: 'About us', link: './about', active: false },
    { text: 'Why us', link: './whyus', active: false },
    { text: 'Contact', link: './contact', active: false },
]);

menu.render();
