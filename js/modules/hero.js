// Hero Section Module - Updated
export function initHero() {
    const heroSection = document.getElementById('hero');
    
    const heroHTML = `
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-600 via-blue-600 to-gray-600 opacity-90"></div>
            <div class="absolute inset-0" style="background-image: url('assets/img/hero/barak-header.jpeg'); background-size: cover; background-position: center; opacity: 0.3;"></div>
        </div>
        
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="max-w-4xl mx-auto text-center animate-slide-up">
                <div class="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                    <span class="text-white font-medium px-3">Solusi Terintegrasi Sejak 2011</span>
                </div>
                
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Solusi  Keamanan & Layanan <span class="text-accent">Terintegrasi</span> Melindungi Asset Anda
                </h1>
                
                <p class="text-lg text-white mb-10 max-w-3xl mx-auto">
                    <span class="font-bold text-xl">PT. BIMASENA ADHIRAJASA RADHIKA (BARAK)</span> menyediakan solusi terintegrasi untuk pengamanan, logistik, dan manajemen sumber daya manusia dengan standar profesional tertinggi.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#services" class="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <i class="fas fa-shield-alt mr-2"></i> Layanan Kami
                    </a>
                    <a href="#contact" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <i class="fas fa-phone-alt mr-2"></i> Hubungi Kami
                    </a>
                </div>
            </div>
            
            <!-- Stats Section -->
            <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div class="text-3xl font-bold text-white mb-2">500+</div>
                    <div class="text-gray-200">Personel Keamanan</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div class="text-3xl font-bold text-white mb-2">12+</div>
                    <div class="text-gray-200">Tahun Pengalaman</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div class="text-3xl font-bold text-white mb-2">100+</div>
                    <div class="text-gray-200">Klien Puas</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div class="text-3xl font-bold text-white mb-2">6</div>
                    <div class="text-gray-200">Layanan Terintegrasi</div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <a href="#about" class="text-white hover:text-accent transition-colors duration-300">
                <div class="flex flex-col items-center">
                    <span class="text-sm mb-2">Scroll</span>
                    <i class="fas fa-chevron-down animate-bounce"></i>
                </div>
            </a>
        </div>
    `;
    
    heroSection.innerHTML = heroHTML;
}