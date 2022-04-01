import React, { useEffect, useState } from 'react';
import SingleFriend from '../SingleFriend/SingleFriend';

const Friend = () => {
    const[friends,setFriend]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[])
    return (
        <div>
            <h1>This is a friends page {friends.length}</h1>
            {
                friends.map(friend=><SingleFriend key={friend.id}  friend={friend} ></SingleFriend>)
            }
        </div>
    );
};

export default Friend;