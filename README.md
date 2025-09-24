# News App React

A modern news application built with React and Vite that fetches news from the News API. The app allows users to browse news by categories, search for specific articles, and view detailed news pages.

## Features

- Browse news by categories (Business, Technology, Entertainment, Health, Science, Sports, General)
- Search news by keywords
- View detailed article pages
- Responsive design with grid layout
- Loading animations
- News articles with and without images
- Click anywhere on news cards to navigate

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- News API key from [newsapi.org](https://newsapi.org)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd proj
```

2. Install dependencies:

```bash
npm install
```

3. Add your News API key:

   - Open `src/components/NewsList.jsx`
   - Replace `'YOUR_NEWS_API_KEY'` with your actual API key from newsapi.org

4. Run the development server:

```bash
npm run dev
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages Deployment

1. Push your code to GitHub
2. Go to your repository Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your app when you push to the main branch

Your app will be available at: `https://yourusername.github.io/proj/`

### Manual Build

To build the project manually:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and search
│   ├── NewsList.jsx        # Main news display
│   ├── NewsDetail.jsx      # Individual article view
│   ├── Home.jsx           # Home page component
│   └── Loader.jsx         # Loading animation
├── App.jsx                # Main app component
├── App.css               # Styles
└── main.jsx              # App entry point
```

## Technologies Used

- React 18
- React Router DOM
- Vite
- News API
- CSS3 with Flexbox/Grid
- GitHub Actions (for deployment)
