import React, { useEffect, useState } from "react";
import "./News.css";


function News() {

  const url ="https://newsapi.org/v2/everything?q=pollution&apikey=226cb84b76db43dcb0b55516711accb2&pageSize=6";

  const [articles, setArticles] = useState([]);
  
  
  const news = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
    news();
  }, []);
  
  
  const firstThreeArticles = articles?articles.slice(0,3):'NULL';
  const nextThreeArticles = articles?articles.slice(3):'NULL';


  return (
      <>
        <div className="column1">
        {
          firstThreeArticles.map((element) => {
            return(
              <div className="container">
                <div className="row">
                  <img className="newsImg" src={element.urlToImage} alt='newsimage'/>
                <div className="col">
                  <a href={element.url} target="_blank" rel="noreferrer">{element.title}</a>
                  <p className="newsSource">{element.source.name? element.source.name: "Source unknown"}</p>
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
                  <img className="newsImg" src={element.urlToImage} alt='newsimage'/>
                <div className="col">
                  <a href={element.url} target="_blank" rel="noreferrer">{element.title}</a>
                  <p className="newsSource">{element.source.name? element.source.name: "Source unknown"}</p>
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
