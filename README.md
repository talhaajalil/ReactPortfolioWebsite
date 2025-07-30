# Talha Jalil - DevOps Engineer Portfolio

A modern, responsive portfolio website built with React, showcasing my experience as a DevOps Engineer at CareCloud.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark/light mode toggle
- **Responsive**: Mobile-first design that works on all devices  
- **Performance Optimized**: Fast loading and SEO-friendly
- **S3 Ready**: Configured for AWS S3 static website hosting
- **Interactive**: Smooth animations and transitions using Framer Motion

## 🛠️ Technologies Used

- React 18+ with Hooks
- CSS Modules for styling
- Framer Motion for animations
- React Icons for iconography
- React Router for navigation

## 📱 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and statistics
- **Skills**: Technical skills organized by category
- **Experience**: Professional journey and achievements
- **Projects**: Featured DevOps and infrastructure projects
- **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/talhaajalil/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment to AWS S3

### Method 1: Manual Upload
1. Run `npm run build`
2. Upload the contents of the `build` folder to your S3 bucket
3. Enable static website hosting on the bucket

### Method 2: AWS CLI
```bash
# Build the project
npm run build

# Deploy to S3
aws s3 sync build/ s3://your-bucket-name --delete
```

See [deployment/s3-deploy.md](deployment/s3-deploy.md) for detailed instructions.

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── *.module.css
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   └── index.js
├── deployment/
│   ├── build.sh
│   └── s3-deploy.md
└── README.md
```

## 🎨 Customization

### Colors
Update CSS custom properties in `src/styles/globals.css`:
```css
:root {
  --primary-color: #2563eb;
  --accent-color: #10b981;
  /* ... other colors */
}
```

### Content
Update personal information in the component files:
- `src/components/Hero.jsx` - Name, title, description
- `src/components/About.jsx` - Bio and statistics  
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Project details
- `src/components/Contact.jsx` - Contact information

### Fonts
The site uses Inter font from Google Fonts. To change it, update the link in `public/index.html` and the CSS in `src/styles/globals.css`.

## 📧 Contact

- **Email**: talha@example.com
- **GitHub**: [talhaajalil](https://github.com/talhaajalil)
- **LinkedIn**: [talhaajalil](https://linkedin.com/in/talhaajalil)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Talha Jalil