-- Utah HVAC Reviews Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Companies table
CREATE TABLE companies (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    location VARCHAR(255),
    region VARCHAR(50),
    phone VARCHAR(20),
    website VARCHAR(255),
    description TEXT,
    founded INTEGER,
    employees INTEGER,
    bbb_rating VARCHAR(10),
    is_featured BOOLEAN DEFAULT FALSE,
    logo_url VARCHAR(500),
    address TEXT,
    hours TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    reviewer_name VARCHAR(255) NOT NULL,
    reviewer_initials VARCHAR(5),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    review_text TEXT NOT NULL,
    service_type VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    review_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    service_name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT
);

-- Badges/Awards table
CREATE TABLE badges (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    badge_name VARCHAR(255) NOT NULL,
    badge_type VARCHAR(50),
    year INTEGER
);

-- Service areas table
CREATE TABLE service_areas (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
    county VARCHAR(100),
    city VARCHAR(100)
);

-- Create indexes for better query performance
CREATE INDEX idx_companies_region ON companies(region);
CREATE INDEX idx_companies_featured ON companies(is_featured);
CREATE INDEX idx_reviews_company ON reviews(company_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger for companies table
CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON companies
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert Salmon HVAC (featured company)
INSERT INTO companies (name, slug, location, region, phone, website, description, founded, employees, bbb_rating, is_featured, address, hours) VALUES
('Salmon HVAC', 'salmon-hvac', 'Centerville, UT', 'davis', '(801) 397-0030', 'https://salmonhvac.com', 'Utah''s most trusted family-owned HVAC company with 45+ years of exceptional service. Carrier Authorized Dealer specializing in residential and commercial heating, cooling, and indoor air quality solutions.', 1979, 31, 'A+', TRUE, '1230 N 1300th W, Ste 5, Centerville, UT 84014', 'Mon-Fri 8:00 AM - 5:00 PM');

-- Insert other companies
INSERT INTO companies (name, slug, location, region, phone, website, description, founded, bbb_rating) VALUES
('Blue Best Plumbing, Heating & Air', 'blue-best', 'Salt Lake City, UT', 'salt-lake', NULL, 'https://bluebest.com', 'Three-time Best of State winner for heating and air. Women-owned company with A+ BBB rating.', NULL, 'A+'),
('Manwill Plumbing, Heating & Air', 'manwill', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, 'Over 100 years in business. 8-time Best of State Award winner. Trusted by generations of Utah families.', 1920, NULL),
('Scott Hale Plumbing, Heating & Air', 'scott-hale', 'Murray, UT', 'salt-lake', NULL, 'https://scotthale.com', 'Serving Salt Lake City and surrounding areas for over 40 years. 24/7 availability with upfront pricing.', 1959, NULL),
('One Hour Heating & Air Conditioning', 'one-hour', 'Ogden, UT', 'ogden', NULL, 'https://www.onehourheatandair.com', 'Family owned and operated since 1992. Serving communities throughout Northern Utah.', 1992, NULL),
('Any Hour Services', 'any-hour', 'Salt Lake City, UT', 'salt-lake', NULL, 'https://anyhourservices.com', '24/7 HVAC, plumbing, and electrical services. Over 225 trucks and 300+ trained technicians serving 7 Utah counties.', NULL, NULL),
('Lee''s Heating and Air Conditioning', 'lees-heating', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, 'In business since 1930. First American Standard Customer Care Dealer in Utah.', 1930, NULL),
('SameDay Heating & Air', 'sameday', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, '64 years of HVAC service in Salt Lake City. Open 24/7, even on holidays.', 1960, NULL),
('Whipple Service Champions', 'whipple', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, 'Founded in 1947. Licensed and insured HVAC company with certified professionals.', 1947, NULL),
('Just Right Plumbing, Heating & Cooling', 'just-right', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, 'Family-owned since 2004. Team of NATE-certified technicians for comprehensive HVAC and plumbing solutions.', 2004, NULL),
('North Star Heating and Air', 'north-star', 'West Jordan, UT', 'salt-lake', NULL, NULL, 'Residential and commercial HVAC contractor serving the entire Salt Lake Valley with same day service.', NULL, NULL),
('Precision Heating & Cooling', 'precision', 'Salt Lake City, UT', 'salt-lake', NULL, NULL, 'Founded in 1990. Over 500 projects completed with 26 awards for quality workmanship.', 1990, NULL);

-- Insert sample reviews for Salmon HVAC
INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'Mike Thompson', 'MT', 5, 'Salmon HVAC replaced our entire 20-year-old system and the difference is incredible. The crew was professional, respectful of our home, and finished ahead of schedule. They even helped us navigate rebates to save money. Best HVAC experience we''ve ever had!', 'Full System Replacement', TRUE, '2025-01-15'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'Sarah Lopez', 'SL', 5, 'Called on a scorching 100°F day when our AC stopped working. They came out same day, diagnosed the issue in 20 minutes, and had us cool again within hours. The $85 diagnostic fee was very reasonable—other companies wanted $150+. I''ll never use anyone else!', 'AC Repair', TRUE, '2024-12-10'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'David Rodriguez', 'DR', 5, 'Family-owned businesses are the way to go. Salmon has maintained our systems for 10 years now. Always honest, never pushy, and their technicians are top-notch. They''ve never tried to upsell me on something I don''t need. Rare to find that kind of integrity.', 'Annual Maintenance', TRUE, '2024-11-20'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'Jennifer Chen', 'JC', 5, 'Our furnace died on the coldest night of the year. Salmon had a tech at our house within 2 hours—on a weekend! They got us back up and running that same night. The tech, Steve, was incredibly knowledgeable and patient with all my questions. Absolute lifesavers.', 'Emergency Furnace Repair', TRUE, '2024-10-05'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'Brian Peterson', 'BP', 5, 'Got quotes from 5 different companies for a new AC install. Salmon wasn''t the cheapest, but their quote was the most thorough and honest. No hidden fees, no surprises. The installation crew was professional, cleaned up perfectly, and the new Carrier system runs like a dream.', 'AC Installation', TRUE, '2024-09-18'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO reviews (company_id, reviewer_name, reviewer_initials, rating, review_text, service_type, is_verified, review_date)
SELECT id, 'Amanda Williams', 'AW', 5, 'As a single mom, I''m always nervous about contractors trying to take advantage. Salmon was the complete opposite. They explained everything clearly, showed me exactly what was wrong, and gave me options at different price points. No pressure, just helpful. Highly recommend!', 'AC Repair', TRUE, '2024-08-22'
FROM companies WHERE slug = 'salmon-hvac';

-- Insert badges for Salmon HVAC
INSERT INTO badges (company_id, badge_name, badge_type, year)
SELECT id, 'Editor''s Choice', 'award', 2025
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO badges (company_id, badge_name, badge_type, year)
SELECT id, 'Best Value', 'award', 2025
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO badges (company_id, badge_name, badge_type, year)
SELECT id, 'Carrier Factory Authorized Dealer', 'certification', NULL
FROM companies WHERE slug = 'salmon-hvac';

-- Insert service areas for Salmon HVAC
INSERT INTO service_areas (company_id, county, city)
SELECT id, 'Davis County', 'Centerville'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO service_areas (company_id, county, city)
SELECT id, 'Davis County', 'Bountiful'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO service_areas (company_id, county, city)
SELECT id, 'Salt Lake County', 'Salt Lake City'
FROM companies WHERE slug = 'salmon-hvac';

INSERT INTO service_areas (company_id, county, city)
SELECT id, 'Weber County', 'Ogden'
FROM companies WHERE slug = 'salmon-hvac';

-- Row Level Security (optional but recommended)
-- Enable RLS on tables
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on companies" ON companies FOR SELECT USING (true);
CREATE POLICY "Allow public read access on reviews" ON reviews FOR SELECT USING (true);

-- View for company ratings summary
CREATE OR REPLACE VIEW company_ratings AS
SELECT
    c.id,
    c.name,
    c.slug,
    COALESCE(AVG(r.rating), 0) as average_rating,
    COUNT(r.id) as review_count
FROM companies c
LEFT JOIN reviews r ON c.id = r.company_id
GROUP BY c.id, c.name, c.slug;
