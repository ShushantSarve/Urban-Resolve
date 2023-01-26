import React, { useEffect, useState } from "react";
import "./News.css";
import defaultimg from '../Utilities/defaultNews.jpg'


function News() {

  const url ="https://newsdata.io/api/1/news?apikey=pub_159762382799484f8db98c7c04a8422ce3596&q=pollution&country=in&language=en";

  const [articles, setArticles] = useState([]);
  
  
  const news = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
    news();
  }, []);
  
  
  const firstThreeArticles = articles.slice(0,3);
  const nextThreeArticles = articles.slice(3,6);


  return (
      <>
        <div className="column1">
        {
          firstThreeArticles.map((element) => {
            return(
              <div className="container">
                <div className="row">
                  <img className="newsImg" src={element.image_url?element.image_url: defaultimg} alt='newsimage'/>
                <div className="col">
                  <a href={element.link} target="_blank" rel="noreferrer">{element.title}</a>
                  <p className="newsSource">{element.source_id? element.source_id: "Source unknown"}</p>
                </div>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className="column2">
        {
          nextThreeArticles.map((element) => {
            return(
              <div className="container">
                <div className="row">
                  <img className="newsImg" src={element.image_url?element.image_url: defaultimg} alt='newsimage'/>
                <div className="col">
                  <a href={element.link} target="_blank" rel="noreferrer">{element.title}</a>
                  <p className="newsSource">{element.source_id? element.source_id: "Source unknown"}</p>
                </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </>  
   
  );
}

export default News;
