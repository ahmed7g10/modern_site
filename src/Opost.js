import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header } from './App';
const Opost = () => {
    const[id,setid]=useState(0);
    const[post,setpost] = useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((e)=>{setpost(e.data);}).catch((e)=>{console.log(e);});;
        
    })
    return (

       <>
       <Header/>
           <div className='container'>
           <input type='text' onChange={(w)=>{
                setid(w.target.value)
            }}/>
           {post.id? <div className='cardapi'>
                <h5>{post.title}</h5>
                <h2>{post.body}</h2>
                <h3>{post.id}</h3>
                <h3> this is user id{post.userId}</h3>
            </div>:''
           }
           </div>
       </>
    );
}

export default Opost;
