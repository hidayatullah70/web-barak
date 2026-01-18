// Portfolio Section Module - Updated untuk jasa security & layanan
export function initPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    
    const portfolioHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Klien & Proyek <span class="text-primary">Kami</span></h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">
                    Telah dipercaya oleh berbagai perusahaan ternama dalam penyediaan layanan keamanan dan jasa terintegrasi.
                </p>
            </div>
            
            <!-- Portfolio Filter -->
            <div class="flex flex-wrap justify-center gap-4 mb-12">
                <button class="portfolio-filter px-5 py-2 rounded-full bg-primary text-white font-medium" data-filter="all">
                    Semua Klien
                </button>
                <button class="portfolio-filter px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors duration-300" data-filter="retail">
                    Retail & Mall
                </button>
                <button class="portfolio-filter px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors duration-300" data-filter="office">
                    Perkantoran
                </button>
                <button class="portfolio-filter px-5 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors duration-300" data-filter="industrial">
                    Industri
                </button>
            </div>
            
            <!-- Portfolio Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project 1 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="retail">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Mall Taman Anggrek" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Retail</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Mall Taman Anggrek</h3>
                        <p class="text-gray-600 mb-4">
                            Penyediaan layanan keamanan, cleaning service, dan manajemen parkir untuk salah satu mall terbesar di Jakarta.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 50+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2022 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="office">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Gedung Perkantoran" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Perkantoran</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Plaza Bapindo</h3>
                        <p class="text-gray-600 mb-4">
                            Layanan security, man power untuk resepsionis dan admin, serta cleaning service untuk gedung perkantoran 20 lantai.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 30+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2021 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="industrial">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Pabrik Industri" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-support text-white px-3 py-1 rounded-full text-sm font-medium">Industri</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">PT. Industri Tekstil Maju</h3>
                        <p class="text-gray-600 mb-4">
                            Penyediaan layanan keamanan 24/7, loss prevention system, dan tenaga kerja untuk operasional pabrik.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 75+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2020 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 4 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="retail">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Supermarket" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">Retail</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Supermarket Chain "Segar"</h3>
                        <p class="text-gray-600 mb-4">
                            Layanan security, loss prevention, dan cleaning service untuk 15 cabang supermarket di area Jabodetabek.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 120+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2019 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 5 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="office">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Hotel" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">Hospitality</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Hotel Santika Premiere</h3>
                        <p class="text-gray-600 mb-4">
                            Layanan security, valet parking, cleaning service, dan tenaga banquet untuk hotel bintang 4 di Jakarta.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 45+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2023 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Project 6 -->
                <div class="portfolio-item bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100" data-category="industrial">
                    <div class="h-64 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                             alt="Gudang Logistik" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <span class="bg-support text-white px-3 py-1 rounded-full text-sm font-medium">Logistik</span>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">PT. Logistik Cepat</h3>
                        <p class="text-gray-600 mb-4">
                            Layanan keamanan gudang, man power untuk staf logistik, dan sistem loss prevention untuk perusahaan ekspedisi.
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="text-gray-500">
                                <i class="fas fa-user-friends mr-1"></i> 60+ Personel
                            </div>
                            <div class="text-gray-500">
                                <i class="far fa-calendar-alt mr-1"></i> 2022 - Sekarang
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Client Logos -->
            <div class="mt-16">
                <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Klien yang Mempercayai Kami</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Mall Group</div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Bank Nasional</div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Hotel Chain</div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Retail Corp</div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Manufacturing</div>
                    </div>
                    <div class="bg-gray-100 rounded-xl p-6 flex items-center justify-center h-24">
                        <div class="text-gray-700 font-bold text-xl">Logistics Co</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    portfolioSection.innerHTML = portfolioHTML;
    
    // Tambahkan event listeners untuk filter portfolio
    initPortfolioFilter();
    
    // Tambahkan event listener untuk load more projects
    const loadMoreBtn = document.getElementById('load-more-projects');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            alert('Fitur "Lihat Lebih Banyak Proyek" akan menampilkan lebih banyak proyek. Dalam implementasi nyata, ini akan memuat data tambahan dari database.');
        });
    }
}

// Fungsi untuk inisialisasi filter portfolio
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            button.classList.remove('bg-gray-200', 'text-gray-700');
            button.classList.add('bg-primary', 'text-white');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}