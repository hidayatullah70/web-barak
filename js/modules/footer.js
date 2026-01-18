// Footer Module
export function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    const footerHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <!-- Company Info -->
                    <div class="lg:col-span-2">
                        <div class="flex items-center">
                            <a href="index.html" class="flex items-center">
                                <img src="assets/img/logo/logo-trans.png" alt="Logo" class="h-12 md:h-16 object-contain"/>
                            </a>
                        </div>
                        <p class="text-gray-300 mb-6 max-w-md">
                            Ikuti Kami :</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                                <i class="fab fa-facebook-f text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                                <i class="fab fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                                <i class="fab fa-youtube text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-xl font-bold text-white mb-6">Tautan Cepat</h3>
                        <ul class="space-y-3">
                            <li><a href="#hero" class="text-gray-300 hover:text-white transition-colors duration-300">Home</a></li>
                            <li><a href="#about" class="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
                            <li><a href="#portfolio" class="text-gray-300 hover:text-white transition-colors duration-300">Projects</a></li>
                            <li><a href="#contact" class="text-gray-300 hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    
                    <!-- Services -->
                    <div>
                        <h3 class="text-xl font-bold text-white mb-6">Layanan</h3>
                        <ul class="space-y-3">
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Pengamanan (Security)</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Ekspedisi Kurir</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Man Power</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Cleaning Service</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Parkir Management</a></li>
                            <li><a href="#services" class="text-gray-300 hover:text-white transition-colors duration-300">Loss Prevention</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Newsletter -->
                <div class="mt-12 pt-10 border-t border-gray-700">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-6 md:mb-0">
                            <h3 class="text-xl font-bold text-white mb-3">Berlangganan Newsletter</h3>
                            <p class="text-gray-300">Dapatkan informasi terbaru tentang proyek dan layanan kami.</p>
                        </div>
                        <div class="w-full md:w-auto">
                            <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
                                <input type="email" placeholder="Email Anda" required 
                                       class="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-64">
                                <button type="submit" class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                                    Berlangganan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom Footer -->
                <div class="mt-12 pt-8 border-t border-gray-800">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; ${new Date().getFullYear()} PT. Bimasena Adhirajasa Radhika (BARAK). All rights reserved.<br>
                            Website oleh <span class="text-primary">JustHidy Web Developer</span>
                        </div>
                        <div class="flex space-x-6">
                            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    footerContainer.innerHTML = footerHTML;
    
    // Tambahkan event listener untuk newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            // Simulasi berlangganan newsletter
            alert(`Terima kasih! Email ${emailInput.value} telah berhasil didaftarkan untuk newsletter.`);
            emailInput.value = '';
        });
    }
}