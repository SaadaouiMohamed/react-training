import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
export default function ArticleItem() {

   const [data, setData] = useContext(ArticleContext);

  const [fullPostComments, setFullPostComments] = useState([]);



  let navigate=useNavigate()


  
  const [postComments, setPostComments] = useState([]);

  const location = useParams();

  const itemPerLoading = 1;

  const postLength = postComments.length;


  useEffect(() => {
    async function getPostsComment() {
      await axios
        .get(
          `http://localhost:5051/comments?postId=${location.id}`
        )
        .then((res) => {
          setFullPostComments(res.data);
          
          setPostComments(res.data.slice(0, itemPerLoading));
          
        });
    }
    getPostsComment();
  }, []);



console.log(fullPostComments)

  function loadMore() {
    const newItems = fullPostComments.slice(
      postLength,
      postLength + itemPerLoading
    );
   
    setPostComments([...postComments, ...newItems]);
    
  }



  function loadLess() {
    const removedItems = postComments.splice(
      postLength - itemPerLoading,
      itemPerLoading
    );

    const newItems = postComments.filter((item) => {
      return removedItems.indexOf(item) == -1;
    });
    setPostComments(newItems);
  }






async function removeComment(id){

  await axios.delete(`http://localhost:5051/comments/${id}`).then((res)=>{
    console.log(res.status)
  })
  window.location.href = `/comments/${location.id}`
}


  // function removeComment(x) {
  //   const newItems = postComments.filter((item, index) => {
  //     return index !== x;
  //   });
  //   setPostComments(newItems);
  // }

  return (
    <div className="grid grid-cols-1 gap-3 w-[50%] mx-auto">
      {postComments.length == 0 && (
        <Alert className="col-start-1" severity="info">
          No Posts
        </Alert>
      )}

      {postComments.length >0 && <h2 className="text-center my-4 text-xl font-bold bg-slate-400 p-3 w-1/2 m-auto shadow-xl shadow-slate-400">Comments</h2>}


      {
        postComments.map((elem, i) => {
        return (
          <div className="relative bg-green-200 text-center p-4 shadow-xl mt-4" key={i}>
            <h3>{elem.id}</h3>
            <h3 className="text-xl font-bold">{elem.name}</h3>
            <p>{elem.body}</p>
            <button
              onClick={()=>removeComment(elem.id)}
              className="bg-red-600 py-1 px-2 absolute top-2 right-2 shadow-xl shadow-slate-400"
            >
            <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        );
      })}
      {fullPostComments.length > postLength && (
        <button
          onClick={loadMore}
          className="bg-sky-400 py-2 px-3 mx-auto table"
        >
          load More
        </button>
      )}
      {postLength !== itemPerLoading && (
        <button
          onClick={loadLess}
          disabled={postLength === itemPerLoading}
          className="bg-sky-400 py-2 px-3 mx-auto table"
        >
          load Less
        </button>
      )}
    </div>
  );
}
