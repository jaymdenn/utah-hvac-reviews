// Supabase Configuration
const SUPABASE_URL = 'https://uljsfurgvufuvagijlpp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsanNmdXJndnVmdXZhZ2lqbHBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMDAxOTAsImV4cCI6MjA4NjY3NjE5MH0.R-Z28P3iUdunE0nz1r9h1KqLuKXmbNju-W1_Jw8nnqE';

// Company Data - Salmon HVAC featured prominently with detailed info
const companies = [
    {
        id: 1,
        name: "Salmon HVAC",
        location: "Centerville, UT",
        region: "davis",
        rating: 4.9,
        reviewCount: 127,
        founded: 1979,
        description: "Utah's most trusted family-owned HVAC company with 45+ years of exceptional service. Carrier Authorized Dealer specializing in residential and commercial heating, cooling, and indoor air quality solutions.",
        phone: "(801) 397-0030",
        website: "https://salmonhvac.com",
        badges: ["Editor's Choice", "Best Value", "Family Owned"],
        featured: true,
        bbbRating: "A+",
        employees: 31
    },
    {
        id: 2,
        name: "Blue Best Plumbing, Heating & Air",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.7,
        reviewCount: 89,
        founded: null,
        description: "Three-time Best of State winner for heating and air. Women-owned company with A+ BBB rating.",
        phone: null,
        website: "https://bluebest.com",
        badges: ["Best of State"],
        featured: false
    },
    {
        id: 3,
        name: "Manwill Plumbing, Heating & Air",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.6,
        reviewCount: 156,
        founded: 1920,
        description: "Over 100 years in business. 8-time Best of State Award winner. Trusted by generations of Utah families.",
        phone: null,
        website: null,
        badges: ["100+ Years"],
        featured: false
    },
    {
        id: 4,
        name: "Scott Hale Plumbing, Heating & Air",
        location: "Murray, UT",
        region: "salt-lake",
        rating: 4.5,
        reviewCount: 93,
        founded: 1959,
        description: "Serving Salt Lake City and surrounding areas for over 40 years. 24/7 availability with upfront pricing.",
        phone: null,
        website: "https://scotthale.com",
        badges: ["24/7 Service"],
        featured: false
    },
    {
        id: 5,
        name: "One Hour Heating & Air Conditioning",
        location: "Ogden, UT",
        region: "ogden",
        rating: 4.4,
        reviewCount: 67,
        founded: 1992,
        description: "Family owned and operated since 1992. Serving communities throughout Northern Utah.",
        phone: null,
        website: "https://www.onehourheatandair.com",
        badges: ["Family Owned"],
        featured: false
    },
    {
        id: 6,
        name: "Any Hour Services",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.3,
        reviewCount: 201,
        founded: null,
        description: "24/7 HVAC, plumbing, and electrical services. Over 225 trucks and 300+ trained technicians serving 7 Utah counties.",
        phone: null,
        website: "https://anyhourservices.com",
        badges: ["24/7 Service"],
        featured: false
    },
    {
        id: 7,
        name: "Lee's Heating and Air Conditioning",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.4,
        reviewCount: 78,
        founded: 1930,
        description: "In business since 1930. First American Standard Customer Care Dealer in Utah.",
        phone: null,
        website: null,
        badges: ["Since 1930"],
        featured: false
    },
    {
        id: 8,
        name: "SameDay Heating & Air",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.2,
        reviewCount: 134,
        founded: 1960,
        description: "64 years of HVAC service in Salt Lake City. Open 24/7, even on holidays.",
        phone: null,
        website: null,
        badges: ["24/7 Service"],
        featured: false
    },
    {
        id: 9,
        name: "Whipple Service Champions",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.3,
        reviewCount: 112,
        founded: 1947,
        description: "Founded in 1947. Licensed and insured HVAC company with certified professionals.",
        phone: null,
        website: null,
        badges: ["Since 1947"],
        featured: false
    },
    {
        id: 10,
        name: "Just Right Plumbing, Heating & Cooling",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.1,
        reviewCount: 56,
        founded: 2004,
        description: "Family-owned since 2004. Team of NATE-certified technicians for comprehensive HVAC and plumbing solutions.",
        phone: null,
        website: null,
        badges: ["NATE Certified"],
        featured: false
    },
    {
        id: 11,
        name: "North Star Heating and Air",
        location: "West Jordan, UT",
        region: "salt-lake",
        rating: 4.0,
        reviewCount: 45,
        founded: null,
        description: "Residential and commercial HVAC contractor serving the entire Salt Lake Valley with same day service.",
        phone: null,
        website: null,
        badges: ["Same Day"],
        featured: false
    },
    {
        id: 12,
        name: "Precision Heating & Cooling",
        location: "Salt Lake City, UT",
        region: "salt-lake",
        rating: 4.5,
        reviewCount: 88,
        founded: 1990,
        description: "Founded in 1990. Over 500 projects completed with 26 awards for quality workmanship.",
        phone: null,
        website: null,
        badges: ["Award Winning"],
        featured: false
    }
];

