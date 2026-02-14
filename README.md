# Utah HVAC Reviews

A review website for HVAC companies in Utah, featuring detailed information about heating and air conditioning providers across the state.

## Features

- Company listings with ratings and reviews
- Featured company profile (Salmon HVAC)
- Search and filter functionality
- Responsive design for mobile and desktop
- Supabase integration for reviews database

## Tech Stack

- HTML5 / CSS3 / JavaScript
- Supabase (Backend/Database)
- Netlify (Hosting)

## Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/utah-hvac-reviews.git
cd utah-hvac-reviews
```

### 2. Configure Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL schema in `supabase/schema.sql`
3. Update `js/app.js` with your Supabase URL and anon key

### 3. Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings (publish directory: `.`)
3. Deploy!

## Supabase Schema

The database includes tables for:
- `companies` - HVAC company information
- `reviews` - Customer reviews
- `services` - Services offered by each company

## Local Development

Simply open `index.html` in a browser or use a local server:

```bash
npx serve .
```

## License

MIT
