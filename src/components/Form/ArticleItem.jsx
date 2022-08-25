import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { ArticleContext } from "../../context/ArticleContext";
export default function ArticleItem() {
  // const [data, setData] = useContext(ArticleContext);


  const [fullPostComments,setFullPostComments] = useState([])
  const [postComments, setPostComments] = useState([]);

  const location = useParams()


  
  const itemPerLoading = 3;

  const postLength = postComments.length;







  useEffect(() => {
    async function getPostsComment() {
      await axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${location.id}`)
        .then((res) => {
          setPostComments(res.data);
        });
        
    } 
    getPostsComment()
},[]);




  



  function removeArticle(x) {
    const newItems = postComments.filter((item, index) => {
      return index !== x;
    });
    setPostComments(newItems);
  }



  return (
    <div className="grid grid-cols-1 gap-2 w-[50%] mx-auto">
      {postComments.length == 0 && (
        <Alert className="col-start-2" severity="info">
          No Posts
        </Alert>
      )}

      {postComments.map((elem, i) => {
        return (
          <div className="bg-green-200 text-center py-4" key={i}>
            <h3>{elem.id}</h3>
            <h3>{elem.name}</h3>
            <p>{elem.body}</p>
            <button
              onClick={() => removeArticle(i)}
              className="bg-red-600 py-3 px-4 my-5"
            >
              Remove
            </button>
          </div>
        );
      })}
     
    </div>
  );
}
