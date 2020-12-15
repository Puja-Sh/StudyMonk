import React from 'react';

import Post from './Post';

const Question = props => {
    return(<ul className="questions">
        {props.items.map(post => <Post
             key={post.id} 
             title={post.title} 
             tags={post.tags}
             username={post.owner.display_name}
             image={post.owner.profile_image}
             status={post.is_answered}
             views={post.view_count}
             time={post.creation_date}
             link={post.link}
             upvote={post.score}
             />
        )}
    </ul>
    );
};

export default Question;