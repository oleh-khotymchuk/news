import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsDetail = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return (
      <div className="news-detail-container">
        <h1>Article not found</h1>
        <p>
          The article you are looking for could not be found. It might have been moved or deleted.
          Please go back to the <a href="/">homepage</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="news-detail-container">
      <h1>{article.title}</h1>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%' }} />}
      <p><strong>Author:</strong> {article.author || 'N/A'}</p>
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  );
};

export default NewsDetail;
