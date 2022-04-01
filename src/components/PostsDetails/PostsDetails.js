import React from 'react';
import { useParams } from 'react-router-dom';

const PostsDetails = () => {
    const {postsid}=useParams();
    return (
        <div>
            <h4>hi tomra sobai kemon aco {postsid}</h4>
        </div>
    );
};

export default PostsDetails;