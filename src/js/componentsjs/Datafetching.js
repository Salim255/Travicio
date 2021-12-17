import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Datafetching() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        
      axios.get('http://localhost:8000/api/v1/tours/').then(res =>{
          console.log(res.data);
          setPosts(res.data.data);
          console.log(posts);
      })
      .catch(err => {
          console.log(err)
      })
    },[])
    return (
        <div>
            <ul>
                {
                   /*   posts.map(post =>(
                        <li key={post.id}>{post.id}</li> 
                    ))  */ 
                }
            </ul>
        </div>
    )
}

export default Datafetching
