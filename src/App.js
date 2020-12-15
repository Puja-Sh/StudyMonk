import React from 'react';

import Post from './components/element/Post';
import QuestionCard from './components/element/QuestionCard';
import './App.css';
import Header from './components/shared/Header';

function App() {
  return (
    <div>
      <Header />
      <QuestionCard />
      <Post />
    </div>
  );
}

export default App;
