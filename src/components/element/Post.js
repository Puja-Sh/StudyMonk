import React, { useState } from 'react';
import  Modal from 'react-modal';

import './Post.css';

const Post = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
       <div className="main-question-card_div">
           <div className="question-card" onClick={() => setModalIsOpen(true)}>
               <div classNam="upper-detail">
                    <div className="details">
                        <img src={props.image} className="user-image"/>
                        <h4>{props.username}</h4>
                    </div>
               </div>

                <div className="question-title">
                    <p>{props.title}</p>
                </div>

                <div className="footer-details">                        
                    <div className="tags">
                        <ul>
                            <li>#{props.tags}</li>
                        </ul>
                    </div> 
                    <div className="upvote">
                        <h5><i class="fa fa-thumbs-up" aria-hidden="true"></i> {props.upvote}</h5>
                    </div>
                </div>   
            </div>

        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={() => setModalIsOpen(false)}
            style= {
                    {
                        overlay: {
                            backgroundColor: '#49beb7',
                           
                        },
                        content: {
                            margin:'auto',
                            height:'60%',
                            width:'50%',
                            borderRadius:'20px',
                            backgroundColor:'#eafff7'
                        }
                    }
                }
                >
                <div className="modal-div">
                    <button onClick={() => setModalIsOpen(false)} className="modal-close-btn"><i class="fa fa-times" aria-hidden="true"></i></button>
                    <div classNam="upper-detail">
                        <div className="details">
                            <img src={props.image} className="user-image"/>
                            <h2 className="username">{props.username}</h2>

                            <div className="sub-details">
                                <h3><i class="fa fa-eye" aria-hidden="true"></i>{props.views}</h3>
                                <h3><i class="fa fa-calendar" aria-hidden="true"></i>{props.time}</h3>
                            </div>                    
                        </div>
                    </div>

                    <div className="question-answer_div">
                        <div className="question-title">
                            <p>{props.title}</p>
                        </div>
                        <div className="answer-status">
                            <h2> {props.status ? 'Answered' : 'Unanswered'}</h2>
                        </div>                      
                    </div>               
                   
                    <div className="footer-details"> 
                        <div className="tags">
                            <ul>
                                <li>#{props.tags}</li>
                            </ul>
                        </div>                        
                        <div className="upvote">
                            <h5><i class="fa fa-thumbs-up" aria-hidden="true"></i> {props.upvote}</h5>
                        </div>
                      
                    </div>
                   

                    <div className="view-on-btn_div">
                        <a href={props.link} target="_blank"><button className="search-on"> View in StackOverflow</button> </a> 
                    </div>
                </div>                
        </Modal>        
       </div>
    );
};

export default Post;