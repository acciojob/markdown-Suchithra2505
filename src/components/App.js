
import React, { useState, useEffect } from 'react';
import marked from 'marked';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const convertMarkdownToHtml = () => {
      setIsLoading(true);
      setHtml(marked(markdown));
      setIsLoading(false);
    };

    convertMarkdownToHtml();
  }, [markdown]);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="app">
      <textarea
        className="textarea"
        value={markdown}
        onChange={handleMarkdownChange}
        placeholder="Write your markdown here..."
      />
      <div className="preview">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
};

export default App;

