import React, { useEffect, useState } from "react";
import logo from "../../assets/image/development.jpg";
import solution from "../../assets/image/solution.png";
import grow from "../../assets/image/grow.png";
import strategy from "../../assets/image/strategy.jpg";
import testing from "../../assets/image/testing.webp";
import { Link } from "react-router-dom";
export default function Article() {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);

  const limit = 10;

  const itemPerLoading = 3;

  const postsLength = data.length;

  const end = postsLength + itemPerLoading;

  const rest = limit % itemPerLoading;

  function loadMore() {
    /**
     *
     *  slice (start, end)
     *
     * curentsitems + iterperload
     *
     * limit - datalength === 1 ? : curettentitesm perload + moduu
     *
     */

    const newItems = fullData.slice(
      postsLength,
      limit - postsLength == rest
        ? postsLength + rest
        : postsLength + itemPerLoading
    );

    setData([...data, ...newItems]);
  }



function loadLess(){
    const removedItems=[...data].splice(postsLength-itemPerLoading,itemPerLoading)
    const newItems=data.filter((item)=>{
        return(
            removedItems.indexOf(item)==-1
        )
    })
    setData(newItems)
}


  useEffect(() => {
    async function fetchPosts() {
      let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await resp.json();
      setFullData(json);
      setData(json.slice(0, itemPerLoading));
    }
    fetchPosts();
  }, []);

  return (
    <div className="my-4 w-[90%] m-auto">
      <img src={logo} alt="logo"></img>

      <h2 className="text-center my-4 text-xl font-bold bg-slate-400 p-3 w-1/2 m-auto">
        Articles
      </h2>
      <section className="lg:grid lg:grid-cols-3 lg:gap-4 md:mt-3">
        {data.map((item, index) => {
          return (
            <article key={index}>
              <img src={solution} />
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <div className="mt-[5%]">              
              <Link to={`/comments/${item.id}`} className="bg-sky-200 py-3 px-4">See All comments</Link>
              </div>

            </article>
          );
        })}
      </section>
      <button
      disabled={postsLength === limit}
      className="py-3 px-4 bg-red-700 mt-4 text-white mx-auto table"
      onClick={loadMore}
    >
      load More
    </button>
    <button
    disabled={postsLength === itemPerLoading}
    className="py-3 px-4 bg-red-700 mt-4 text-white mx-auto table"
    onClick={loadLess}
  >
    load Less
  </button>
    </div>
  );
}
