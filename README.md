# BCB Coffee - Premium Coffee Shop Application

A sophisticated, modern web application for BCB Coffee featuring authentic branding, seamless ordering experience, and comprehensive coffee shop functionality.

![BCB Coffee App](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple)

## 🌟 Features

### ☕ Core Functionality
- **Authentic Branding**: Real BCB Coffee logo and color scheme from bcbcoffee.com
- **Product Catalog**: Browse coffee, tea, pastries, and desserts with category filtering
- **Shopping Cart**: Add items, manage quantities, real-time price calculations
- **User Authentication**: Login/registration system with profile management
- **Loyalty Program**: Points-based rewards system with progress tracking
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 Design Highlights
- **Colorful Card System**: Category-specific colored borders (orange for coffee, purple for tea, etc.)
- **Professional UI**: Clean, modern interface with authentic BCB Coffee branding
- **Intuitive Navigation**: Color-coded navigation buttons matching official website
- **Seasonal Items**: Dynamic seasonal menu section
- **Social Integration**: Instagram integration (@bcbcoffee)

### 🛒 E-commerce Features
- **Real-time Cart Updates**: Instant feedback when adding/removing items
- **Price Calculations**: Automatic subtotal, tax, and total computation
- **Order Management**: Comprehensive cart with quantity controls
- **User Profiles**: Account dashboard with loyalty points and rewards
- **Product Ratings**: Star ratings and customer feedback display

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/bcb-coffee-app.git
   cd bcb-coffee-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## 📱 Screenshots

### Home Page
- Hero section with BCB Coffee branding
- Featured products showcase
- Company values and call-to-action sections

### Menu Page
- Colorful category filtering
- Product cards with authentic BCB Coffee items
- Real-time "Add to Cart" functionality

### Cart Page
- Item management with quantity controls
- Order summary with tax calculations
- Seamless checkout flow

### Profile Page
- User authentication system
- Loyalty points dashboard
- Account management features

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **shadcn/ui**: High-quality, accessible UI components
- **Lucide Icons**: Beautiful, consistent icon library

### State Management
- **React Context API**: Global state for cart and authentication
- **Local Storage**: Persistent user sessions and cart data

### Development Tools
- **ESLint**: Code quality and consistency
- **Hot Module Replacement**: Instant development feedback
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
bcb-coffee-app/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, logos, and media files
│   │   └── bcb_coffee_logo.jpeg
│   ├── components/        # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Main application pages
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Cart.jsx
│   │   ├── Profile.jsx
│   │   └── About.jsx
│   ├── utils/            # Utility functions and contexts
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🎯 Key Features Breakdown

### Authentic BCB Coffee Branding
- **Real Logo**: Integrated actual BCB Coffee circular logo from official website
- **Color Palette**: Vibrant multi-color system matching bcbcoffee.com
- **Typography**: Clean, modern fonts for optimal readability
- **Layout**: Card-based design consistent with official branding

### Shopping Experience
- **Product Categories**: Coffee, Tea, Pastries, Desserts with color-coded organization
- **Real Menu Items**: Authentic products from BCB Coffee including:
  - Signature Espresso
  - Honey Lavender Latte
  - Coconut Cold Brew
  - Strawberry Peach Iced Tea
  - Lavender Vanilla Sugar Cookie Bars
  - Strawberry Shortcake Ice Cream Pie

### User Experience
- **Intuitive Navigation**: Color-coded buttons (Blue Home, Orange Menu, Purple About)
- **Responsive Design**: Seamless experience across all devices
- **Fast Performance**: Optimized with Vite for quick loading times
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup
The application runs on `http://localhost:5173` by default. No additional environment variables are required for basic functionality.

## 🚀 Deployment

### Static Hosting (Recommended)
This application can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment

### Build Process
```bash
npm run build
```
This creates a `dist` folder with optimized production files.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **BCB Coffee**: For the authentic branding and inspiration from bcbcoffee.com
- **shadcn/ui**: For the beautiful, accessible UI components
- **Tailwind CSS**: For the utility-first CSS framework
- **React Team**: For the amazing React framework

## 📞 Contact

For questions about this project, please open an issue on GitHub.

---

**Built with ❤️ for coffee lovers everywhere**

*Experience the perfect blend of artisanal coffee craftsmanship and modern web technology.*

