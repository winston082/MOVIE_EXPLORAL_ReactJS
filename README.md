# Movie Exploral

A React-based movie exploration application that allows users to search for movies and view detailed information using the OMDb API.

## Purpose

Movie Exploral provides a simple and intuitive interface for discovering movies. Users can:
- Search for movies by title
- Browse movie results with posters, titles, and release years
- View detailed movie information including plot, genre, and release date

## Project Structure

```
movie-exploral/
├── public/                    # Static assets
│   └── vite.svg
├── src/
│   ├── component/            # Reusable UI components
│   │   ├── MovieCard.jsx     # Individual movie card display
│   │   ├── MovieList.jsx     # List of movie cards
│   │   └── NavBar.jsx        # Navigation bar
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Main search page
│   │   └── MovieDetail.jsx   # Detailed movie view
│   ├── App.jsx               # Main application with routing
│   ├── App.css               # Global styles
│   └── main.jsx              # Application entry point
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Bootstrap** - CSS framework
- **OMDb API** - Movie data source

## Project Logic

### Home Page (`src/pages/Home.jsx`)
- Displays a search form for movie queries
- Fetches movies from OMDb API on initial load (default: "Batman")
- Passes movie results to `MovieList` component

### Movie Detail Page (`src/pages/MovieDetail.jsx`)
- Retrieves movie ID from URL parameters
- Fetches full movie details from OMDb API
- Displays title, poster, genre, release date, and plot

### Components
- **NavBar**: Navigation with logo and home link
- **MovieCard**: Displays individual movie poster, title, year, and detail link
- **MovieList**: Renders grid of movie cards

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Folder Structure Logic

| Folder | Purpose |
|--------|---------|
| `src/component/` | Reusable, presentational components |
| `src/pages/` | Route-level components with data fetching |
| `public/` | Static files served at root URL |

## API Integration

The app uses the OMDB API:
- Search endpoint: `https://www.omdbapi.com/?apikey=[KEY]&s=[query]`
- Detail endpoint: `https://www.omdbapi.com/?apikey=[KEY]&i=[id]&plot=full`