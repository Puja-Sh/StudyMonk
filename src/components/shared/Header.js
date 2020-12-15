import React from 'react';
import axios from 'axios';

import './Header.css';

class Header extends React.Component {
   
        state = {value: ''};        
      
    
      handleChange(event) {
        console.log(this.state.value);
        this.setState({value: event.target.value});
      }

      render() {
        return(
            <div className="main-navbar">
                <form>
                    <input type="text" placeholder="search..." value={this.state.value} className="search-input"  id="search-input" onChange={this.handleChange} ></input>
                </form>
            </div>
        );
      }
  
}

export default Header;