// DOM Elements
const companiesGrid = document.getElementById('companies-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortSelect = document.getElementById('sort-select');
const locationSelect = document.getElementById('location-select');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCompanies(companies);
    setupEventListeners();
});

// Render companies to grid
function renderCompanies(companiesToRender) {
    // Sort to always show Salmon HVAC first
    const sorted = [...companiesToRender].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
    });

    companiesGrid.innerHTML = sorted.map(company => createCompanyCard(company)).join('');
}

// Create company card HTML
function createCompanyCard(company) {
    const starsHtml = '★'.repeat(Math.floor(company.rating)) +
                      (company.rating % 1 >= 0.5 ? '½' : '');

    const badgesHtml = company.badges.map(badge =>
        `<span class="company-badge ${company.featured ? 'highlight' : ''}">${badge}</span>`
    ).join('');

    const foundedText = company.founded ? `Est. ${company.founded}` : '';

    return `
        <div class="company-card ${company.featured ? 'featured' : ''}">
            <div class="company-card-header">
                <div>
                    <h3>${company.name}</h3>
                    <span class="company-location">📍 ${company.location}</span>
                </div>
                <div class="company-rating">
                    <span class="stars">${starsHtml}</span>
                    <span class="score">${company.rating}/5</span>
                </div>
            </div>
            <div class="company-card-badges">
                ${badgesHtml}
            </div>
            <p class="company-description">${company.description}</p>
            <div class="company-meta">
                <span>${foundedText}${foundedText ? ' • ' : ''}${company.reviewCount} reviews</span>
                ${company.website ?
                    `<a href="${company.website}" target="_blank" class="company-link">Visit Website →</a>` :
                    '<span></span>'}
            </div>
        </div>
    `;
}

// Filter and sort companies
function filterAndSortCompanies() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortBy = sortSelect.value;
    const location = locationSelect.value;

    let filtered = companies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm) ||
                             company.location.toLowerCase().includes(searchTerm) ||
                             company.description.toLowerCase().includes(searchTerm);

        const matchesLocation = location === 'all' || company.region === location;

        return matchesSearch && matchesLocation;
    });

    // Sort (but keep featured first)
    filtered.sort((a, b) => {
        // Always keep Salmon HVAC (featured) first
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;

        switch(sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'reviews':
                return b.reviewCount - a.reviewCount;
            case 'name':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    renderCompanies(filtered);
}

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterAndSortCompanies);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterAndSortCompanies();
        }
    });
    sortSelect.addEventListener('change', filterAndSortCompanies);
    locationSelect.addEventListener('change', filterAndSortCompanies);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Supabase Integration (for future use)
async function initSupabase() {
    if (SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
        const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

        // Fetch reviews from Supabase
        const { data: reviews, error } = await supabase
            .from('reviews')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching reviews:', error);
            return;
        }

        // Update company review counts
        if (reviews) {
            console.log('Reviews loaded from Supabase:', reviews.length);
        }
    }
}

// Call Supabase init
initSupabase();
