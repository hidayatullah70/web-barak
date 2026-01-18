// Navigation Module
export function initNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    
    const navbarHTML = `
        <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <a href="index.html" class="flex items-center">
                            <img src="assets/img/logo/logo-barak-trans.png" alt="PT BARAK Logo" class="h-4 md:h-8 object-contain"/>
                        </a>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#hero" class="nav-link text-gray-700 hover:text-primary font-medium">Home</a>
                        <a href="#about" class="nav-link text-gray-700 hover:text-primary font-medium">About Us</a>
                        <a href="#services" class="nav-link text-gray-700 hover:text-primary font-medium">Services</a>
                        <a href="#portfolio" class="nav-link text-gray-700 hover:text-primary font-medium">Projects</a>
                        <a href="#contact" class="nav-link text-gray-700 hover:text-primary font-medium">Contact</a>
                        <a href="#contact" class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium shadow-md hover:shadow-lg">
                            Get Contact
                        </a>
                    </div>

                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button id="mobile-menu-button" class="text-gray-700 hover:text-primary focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Navigation Menu -->
                <div id="mobile-menu" class="md:hidden hidden bg-white border-t">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="#hero" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Home</a>
                        <a href="#about" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">About Us</a>
                        <a href="#services" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Services</a>
                        <a href="#portfolio" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Projects</a>
                        <a href="#contact" class="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Contact</a>
                        <a href="#contact" class="block px-3 py-2 mt-4 mx-3 text-center bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300">Get Quote</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    navbarContainer.innerHTML = navbarHTML;
    
    // Tambahkan event listeners untuk mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Tambahkan smooth scroll untuk semua nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Tutup mobile menu jika terbuka
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Scroll ke target dengan offset untuk fixed navbar
                const navbarHeight = document.querySelector('nav').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tambahkan efek navbar saat scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md', 'bg-white');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.remove('shadow-md', 'bg-white');
            nav.classList.add('bg-white/90');
        }
    });
}