# ELTIC - Electric Vehicle Charging Solutions

Welcome to the ELTIC showcase website! This is a professional website built with Vue 3 and Tailwind CSS for ELTIC, a company specializing in electric vehicle charging infrastructure installation and video surveillance solutions.

## 🌐 Website

Visit our website at: **[eltic.fr](https://eltic.fr)**

## 📋 About ELTIC

ELTIC is a specialized company providing:

- **🔌 Electric Vehicle Charging Infrastructure (IRVE)**
  - Installation of charging stations for individual homes
  - Collective charging infrastructure for condominiums and residential buildings
  - Dynamic charging management with power optimization
  - Integration with renewable energy sources (solar panels)

- **📹 Video Surveillance Solutions**
  - Professional video surveillance systems
  - CCTV installation for businesses and condominiums
  - Residential surveillance solutions

## 🛠️ Technology Stack

- **Frontend Framework**: [Vue 3](https://vuejs.org/) with Composition API
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **Package Manager**: npm

## 📁 Project Structure

```
Eltic/
├── src/
│   ├── components/
│   │   ├── NavBorne.vue          # Main navigation bar
│   │   ├── NavVideo.vue          # Secondary navigation bar
│   │   ├── Footer.vue            # Footer component
│   │   ├── HomePage.vue          # Landing page
│   │   ├── ElticBorne.vue        # EV Charging main page
│   │   ├── ElticVideo.vue        # Video Surveillance page
│   │   ├── Copropriete.vue       # Condominium solutions
│   │   ├── Devis.vue             # Quotation/Estimate page
│   │   ├── Qualification.vue     # Certifications and qualifications
│   │   ├── nosReal.vue           # Realizations/Projects
│   │   ├── Recharge.vue          # Understanding EV Charging
│   │   ├── AidesPrimes.vue       # Grants and incentives
│   │   ├── MentionsLegales.vue   # Legal notices
│   │   └── Card.vue              # Reusable card component
│   ├── App.vue                   # Main application component
│   ├── main.js                   # Application entry point
│   └── style.css                 # Global styles
├── public/                       # Static assets (images, GIFs)
├── index.html                    # HTML entry point
├── vite.config.js               # Vite configuration
├── jsconfig.json                # JavaScript configuration
└── package.json                 # Project dependencies

```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Color Scheme**: 
  - Primary Green: Used for main actions and navigation
  - Orange: Used for secondary content and call-to-actions
  - Turquoise (#42C6C6): Used for accents and special highlights
- **Smooth Animations**: Hover effects, transitions, and ripple animations
- **Professional UI**: Clean layouts with proper spacing and typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eltic.git
cd eltic
```

2. Navigate to the project directory:
```bash
cd Eltic
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 📖 Pages Overview

### Navigation Pages

- **Home** (`/`): Landing page with service overview
- **ELTIC Charging** (`/ElticBorne`): Main EV charging infrastructure page
- **ELTIC Video** (`/ElticVideo`): Video surveillance solutions
- **Condominium** (`/Copropriete`): Specialized solutions for multi-unit buildings
- **Quotation** (`/Devis`): Request a free quotation
- **Realizations** (`/Realisation`): Showcase of completed projects
- **Understanding Charging** (`/Recharge`): Educational content about EV charging
- **Qualifications** (`/Qualification`): Company certifications and qualifications
- **Grants & Incentives** (`/AidesPrimes`): Available government aids and subsidies
- **Legal Notices** (`/MentionsLegales`): Legal information and compliance

## 🎯 Key Features

- **Dynamic Page Titles**: Browser tab title changes based on current page
- **Active Route Detection**: Navigation buttons highlight when on the current page
- **Responsive Navbar**: Fixed navigation with smooth hover effects
- **Image Optimization**: Proper asset imports and management
- **Contact Information**: Displayed on multiple pages (Phone: +33 (0)2 99 83 80 50, Email: contact@eltic.fr)
- **Background Images**: Consistent use of brand imagery across pages

## 🎨 Customization

### Colors

Main colors are defined as Tailwind classes:
- `bg-green-600` / `text-green-700` - Primary green
- `bg-orange-500` / `text-orange-600` - Orange accent
- Turquoise - Used as inline styles `#42C6C6`

### Images

All static images are stored in `public/` and imported in Vue components:
```javascript
import fondImg from '@/public/eltic_IRVE_image_fond.png'
```

### Content

Update page content directly in component files. Each page component contains:
- Template (HTML structure)
- Script setup (Vue 3 composition API)
- Scoped styles (CSS)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔗 Links

- **Website**: [eltic.fr](https://eltic.fr)
- **Location**: 10 rue de la rivière - 35510 CESSON-SÉVIGNÉ - France
- **Phone**: +33 (0)2 99 83 80 50
- **Email**: contact@eltic.fr

## 📄 License

© ELTIC 2025 - All rights reserved

## 👥 Contributing

For modifications or improvements to the website, please contact ELTIC directly.

## 🤝 Support

For technical support or website inquiries, contact:
- **Phone**: +33 (0)2 99 83 80 50
- **Email**: contact@eltic.fr

---

**Made with ❤️ by ELTIC - Your Expert in Electric Vehicle Charging Solutions**
