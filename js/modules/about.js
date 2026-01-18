// About Section Module - Updated
export function initAbout() {
    const aboutSection = document.getElementById('about');

    const aboutHTML = `
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang <span class="text-primary">PT. BARAK</span></h2>
                <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">
                    <span class="font-bold  text-lg">PT. BIMASENA ADHIRAJASA RADHIKA (BARAK)</span> adalah sebuah organisasi yang dibentuk khusus sebagai wadah pengembangan SDM yang memiliki standar kualitas yang mampu bersaing sesuai kebutuhan dan tantangan ke depan, memberikan kontribusi dan rasa nyaman di lingkungan kerja.</p><br>
                <p class="text-gray-600 max-w-3xl mx-auto text-lg">
                    <span class="font-bold  text-lg">PT. BIMASENA ADHIRAJASA RADHIKA (BARAK)</span> memiliki tenaga pengembang dan profesional yang telah berpengalaman dibidangnya selama lebih dari 15 tahun. dengan semangat yang tinggi untuk menjadi bagian dari solusi kebutuhan SDM yang berkualitas dan menjadi mitra kerja/vendor yang dapat diandalkan, menjadi solusi yang tepat bagi perusahaan mitra kerja di manapun berada.</p> 
                </div>
            
            <div class="flex flex-col lg:flex-row gap-12 items-center">
                <div class="lg:w-1/2">
                    <div class="relative">
                        <div class="rounded-xl overflow-hidden shadow-2xl">
                            <img src="assets/img/hero/office-new.jpeg" 
                                 alt="office-new" class="w-full h-auto object-cover">
                        </div>
                        <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden md:block">
                            <div class="text-4xl font-bold">12+</div>
                            <div class="text-sm">Tahun Pengalaman</div>
                        </div>
                    </div>
                </div>
                
                <div class="lg:w-1/2">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6">Visi & Misi Perusahaan</h3>
                    
                    <div class="mb-8">
                        <h4 class="text-xl font-bold text-primary mb-3">Visi</h4>
                        <p class="text-gray-600">
                            Menjadi perusahaan yang mempunyai nilai tambah sehingga lebih unggul dan terdepan dalam memberikan pelayanan sebagai solusi pengembangan dan pengelolaan tenaga kerja / SDM guna mendukung meningkatkan produktivitas di perusahaan mitra serta menjadi perusahaan Alih Daya dengan pelayanan manajemen yang transparan, bertanggung jawab, jujur dan terpercaya
                        </p>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="text-xl font-bold text-primary mb-3">Misi</h4>
                        <ul class="space-y-3 text-gray-600">
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-support mr-3 mt-1"></i>
                                <span>Mengelola dan mengembangkan potensi tenaga kerja / SDM dengan mengutamakan penyelenggaraan usaha yang tetap memperhatikan harkat, martabat  manusia.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-support mr-3 mt-1"></i>
                                <span>Mengelola dan mengembangkan pelayanan Alih Daya sebagai salah satu solusi terciptanya kenyamanan hubungan industrial di perusahaan mitra.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-support mr-3 mt-1"></i>
                                <span>Memberikan konsep solusi yang cepat dan tepat, untuk memberikan pelayanan yang prima demi kepuasan kepada para pengguna jasa.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-support mr-3 mt-1"></i>
                                <span>Membantu peran pemerintah dalam mengurangi pengangguran.</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-support mr-3 mt-1"></i>
                                <span>Mensupport perusahaan mitra agar tumbuh dan berkembang sehingga dapat berakibat pada penambahan tenaga kerja.</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="flex flex-wrap gap-4">
                        <div class="bg-gray-100 rounded-lg p-4 flex-1 min-w-[200px]">
                            <div class="text-2xl font-bold text-primary mb-1">500+</div>
                            <div class="text-gray-600">Personel Aktif</div>
                        </div>
                        <div class="bg-gray-100 rounded-lg p-4 flex-1 min-w-[200px]">
                            <div class="text-2xl font-bold text-primary mb-1">100+</div>
                            <div class="text-gray-600">Klien Puas</div>
                        </div>
                        <div class="bg-gray-100 rounded-lg p-4 flex-1 min-w-[200px]">
                            <div class="text-2xl font-bold text-primary mb-1">6</div>
                            <div class="text-gray-600">Layanan Unggulan</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Values Section -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Budaya Kerja</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i class="fa-solid fa-scale-balanced text-primary text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 text-center">Honesty</h4>
                        <p class="text-gray-600 text-center">Bertindak jujur, tulus, menjunjung tinggi etika dan integritas serta memegang teguh kepercayaan yang diberikan.</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i class="fa-solid fa-arrows-rotate text-accent text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 text-center">Adaptability</h4>
                        <p class="text-gray-600 text-center">Bekerja dengan antusias dan menunjukkan komitmen untuk menjadi yang terbaik dalam setiap pekerjaan baik secara individu maupun kelompok</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div class="w-14 h-14 bg-support/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i class="fa-solid fa-user-tie text-support text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 text-center">Profesionalism</h4>
                        <p class="text-gray-600 text-center">Bekerja dengan sepenuh hati dan disiplin, berorientasi pada pelayanan prima guna mencapai hasil maksimal sesuai dengan wewenang, tanggung jawab, aturan, keteladanan, norma dan etika profesi</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i class="fa-solid fa-hand-holding-heart text-primary text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 text-center">Polite</h4>
                        <p class="text-gray-600 text-center">Konsistensi dalam bekerja dengan senantiasa menunjukkan sikap santun, saling menghormati dan menghargai</p>
                    </div>
                    
                    <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                        <div class="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i class="fa-solid fa-headset text-accent text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-bold text-gray-900 mb-4 text-center">Customer Centrity</h4>
                        <p class="text-gray-600 text-center">Bekerja dengan senantiasa fokus pada kebutuhan pelanggan, proaktif untuk memberikan pelayanan yang bernilai tambah, mengembangkan danmempertahankan hubungan baik dengan pelanggan eksternal maupun internal</p>
                    </div>
                </div>
            </div>
            
            <!-- Management Team Section -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Tim Manajemen</h3>
                <div id="management-team" class="max-w-6xl mx-auto">
                    <!-- Management team will be loaded here -->
                </div>
            </div>
            
            <!-- Department Heads Section -->
            <div class="mt-20">
                <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Kepala Departemen</h3>
                <div id="department-heads" class="max-w-6xl mx-auto">
                    <!-- Department heads will be loaded here -->
                </div>
            </div>
            
            <!-- Team Statistics Section -->
            <div class="mt-20 bg-gray-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold text-center text-gray-900 mb-12">Statistik Tim</h3>
                <div id="team-statistics" class="max-w-4xl mx-auto">
                    <!-- Team statistics will be loaded here -->
                </div>
            </div>
            
            <!-- Company Profile Download Section -->
            <div class="mt-12">
                <div class="max-w-sm mx-auto">
                    <div class="bg-gradient-to-r from-primary to-primary-dark rounded-lg p-1 text-center text-white">
                        <div class="mb-0 px-0.5">
                            <i class="fas fa-file-pdf text-2xl mb-1"></i>
                            <h3 class="text-sm font-bold mb-0">Company Profile PT. BARAK</h3>
                        </div>
                        
                        <div class="flex justify-center items-center px-0.5">
                            <a href="./assets/documents/company-profile.pdf" 
                               download="company-profile-barak.pdf" 
                               class="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-medium py-1 px-2 rounded transition-all duration-300 shadow hover:shadow-lg text-xs">
                                <i class="fas fa-download mr-1"></i>
                                Download
                            </a>
                        </div>
                        
                        <div class="mt-0 text-xs text-gray-300 px-0.5">
                            PDF • 2.5 MB • Jan 2026
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    aboutSection.innerHTML = aboutHTML;
    
    // Load team data after setting innerHTML
    loadTeamData();
}

// Load team data
async function loadTeamData() {
    try {
        const response = await fetch('data/team.json');
        const teamData = await response.json();
        displayManagementTeam(teamData.management);
        displayDepartmentHeads(teamData.department_heads);
        displayTeamStatistics(teamData.statistics);
    } catch (error) {
        console.error('Error loading team data:', error);
        displayFallbackTeam();
    }
}

// Display management team
function displayManagementTeam(management) {
    const managementContainer = document.getElementById('management-team');
    if (!managementContainer) return;

    const managementHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${management.map(member => createMemberCard(member)).join('')}
        </div>
    `;

    managementContainer.innerHTML = managementHTML;
}

