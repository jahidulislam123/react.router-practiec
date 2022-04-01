import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFriend = (props) => {
    
    const{name,username,email,id}=props.friend;
    const navigate=useNavigate();
    
   const ShowDetails=()=>{
       const path=`/friend/${id}`
       navigate(path);

   }

    return (
        <div >
            <h3>Name:{name} </h3>
            <h2>Email :{email}</h2>
            <h4>UserName:{username} </h4>
            <button onClick={ShowDetails}   >ShowDetails:{id}</button>
            
        </div>
    );
};

export default SingleFriend;