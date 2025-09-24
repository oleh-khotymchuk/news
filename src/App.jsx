import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import Home from './components/Home';
import './App.css';

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <NewsList category={category} />
    </div>
  );
};

const SearchResults = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>
      <NewsList searchTerm={searchTerm} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/article/:title" element={<NewsDetail />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
