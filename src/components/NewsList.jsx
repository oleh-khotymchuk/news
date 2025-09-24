import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const NewsList = ({ category, searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const baseUrl = process.env.NODE_ENV === 'production' 
        ? 'https://news-backend-olehs-projects-220b7e06.vercel.app' // Replace with your deployed backend URL
        : 'http://localhost:3001';
      
      let url = `${baseUrl}/api/news`;
      const params = new URLSearchParams();
      
      if (category) {
        params.append('category', category);
      }
      if (searchTerm) {
        params.append('q', searchTerm);
      }
      
      url += params.toString();

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
          <Link key={index} to={`/news/article/${encodeURIComponent(article.title)}`} state={{ article: article }} className="news-item-link">
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
                <Link to={`/news/article/${encodeURIComponent(article.title)}`} state={{ article: article }}>
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
