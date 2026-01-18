// Services Section Module - UPDATED with 6 Services
export function initServices() {
    const servicesSection = document.getElementById('services');
    
    const servicesHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan <span class="text-primary">Kami</span></h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">
                    Kami menyediakan 6 layanan terintegrasi untuk mendukung operasional bisnis Anda dengan standar profesional tertinggi.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Service 1: Pengamanan (Security) -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/security.png" 
                             alt="Pengamanan (Security)" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fa-solid fa-shield-halved text-primary text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Pengamanan (Security)</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Layanan keamanan komprehensif dengan personel bersertifikat, sistem pengawasan modern, dan protokol keamanan terstandar.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Satpam bersertifikat</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Sistem CCTV & monitoring</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Pengamanan event & properti</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service 2: Ekspedisi Kurir -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/kurir.png" 
                             alt="Ekspedisi Kurir" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-shipping-fast text-accent text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Ekspedisi Kurir</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Layanan pengiriman barang yang cepat, aman, dan terpercaya dengan jaringan luas dan sistem tracking real-time.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Pengiriman lokal & nasional</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Tracking real-time</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Layanan express & reguler</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service 3: Man Power -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/man-power.png" 
                             alt="Man Power" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-support/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-user-tie text-support text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Man Power</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Penyediaan tenaga kerja profesional untuk berbagai kebutuhan industri dengan sistem seleksi dan pelatihan yang ketat.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Tenaga kerja terampil</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Staff administrasi & operasional</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Outsourcing tenaga kerja</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service 4: Cleaning Service -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/cleaning-service.png" 
                             alt="Cleaning Service" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-broom text-primary text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Cleaning Service</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Layanan kebersihan profesional untuk kantor, gedung, mall, dan properti komersial dengan standar kebersihan tinggi.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Cleaning harian & berkala</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Deep cleaning & spesialis</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Pengelolaan sampah</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service 5: Parkir -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/parkir.png" 
                             alt="Parkir" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-parking text-accent text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Parkir</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Manajemen dan operasional area parkir dengan sistem terintegrasi untuk efisiensi dan keamanan kendaraan.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Manajemen parkir gedung</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Sistem ticketing & payment</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Valet parking service</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Service 6: Loss Prevention -->
                <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div class="h-48 overflow-hidden">
                        <img src="assets/img/services/loss-prevention.png" 
                             alt="Loss Prevention" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 bg-support/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fa-solid fa-shield-halved text-support text-xl"></i>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900">Loss Prevention</h3>
                        </div>
                        <p class="text-gray-600 mb-6">
                            Sistem pencegahan kerugian dengan pengawasan ketat, audit internal, dan prosedur keamanan untuk minimalkan risiko.
                        </p>
                        <ul class="space-y-2 mb-6">
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Risk assessment & audit</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Pencegahan penyusupan</span>
                            </li>
                            <li class="flex items-center text-gray-600">
                                <i class="fas fa-check-circle text-support mr-3"></i>
                                <span>Monitoring aset & inventori</span>
                            </li>
                        </ul>
                        <a href="#contact" class="text-primary font-semibold hover:text-primary-dark inline-flex items-center">
                            Konsultasi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 class="text-2xl md:text-3xl font-bold mb-6">Butuh Solusi Terintegrasi untuk Bisnis Anda?</h3>
                <p class="text-white/90 mb-8 max-w-2xl mx-auto">
                    Tim profesional kami siap membantu mengoptimalkan operasional bisnis Anda dengan layanan keamanan, logistik, dan manajemen yang terpercaya.
                </p>
                <a href="#contact" class="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <i class="fas fa-calendar-check mr-3"></i> Jadwalkan Konsultasi
                </a>
            </div>
        </div>
    `;
    
    servicesSection.innerHTML = servicesHTML;
}