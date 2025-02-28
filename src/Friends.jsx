import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends(){
    const [friends,setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setFriends(json))
    } ,[])

    return(
        <div className="box">
            <h3>Friends :{friends.length} </h3>
            {
                friends.map(friend => <Friend friend ={friend} ></Friend>)
            }
        </div>
    )
}