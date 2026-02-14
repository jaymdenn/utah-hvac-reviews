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
        employees: 31,
        reviewSources: [
            { source: "Google", rating: 4.9, count: 87 },
            { source: "Facebook", rating: 5.0, count: 24 },
            { source: "Yelp", rating: 4.5, count: 12 },
            { source: "BBB", rating: 5.0, count: 4 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.8, count: 52 },
            { source: "Yelp", rating: 4.5, count: 23 },
            { source: "Facebook", rating: 4.7, count: 14 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.6, count: 98 },
            { source: "Yelp", rating: 4.5, count: 34 },
            { source: "Facebook", rating: 4.8, count: 18 },
            { source: "Angi", rating: 4.5, count: 6 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.5, count: 61 },
            { source: "Yelp", rating: 4.0, count: 22 },
            { source: "HomeAdvisor", rating: 4.7, count: 10 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.4, count: 45 },
            { source: "Facebook", rating: 4.6, count: 15 },
            { source: "Yelp", rating: 4.0, count: 7 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.4, count: 124 },
            { source: "Yelp", rating: 3.5, count: 45 },
            { source: "Facebook", rating: 4.5, count: 22 },
            { source: "BBB", rating: 4.2, count: 10 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.5, count: 52 },
            { source: "Yelp", rating: 4.0, count: 18 },
            { source: "Facebook", rating: 4.6, count: 8 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.3, count: 89 },
            { source: "Yelp", rating: 3.5, count: 28 },
            { source: "Facebook", rating: 4.4, count: 17 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.4, count: 72 },
            { source: "Yelp", rating: 4.0, count: 25 },
            { source: "Facebook", rating: 4.3, count: 15 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.2, count: 38 },
            { source: "Yelp", rating: 3.5, count: 12 },
            { source: "Facebook", rating: 4.5, count: 6 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.1, count: 32 },
            { source: "Yelp", rating: 3.5, count: 8 },
            { source: "Facebook", rating: 4.2, count: 5 }
        ]
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
        featured: false,
        reviewSources: [
            { source: "Google", rating: 4.6, count: 58 },
            { source: "Yelp", rating: 4.0, count: 19 },
            { source: "Angi", rating: 4.7, count: 11 }
        ]
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

// Review source icons
const sourceIcons = {
    'Google': '<svg class="source-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>',
    'Facebook': '<svg class="source-icon" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    'Yelp': '<svg class="source-icon" viewBox="0 0 24 24" fill="#FF1A1A"><path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 7.285 7.285 0 0 1 2.125 3.5c.185.748-.285 1.46-.455 1.211zm-2.622 4.63a7.332 7.332 0 0 1-1.553 3.69c-.384.51-1.075.384-1.342-.135l-2.23-4.363c-.392-.768.338-1.624 1.202-1.41l5.003 1.245c.172.038-.14.487-.08.973zm-8.418-6.81c-.078.91-.67 1.618-1.438 1.718l-5.246.736c-.75.108-1.28-.666-.85-1.3A7.317 7.317 0 0 1 5.8 8.064c.67-.244 1.36.18 1.56.91l1.76 5.44zm-1.168 7.218l-1.394-5.103c-.13-.476.29-.942.775-.865l5.235.828c.757.12 1.087 1.05.55 1.54l-3.84 3.5c-.385.35-.947.154-1.326-.9zM13.1 3.945c.065-.77.82-1.218 1.508-.895a7.245 7.245 0 0 1 3.058 2.67c.424.648.02 1.48-.705 1.63l-5.09 1.05c-.99.204-1.695-.94-1.04-1.69l2.27-2.765z"/></svg>',
    'BBB': '<svg class="source-icon" viewBox="0 0 24 24" fill="#005A78"><rect x="2" y="4" width="20" height="16" rx="2" fill="#005A78"/><text x="12" y="15" text-anchor="middle" fill="white" font-size="8" font-weight="bold">BBB</text></svg>',
    'Angi': '<svg class="source-icon" viewBox="0 0 24 24" fill="#FF6153"><circle cx="12" cy="12" r="10" fill="#FF6153"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">A</text></svg>',
    'HomeAdvisor': '<svg class="source-icon" viewBox="0 0 24 24" fill="#F68B1E"><path d="M12 2L2 9l1.5 1.1V20c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V10.1L22 9 12 2zm0 2.8l6.5 4.9V20h-13v-10.3L12 4.8z" fill="#F68B1E"/></svg>'
};

// Create company card HTML
function createCompanyCard(company) {
    const starsHtml = '★'.repeat(Math.floor(company.rating)) +
                      (company.rating % 1 >= 0.5 ? '½' : '');

    const badgesHtml = company.badges.map(badge =>
        `<span class="company-badge ${company.featured ? 'highlight' : ''}">${badge}</span>`
    ).join('');

    const foundedText = company.founded ? `Est. ${company.founded}` : '';

    // Create review sources HTML
    const reviewSourcesHtml = company.reviewSources ? company.reviewSources.map(source => `
        <div class="review-source">
            ${sourceIcons[source.source] || `<span class="source-text-icon">${source.source[0]}</span>`}
            <div class="source-info">
                <span class="source-name">${source.source}</span>
                <span class="source-rating">${source.rating}★ <span class="source-count">(${source.count})</span></span>
            </div>
        </div>
    `).join('') : '';

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
            ${reviewSourcesHtml ? `
            <div class="review-sources">
                <span class="review-sources-label">Reviews from:</span>
                <div class="review-sources-grid">
                    ${reviewSourcesHtml}
                </div>
            </div>
            ` : ''}
            <div class="company-meta">
                <span>${foundedText}${foundedText ? ' • ' : ''}${company.reviewCount} total reviews</span>
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
