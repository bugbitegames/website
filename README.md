# BugBite - Professional Software Solutions

A modern, responsive website for BugBite Technologies built with React, Vite, and GSAP animations. This project showcases our software development services while maintaining the original design and animation system, with content updated to reflect our business focus.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and functional components
- **Advanced Animations**: Smooth GSAP animations with ScrollTrigger
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Professional Branding**: Updated content for BugBite Technologies
- **Original Design Preserved**: Maintains the original visual design and animations
- **Content-Only Updates**: BugBite branding without architectural changes

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **Vite 5.4.10** - Fast build tool and development server
- **Tailwind CSS 3.4.14** - Utility-first CSS framework
- **GSAP 3.12.5** - Professional animation library

### Development Tools
- **ESLint** - Code linting with React and Tailwind plugins
- **Prettier** - Code formatting
- **PostCSS** - CSS processing with Autoprefixer

### Fonts & Icons
- **Inter & Poppins** - Modern web fonts from Google Fonts
- **React Icons** - Comprehensive icon library

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # Company information section
│   ├── AnimatedTitle.jsx # Reusable animated text component
│   ├── Button.jsx      # Reusable button component
│   ├── Contact.jsx     # Contact form and information
│   ├── Features.jsx    # Service offerings display
│   ├── Footer.jsx      # Site footer with social links
│   ├── Hero.jsx        # Landing page hero section
│   ├── Navbar.jsx      # Navigation header
│   ├── Story.jsx       # Company story and portfolio
│   └── VideoPreview.jsx # Interactive video component
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and utilities
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#4F46E5` (Indigo)
- **Secondary**: `#06B6D4` (Cyan)
- **Accent**: `#F59E0B` (Amber)
- **Success**: `#10B981` (Emerald)
- **Error**: `#EF4444` (Red)

### Typography
- **Primary Font**: Inter (headings, UI elements)
- **Secondary Font**: Poppins (body text, descriptions)
- **Monospace**: JetBrains Mono (code snippets)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bugbite-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code analysis

## 🏗️ SOLID Principles Implementation

### Single Responsibility Principle (SRP)
- Each component has a single, well-defined purpose
- Utility functions are separated by concern (animations, media handling)
- Configuration is externalized to constants files

### Open/Closed Principle (OCP)
- Components are open for extension through props and composition
- Animation system is extensible through configuration objects
- Media handlers can be extended without modifying existing code

### Liskov Substitution Principle (LSP)
- All button variants can be used interchangeably
- Animation components follow consistent interfaces
- Error boundaries can wrap any component

### Interface Segregation Principle (ISP)
- Components receive only the props they need
- Utility functions have focused, minimal interfaces
- Animation configurations are separated by type

### Dependency Inversion Principle (DIP)
- Components depend on abstractions (props) not implementations
- Configuration is injected rather than hardcoded
- Animation system abstracts GSAP implementation details

## 🎯 Performance Optimizations

- **Lazy Loading**: Components are loaded on-demand
- **Code Splitting**: Automatic bundle splitting by Vite
- **Image Optimization**: Responsive images with proper loading
- **Font Loading**: Optimized web font loading with fallbacks
- **Animation Performance**: Hardware-accelerated GSAP animations

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Reduced Motion**: Respects user's motion preferences
- **Color Contrast**: WCAG AA compliant color combinations

## 🔧 Customization

### Brand Configuration
Update `src/constants/brand.js` to customize:
- Company information
- Social media links
- Service offerings
- Color schemes

### Content Management
Modify `src/constants/content.js` to update:
- Page copy and messaging
- Section titles and descriptions
- Call-to-action text

### Styling
Customize `tailwind.config.js` for:
- Brand colors and typography
- Component styling
- Animation preferences

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 BugBite Technologies

**Professional Software Solutions**

- 🌐 Website: [bugbite.com](https://bugbite.com)
- 📧 Email: contact@bugbite.com
- 📱 Phone: +1 (555) 123-4567

---

Built with ❤️ by the BugBite team using modern web technologies.