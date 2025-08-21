# Medizinische Assistenz - Yelyzaveta

Eine moderne, responsive Website für medizinische Assistenzdienste in Deutschland. Erstellt mit React, TypeScript und CSS Modules mit professionellem Design, dreisprachiger Unterstützung und Terminbuchungssystem.

## 🇩🇪🇷🇺🇬🇧 Mehrsprachige Unterstützung

- **Deutsch** - Hauptsprache für deutsche Kunden
- **Русский** - Für russischsprachige Nutzer  
- **English** - Für internationale Besucher

## 🚀 Features

- **🌍 Dreisprachig**: Deutsch, Русский, English mit dynamischem Sprachwechsel
- **📱 Responsive Design**: Optimiert für Mobile (320px+), Tablet (768px+) und Desktop (1024px+)
- **💼 Professionelles Design**: Sauberes, medizinisches Design mit sanften Animationen
- **📅 Terminbuchung**: Vereinfachtes Formular mit Validierung (Formik + Yup)
- **📊 Google Sheets Integration**: Automatische Datenübertragung für Terminanfragen
- **🎯 8 Hauptdienste**: Von Terminvereinbarung bis Notfallbegleitung
- **💰 Transparente Preise**: Übersichtliche Preistabelle für alle Dienstleistungen  
- **📞 Direkte Kontakte**: +49 176 84727849 | medizinischeassistenzlue@gmail.com
- **🔒 TypeScript**: Vollständige Typsicherheit in der gesamten Anwendung
- **⚡ Performance**: Optimiert mit Lazy Loading und effizienten Animationen

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS Modules** - Scoped and modular CSS
- **Formik + Yup** - Form handling and validation
- **React Input Mask** - Phone number formatting
- **Framer Motion** - Smooth animations (ready to implement)

## 📱 Responsive Breakpoints

```css
Mobile: 320px - 767px
Tablet: 768px - 1023px
Desktop: 1024px+
```

## 🎨 Design System

### Colors
- Primary Blue: `#2E4894`
- Light Blue: `#87CEEB`
- Accent Blue: `#00BFFF`
- White: `#FFFFFF`
- Text Gray: `#666666`

### Typography
- Font Family: System fonts (Apple System, Segoe UI, Roboto, etc.)
- Headings: Bold weights (700-800)
- Body: Regular weight (400-500)

## 📋 Komponenten

### Header
- Dreisprachiger Sprachwechsel (DE/RU/EN)
- Feste Navigation mit Scroll-Effekten  
- Responsives Burger-Menü für Mobile

### Hero Section  
- Hauptbanner mit medizinischer Assistenz-Botschaft
- Animierte Floating Cards
- Call-to-Action Buttons

### Über mich (About)
- Vorstellung von Yelyzaveta
- 6 Qualitäts-Features mit Icons
- Erfolgsstatistiken (500+ Termine, 50+ Partnerkliniken)

### Leistungen (Services)
1. **Terminvereinbarung** - Schnelle Termine bei Fachärzten
2. **Übersetzungen** - Deutsch ⇄ Ukrainisch/Russisch
3. **Dokumentenausfüllung** - Hilfe bei Anträgen und Formularen
4. **Erstbesuch beim Arzt** - Begleitung mit Übersetzung
5. **Notfall-Begleitung** - Dringende Krankenhaus-/Notaufnahme-Begleitung
6. **Hausarzt finden** - Suche und Terminvereinbarung
7. **Vorgespräche vor Operationen** - Aufklärungs- und Beratungsgespräche
8. **Telefonische Kommunikation** - Termine und Kommunikation im Namen des Patienten

### Preise (Prices)
- Transparente Preisübersicht für alle 8 Dienstleistungen
- Preisspannen von 15-60€ je nach Service
- Hinweise zu individuellen Kostenabsprachen

### Terminbuchung (Appointment)
- Vereinfachtes 6-Felder-Formular
- Google Sheets Integration
- Fallback für manuelle Email-Übertragung
- Deutsche Zeitslots und Validierung

### Kontakt (Contact)  
- Nur essenzielle Kontaktdaten (Telefon + Email)
- Direkte Anruf- und Email-Links
- Call-to-Action Bereich mit beiden Optionen

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Medical_Services_Proj
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

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run typecheck    # Type checking
npm run lint         # ESLint checking

## 📊 Google Sheets Setup (Optional)

Die Website kann Terminanfragen automatisch in Google Sheets speichern:

### Schritt 1: Google Sheets vorbereiten
1. Erstelle eine neue Google Tabelle
2. Füge Spaltenüberschriften hinzu: `Timestamp | Name | Email | Phone | Date | Time | Message`

### Schritt 2: Apps Script konfigurieren  
1. Öffne "Erweiterungen" → "Apps Script"
2. Kopiere den Code aus `src/utils/googleSheets.ts` (Kommentar-Bereich)
3. Speichere und deploye als Web App

### Schritt 3: URL aktualisieren
1. Kopiere die Web App URL
2. Ersetze `YOUR_GOOGLE_SCRIPT_WEB_APP_URL` in `src/utils/googleSheets.ts`

**Alternative**: Verwende Formspree.io für einfachere Setup ohne Google Apps Script.
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation component
│   ├── Hero/           # Landing section
│   ├── About/          # About section
│   ├── Services/       # Services grid
│   ├── Appointment/    # Booking form
│   ├── Contact/        # Contact section
│   └── Footer/         # Footer component
├── styles/             # Global styles
├── types/              # TypeScript definitions
├── utils/              # Utility functions
└── assets/             # Static assets
```

## ✨ Key Features Implementation

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Adaptive typography and spacing
- Touch-friendly interactions

### Form Validation
```typescript
const validationSchema = Yup.object({
  name: Yup.string().min(2).max(50).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().matches(/^\(\d{3}\) \d{3}-\d{4}$/).required(),
  // ... more validations
})
```

### Smooth Animations
```typescript
// Scroll-triggered animations
const useScrollAnimation = () => {
  // Intersection Observer implementation
  // Fade in effects on scroll
}
```

### CSS Modules Pattern
```css
.componentName {
  /* Scoped styles */
}

.componentName:hover {
  /* Hover effects */
}

@media (max-width: 767px) {
  .componentName {
    /* Mobile styles */
  }
}
```

## 🔧 Customization

### Colors
Update CSS custom properties in `src/styles/global.css`:

```css
:root {
  --primary-blue: #2E4894;
  --light-blue: #87CEEB;
  --accent-blue: #00BFFF;
  /* ... more colors */
}
```

### Content
- Update text content in component files
- Replace placeholder images with actual medical images
- Modify contact information in Contact component
- Customize form fields in Appointment component

### Styling
- Modify component-specific styles in `.module.css` files
- Update global styles in `src/styles/global.css`
- Adjust responsive breakpoints as needed

## 📱 Mobile Optimization

- Touch-friendly button sizes (44px minimum)
- Optimized form inputs for mobile keyboards
- Swipe-friendly navigation
- Reduced animations for better performance
- Compressed images for faster loading

## 🔍 SEO & Performance

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Fast loading with Vite
- Optimized bundle size
- Lazy loading ready

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions, please contact the development team or open an issue in the repository.