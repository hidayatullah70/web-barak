// Contact Section Module
export function initContact() {
    const contactSection = document.getElementById('contact');
    
    const contactHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi <span class="text-primary">Kami</span></h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">
                    Siap membantu kebutuhan Anda dengan solusi dan layanan profesional. Hubungi tim kami untuk konsultasi dan penawaran.
                </p>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-12">
                <!-- Contact Form -->
                <div class="lg:w-1/2">
                    <div class="bg-white rounded-2xl shadow-xl p-8">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                        
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="name" class="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                                    <input type="text" id="name" name="name" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                           placeholder="Masukkan nama lengkap">
                                </div>
                                
                                <div>
                                    <label for="company" class="block text-gray-700 font-medium mb-2">Perusahaan</label>
                                    <input type="text" id="company" name="company"
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                           placeholder="Nama perusahaan (opsional)">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
                                    <input type="email" id="email" name="email" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                           placeholder="email@contoh.com">
                                </div>
                                
                                <div>
                                    <label for="phone" class="block text-gray-700 font-medium mb-2">Telepon</label>
                                    <input type="tel" id="phone" name="phone" required 
                                           class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                           placeholder="0812-3456-7890">
                                </div>
                            </div>
                            
                            <div>
                                <label for="service" class="block text-gray-700 font-medium mb-2">Jenis Layanan</label>
                                <select id="service" name="service" 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                    <option value="">Pilih layanan yang dibutuhkan</option>
                                    <option value="pengamanan">Pengamanan (Security)</option>
                                    <option value="ekspedisi">Ekspedisi Kurir</option>
                                    <option value="man-power">Man Power</option>
                                    <option value="cleaning">Cleaning Service</option>
                                    <option value="parkir">Parkir Management</option>
                                    <option value="loss-prevention">Loss Prevention</option>
                                </select>
                            </div>
                            
                            <div>
                                <label for="message" class="block text-gray-700 font-medium mb-2">Pesan</label>
                                <textarea id="message" name="message" rows="5" required 
                                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                          placeholder="Jelaskan proyek atau kebutuhan Anda..."></textarea>
                            </div>
                            
                            <div>
                                <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <i class="fas fa-paper-plane mr-2"></i> Kirim Pesan
                                </button>
                            </div>
                            
                            <div id="form-message" class="hidden p-4 rounded-lg"></div>
                        </form>
                    </div>
                </div>
                
                <!-- Contact Information -->
                <div class="lg:w-1/2">
                    <div class="space-y-8">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                            <p class="text-gray-600 mb-8">
                                Kami selalu siap membantu Anda. Hubungi kami melalui informasi kontak di bawah ini atau kunjungi kantor kami.
                            </p>
                        </div>
                        
                        <div class="space-y-6">
                            <!-- Address -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-map-marker-alt text-primary text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900 mb-1">Alamat Kantor</h4>
                                    <p class="text-gray-600">
                                        Jl. Melati I RT. 002/RW.005 Kel. Tanah Tinggi Kec. Tangerang<br> Kota Tangerang,
                                        Banten 15119</p>
                                </div>
                            </div>
                            
                            <!-- Phone -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-phone-alt text-accent text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900 mb-1">Telepon & WhatsApp</h4>
                                    <p class="text-gray-600">
                                        <a href="tel:+62211234567" class="hover:text-primary transition-colors duration-300">(021) 123-4567</a><br>
                                        <a href="https://wa.me/6281212345678" class="hover:text-primary transition-colors duration-300">+62 812-8369-8843 (WhatsApp)</a>
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Email -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-support/10 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-envelope text-support text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900 mb-1">Email</h4>
                                    <p class="text-gray-600">
                                        <a href="mailto:ptbimasenaadhirajasaradhika@gmail.com" class="hover:text-primary transition-colors duration-300">ptbimasenaadhirajasaradhika@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            
                            <!-- Office Hours -->
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-clock text-gray-700 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="text-lg font-bold text-gray-900 mb-1">Jam Operasional</h4>
                                    <p class="text-gray-600">
                                        Senin - Jumat: 08:00 - 17:00 WIB<br>
                                        Sabtu: 08:00 - 12:00 WIB
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Media -->
                        <div class="pt-6">
                            <h4 class="text-lg font-bold text-gray-900 mb-4">Ikuti Kami</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-youtube"></i>
                                </a>
                                <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300">
                                    <i class="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Map -->
                        <div class="pt-6">
                            <div class="rounded-xl overflow-hidden shadow-lg h-64">
                                <iframe 
                                    src="https://maps.google.com/maps?q=-6.172092000021806,106.65283265889549&z=17&output=embed" 
                                    width="100%" 
                                    height="100%" 
                                    style="border:0;" 
                                    allowfullscreen="" 
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <div class="mt-4 text-center">
                                <a href="https://www.google.com/maps/place/-6.172092000021806,106.65283265889549/@-6.172092000021806,106.65283265889549,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.172092000021806!4d106.65283265889549?hl=id&entry=ttu" 
                                   target="_blank" 
                                   rel="noopener noreferrer" 
                                   class="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                                    <i class="fas fa-map-marker-alt mr-2"></i>
                                    Buka di Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    contactSection.innerHTML = contactHTML;
    
    // Tambahkan event listener untuk form kontak
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Fungsi untuk menangani submit form
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Tampilkan loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
    submitButton.disabled = true;
    
    // Simulasi pengiriman form (dalam implementasi nyata, ini akan mengirim data ke server)
    setTimeout(() => {
        // Reset form
        e.target.reset();
        
        // Tampilkan pesan sukses
        formMessage.className = 'bg-green-50 text-green-800 p-4 rounded-lg';
        formMessage.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                <div>
                    <h4 class="font-bold">Pesan Terkirim!</h4>
                    <p>Terima kasih telah menghubungi kami. Tim kami akan merespon dalam waktu 1x24 jam.</p>
                </div>
            </div>
        `;
        formMessage.classList.remove('hidden');
        
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        
        // Sembunyikan pesan setelah 5 detik
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }, 1500);
}