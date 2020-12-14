import React, {Fragment, useState, useEffect} from 'react';

import Header from './components/Header';
import Form from './components/Form';
import NewsList from './components/NewsList';

function App() {

  const [category, saveCategory] = useState('');
  const [news, setNews] = useState([])

  useEffect(() => {
    const APIget = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=3f3136ec2f23409a80fe5e7276d5ee02`;
      const response = await fetch(url);
      const result = await response.json();

      setNews(result.articles)
    }
    APIget()
  }, [category])

  return (
    <Fragment>
      <Header
        title='News finder'
      />

      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
