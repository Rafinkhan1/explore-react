import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
    },[])

    return(
        
            <div>
                <h3>Users: {users.length} </h3>

            </div>
        
    )
}