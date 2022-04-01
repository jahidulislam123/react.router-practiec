import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendShowDetails = () => {


    const {friendid}=useParams();
    const [friend,setFriend]=useState({});
    

    useEffect(()=>{

        const url=`https://jsonplaceholder.typicode.com/users/${friendid}`;
        
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[])

    return (
        <div>
            <h3>Information of friend : {friendid} </h3>
            <h5>ami tomar sathe aci vaipo{friendid}</h5>
            <p><small>tomi ki amake cere cole jabe naki amar sathe thakbe</small></p>
            <h3>useName:{friend.username}</h3>
            <h3>useName:{friend.address?.street}</h3>
            <h3>useName:{friend.username}</h3>
            
        </div>
    );
};

export default FriendShowDetails;