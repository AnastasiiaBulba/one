# Safari Match - Match-3 Puzzle Game Website

A modern, responsive website for the Safari Match game - an addictive match-3 puzzle adventure set in the wild safari world.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with breakpoints at 360px, 768px, and 1280px
- **Modern UI/UX**: Clean, game-themed design with smooth animations
- **Dynamic Content**: All content loaded from JSON files
- **Interactive Elements**: Mobile menu, cookie consent, form validation
- **Game Integration**: Embedded iframe with Safari Match game
- **Cross-browser Compatible**: Works on all modern browsers

## 🎮 Game Description

Safari Match is a fun and addictive match-3 puzzle game where players match colorful animal blocks in the heart of the wild safari. Features include:

- Smart matching system with AI-powered combinations
- Power boosters and special combinations
- Hundreds of progressive levels
- Beautiful safari-themed graphics
- Family-friendly gameplay suitable for all ages

## 🏗️ Project Structure

```
one/
├── index.html                 # Main page with game sections
├── new-safari.html           # News and updates page
├── contacts-safari.html      # Contact form and information
├── disclaimer-safari.html    # Legal disclaimer
├── cookies-safari.html       # Cookie policy
├── privacy-safari.html       # Privacy policy
├── pictures/                 # Game images and favicon
│   ├── Safari-fav.jpg       # Website favicon
│   ├── Safari-hero.jpg      # Hero background image
│   ├── Safari-new1.jpg      # News image 1
│   ├── Safari-new2.jpg      # News image 2
│   ├── Safari-sect1.jpg     # Game field image
│   └── Safari-sect2.jpg     # Features image
├── js/
│   ├── main.js              # Main JavaScript functionality
│   └── data.json            # Content data
├── styles/
│   └── main.css             # Main stylesheet
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for development)

### Installation

1. **Clone or download** the project files to your local machine
2. **Navigate** to the project directory
3. **Start a local server** (required for JSON imports to work)

### Running Locally

#### Option 1: Using Python (Recommended)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Option 2: Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server
```

#### Option 3: Using Live Server (VS Code Extension)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Access the Website

Open your browser and navigate to:

- **Local**: `http://localhost:8000` (or the port shown in your terminal)
- **Main page**: `http://localhost:8000/index.html`

## 🎨 Design Features

### Color Scheme

- **Primary**: Forest Green (#2E7D32)
- **Secondary**: Light Green (#4CAF50)
- **Accent**: Orange (#FF9800)
- **Text**: Dark Gray (#212121)
- **Backgrounds**: White and Light Gray

### Typography

- **System Fonts**: Uses native system fonts for optimal performance
- **Responsive Sizing**: Scales appropriately across all devices
- **Readable**: Optimized for gaming and content consumption

### Layout

- **Flexbox Only**: Pure CSS Flexbox layout (no CSS Grid)
- **Mobile-First**: Designed for mobile devices first, then enhanced for larger screens
- **Responsive Images**: Optimized images that scale with the layout

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px (default)
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

## 🔧 Technical Implementation

### JavaScript Features

- **Content Builder**: Dynamic header and footer generation
- **Mobile Menu**: Touch-friendly navigation with scroll lock
- **Cookie Management**: Local storage-based cookie consent
- **Form Validation**: Client-side validation with error handling
- **Content Loading**: JSON-based content management
- **Smooth Scrolling**: Enhanced user experience

### CSS Features

- **CSS Variables**: Consistent theming and easy customization
- **Modern Animations**: Smooth transitions and hover effects
- **Flexbox Layout**: Responsive and flexible design system
- **Custom Properties**: Reusable design tokens

### Content Management

- **JSON Data**: All text content stored in `data.json`
- **Dynamic Rendering**: Content loaded and rendered via JavaScript
- **Easy Updates**: Modify content without touching HTML

## 🎯 Key Sections

### Main Page (index.html)

1. **Hero Section**: Full-screen game introduction
2. **Features**: Game highlights with icons
3. **How to Play**: Game instructions
4. **Game**: Embedded iframe with Safari Match
5. **Field**: Game field description


### News Page (new-safari.html)

1. **Game Updates**: Latest game features and improvements
2. **Trail Diaries**: Behind-the-scenes stories

### Contact Page (contacts-safari.html)

1. **Contact Information**: Email, phone, address
2. **Contact Form**: Validated contact form
3. **Map**: Google Maps integration

### Legal Pages

- **Disclaimer**: Game terms and information
- **Cookie Policy**: Cookie usage explanation
- **Privacy Policy**: Data protection information

## 🍪 Cookie Management

- **Cookie Bar**: Appears on first visit
- **Local Storage**: Remembers user preferences
- **No External Tracking**: Privacy-focused implementation

## 📧 Contact Information

- **Email**: contact@nextlevelquesting.com
- **Phone**: +44 543 22 22 22
- **Address**: 10 Downing Street, London, SW1A 2AA, United Kingdom

## 🔒 Privacy & Legal

- **No External Links**: Self-contained website
- **GDPR Compliant**: Cookie consent and privacy policy
- **Family Friendly**: Suitable for all ages
- **No Data Collection**: Minimal data processing

## 🚀 Performance Features

- **Optimized Images**: Compressed and responsive images
- **Lazy Loading**: Images load only when needed
- **Minimal Dependencies**: Pure HTML, CSS, and JavaScript
- **Fast Loading**: Optimized for quick page loads

## 🐛 Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📝 Customization

### Adding New Content

1. Edit `js/data.json` to add new content
2. Use `data-content` attributes in HTML
3. Content automatically loads and displays

### Styling Changes

1. Modify CSS variables in `:root`
2. Update component styles in `styles/main.css`
3. Changes apply across all pages

### Adding New Pages

1. Create new HTML file
2. Include header and footer sections
3. Add navigation links in `data.json`

## 🤝 Contributing

This is a complete, production-ready website. For modifications:

1. **Backup** your current files
2. **Test** changes locally before deployment
3. **Validate** HTML and CSS
4. **Check** responsive behavior across devices

## 📄 License

This project is created for Safari Match game promotion. All rights reserved.

## 🆘 Support

For technical support or questions:

- Check browser console for errors
- Verify local server is running
- Ensure all files are in correct directories
- Check file permissions and paths

## 🎉 Launch

Your Safari Match website is ready to launch! Simply upload all files to your web hosting service and enjoy your new game website.

---

**Built with ❤️ for Safari Match - The Ultimate Safari Adventure!**
