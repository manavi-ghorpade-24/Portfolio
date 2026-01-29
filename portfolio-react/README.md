# Modern Portfolio - Manavi Ghorpade

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations and dark mode support.

## Features

- Modern, clean design with smooth animations
- Dark mode toggle with persistent state
- Fully responsive layout
- Smooth scroll navigation
- Animated skill bars and project cards
- Optimized performance with Vite
- Tailwind CSS for styling
- Framer Motion for animations

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Deployment

You can deploy this portfolio to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Vite project and deploy

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Content
- Update personal information in `src/components/About.jsx`
- Add/remove projects in `src/components/Projects.jsx`
- Update contact information in `src/components/Contact.jsx`
- Change the hero background image in `public/img/`

### Images
Place your images in the `public/img/` directory and reference them as `/img/your-image.jpg`

## Project Structure

```
portfolio-react/
├── public/
│   └── img/              # Images
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── context/          # React context
│   │   └── DarkModeContext.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies

```

## License

This project is open source and available under the MIT License.

## Contact

Manavi Ghorpade
- Email: manavi.u.ghorpade@gmail.com
- LinkedIn: [linkedin.com/in/manavi-ghorpade-31a0751a8](https://www.linkedin.com/in/manavi-ghorpade-31a0751a8/)
- GitHub: [github.com/Manavi-ghorpade](https://github.com/Manavi-ghorpade)
