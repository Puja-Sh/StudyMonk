import React, { Component } from 'react';
import axios from 'axios';

import Question from './Questions';
import Post from './Post';
import './QuestionCard.css';

class QuestionCard extends Component {

    state = {
        posts:[]
    }

    componentDidMount() {
        fetch('https://api.stackexchange.com/2.2/questions?page=999&order=desc&sort=activity&site=stackoverflow')
        .then(response => response.json())
        .then(data => {
            this.setState({posts:data.items});
        }
            
        );
    }

    render() {
        const { posts } = this.state;
        if (posts.length == 0) {
            return  <div><h3 className="loading">Loading data...</h3></div>
        }          

        return (
              <Question items = {this.state.posts} />
        );
    }
}

export default QuestionCard;