// Display department heads
function displayDepartmentHeads(departmentHeads) {
    const departmentContainer = document.getElementById('department-heads');
    if (!departmentContainer) return;

    const departmentHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${departmentHeads.map(member => createMemberCard(member)).join('')}
        </div>
    `;

    departmentContainer.innerHTML = departmentHTML;
}

// Display team statistics
function displayTeamStatistics(statistics) {
    const statsContainer = document.getElementById('team-statistics');
    if (!statsContainer) return;

    const statsHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-2">${statistics.total_team_members}+</div>
                <div class="text-gray-600">Total Team</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-2">${statistics.management_team}</div>
                <div class="text-gray-600">Management</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-2">${statistics.certifications}+</div>
                <div class="text-gray-600">Certifications</div>
            </div>
            <div class="text-center">
                <div class="text-3xl font-bold text-primary mb-2">${statistics.average_experience}+</div>
                <div class="text-gray-600">Avg. Experience</div>
            </div>
        </div>
    `;

    statsContainer.innerHTML = statsHTML;
}

// Create member card
function createMemberCard(member) {
    const experience = member.experience ? member.experience.join('<br>') : `${member.experience_years}+ tahun pengalaman`;
    const education = member.education ? member.education.join('<br>') : '';
    const specializations = member.specializations ? member.specializations.join(', ') : '';
    const certifications = member.certifications ? member.certifications.join(', ') : '';

    return `
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div class="text-center mb-6">
                <img src="${member.image}" alt="${member.name}" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100 shadow-lg">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${member.name}</h3>
                <p class="text-primary font-semibold text-sm mb-1">${member.position}</p>
            </div>
            
            <div class="space-y-4">
                <p class="text-gray-600 text-sm leading-relaxed">${member.bio}</p>
                
                ${education ? `
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                            <i class="fas fa-graduation-cap text-primary mr-2"></i> Pendidikan
                        </h4>
                        <p class="text-gray-600 text-xs leading-relaxed">${education}</p>
                    </div>
                ` : ''}
                
                ${experience ? `
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                            <i class="fas fa-briefcase text-primary mr-2"></i> Pengalaman
                        </h4>
                        <p class="text-gray-600 text-xs leading-relaxed">${experience}</p>
                    </div>
                ` : ''}
                
                ${specializations ? `
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                            <i class="fas fa-star text-primary mr-2"></i> Spesialisasi
                        </h4>
                        <p class="text-gray-600 text-xs leading-relaxed">${specializations}</p>
                    </div>
                ` : ''}
                
                ${certifications ? `
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                            <i class="fas fa-certificate text-primary mr-2"></i> Sertifikasi
                        </h4>
                        <p class="text-gray-600 text-xs leading-relaxed">${certifications}</p>
                    </div>
                ` : ''}
                
                <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div class="text-xs">
                        <a href="mailto:${member.email}" class="text-primary hover:text-primary-dark transition-colors flex items-center">
                            <i class="fas fa-envelope mr-1"></i>
                            <span class="truncate max-w-[120px]">${member.email}</span>
                        </a>
                    </div>
                    <div class="flex space-x-2">
                        ${member.social?.linkedin ? `
                            <a href="${member.social.linkedin}" target="_blank" class="text-gray-400 hover:text-primary transition-colors w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <i class="fab fa-linkedin text-sm"></i>
                            </a>
                        ` : ''}
                        ${member.social?.instagram ? `
                            <a href="${member.social.instagram}" target="_blank" class="text-gray-400 hover:text-pink-500 transition-colors w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <i class="fab fa-instagram text-sm"></i>
                            </a>
                        ` : ''}
                        ${member.social?.twitter ? `
                            <a href="${member.social.twitter}" target="_blank" class="text-gray-400 hover:text-blue-400 transition-colors w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <i class="fab fa-twitter text-sm"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fallback team display
function displayFallbackTeam() {
    const managementContainer = document.getElementById('management-team');
    if (managementContainer) {
        managementContainer.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-users text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">Tim management akan segera ditampilkan</p>
            </div>
        `;
    }
}