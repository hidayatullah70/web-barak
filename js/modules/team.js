// Team Module - Management Team Display
export function initTeam() {
    loadTeamData();
}

// Load team data from JSON
async function loadTeamData() {
    try {
        const response = await fetch('data/team.json');
        const teamData = await response.json();
        displayManagementTeam(teamData.management);
        displayDepartmentHeads(teamData.department_heads);
        displayKeyPersonnel(teamData.key_personnel);
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
            ${management.map(member => createMemberCard(member, 'management')).join('')}
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
            ${departmentHeads.map(member => createMemberCard(member, 'department')).join('')}
        </div>
    `;

    departmentContainer.innerHTML = departmentHTML;
}

// Display key personnel
function displayKeyPersonnel(keyPersonnel) {
    const personnelContainer = document.getElementById('key-personnel');
    if (!personnelContainer) return;

    const personnelHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${keyPersonnel.map(member => createPersonnelCard(member)).join('')}
        </div>
    `;

    personnelContainer.innerHTML = personnelHTML;
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
                <div class="text-3xl font-bold text-primary mb-2">${statistics.average_experience}</div>
                <div class="text-gray-600">Avg. Experience</div>
            </div>
        </div>
    `;

    statsContainer.innerHTML = statsHTML;
}

// Create member card for management and department heads
function createMemberCard(member, type) {
    const experience = member.experience ? member.experience.join('<br>') : `${member.experience_years}+ tahun pengalaman`;
    const education = member.education ? member.education.join('<br>') : '';
    const specializations = member.specializations ? member.specializations.join(', ') : '';
    const certifications = member.certifications ? member.certifications.join(', ') : '';

    return `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            <div class="relative">
                <img src="${member.image}" alt="${member.name}" class="w-full h-64 object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                    <h3 class="text-xl font-bold mb-1">${member.name}</h3>
                    <p class="text-sm opacity-90">${member.position}</p>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-600 mb-4 text-sm">${member.bio}</p>
                
                ${education ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm">Pendidikan</h4>
                        <p class="text-gray-600 text-xs">${education}</p>
                    </div>
                ` : ''}
                
                ${experience ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm">Pengalaman</h4>
                        <p class="text-gray-600 text-xs">${experience}</p>
                    </div>
                ` : ''}
                
                ${specializations ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm">Spesialisasi</h4>
                        <p class="text-gray-600 text-xs">${specializations}</p>
                    </div>
                ` : ''}
                
                ${certifications ? `
                    <div class="mb-4">
                        <h4 class="font-semibold text-gray-900 mb-2 text-sm">Sertifikasi</h4>
                        <p class="text-gray-600 text-xs">${certifications}</p>
                    </div>
                ` : ''}
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="text-xs text-gray-500">
                        <a href="mailto:${member.email}" class="hover:text-primary transition-colors">${member.email}</a>
                    </div>
                    <div class="flex space-x-2">
                        ${member.social?.linkedin ? `
                            <a href="${member.social.linkedin}" target="_blank" class="text-gray-400 hover:text-primary transition-colors">
                                <i class="fab fa-linkedin text-sm"></i>
                            </a>
                        ` : ''}
                        ${member.social?.instagram ? `
                            <a href="${member.social.instagram}" target="_blank" class="text-gray-400 hover:text-pink-500 transition-colors">
                                <i class="fab fa-instagram text-sm"></i>
                            </a>
                        ` : ''}
                        ${member.social?.twitter ? `
                            <a href="${member.social.twitter}" target="_blank" class="text-gray-400 hover:text-blue-400 transition-colors">
                                <i class="fab fa-twitter text-sm"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create personnel card for key personnel
function createPersonnelCard(member) {
    return `
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div class="text-center mb-4">
                <img src="${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                <h3 class="text-lg font-bold text-gray-900 mb-1">${member.name}</h3>
                <p class="text-sm text-primary font-medium">${member.position}</p>
                <p class="text-xs text-gray-500 mb-2">${member.department}</p>
            </div>
            <div class="text-center">
                <p class="text-gray-600 text-sm mb-3">${member.bio}</p>
                <div class="text-xs text-gray-500 space-y-1">
                    ${member.projects ? `<p><strong>${member.projects}</strong> Proyek</p>` : ''}
                    ${member.clients ? `<p><strong>${member.clients}</strong> Klien</p>` : ''}
                    ${member.trained_personnel ? `<p><strong>${member.trained_personnel}</strong> Personel Terlatih</p>` : ''}
                    <p><strong>${member.years_experience}</strong> Tahun Pengalaman</p>
                </div>
                <div class="mt-3 pt-3 border-t border-gray-100">
                    <a href="mailto:${member.email}" class="text-xs text-primary hover:text-primary-dark transition-colors">
                        <i class="fas fa-envelope mr-1"></i> ${member.email}
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Fallback team display if JSON fails to load
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
