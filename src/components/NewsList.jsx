import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const NewsList = ({ category, searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const apiKey = '40965b539903469c9592b5d122922f20'; // IMPORTANT: Replace with your News API key
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      if (category) {
        url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      }
      if (searchTerm) {
        url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
      setLoading(false);
    };

    fetchNews();
  }, [category, searchTerm]);

  if (loading) {
    return <Loader />;
  }

  const articlesWithPhoto = articles.filter(article => article.urlToImage);
  const articlesWithoutPhoto = articles.filter(article => !article.urlToImage);

  return (
    <div>
      <div className="news-list">
        {articlesWithPhoto.map((article, index) => (
          <Link key={index} to={`/article/${encodeURIComponent(article.title)}`} state={{ article: article }} className="news-item-link">
            <div className="news-item">
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
              <div className="news-source">{article.source?.name || 'Unknown Source'}</div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
      {articlesWithoutPhoto.length > 0 && (
        <div className="no-photo-news-bottom">
          <h3>Other Headlines</h3>
          <ul>
            {articlesWithoutPhoto.map((article, index) => (
              <li key={index}>
                <Link to={`/article/${encodeURIComponent(article.title)}`} state={{ article: article }}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsList;
