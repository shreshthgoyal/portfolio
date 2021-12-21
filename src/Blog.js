import React from 'react';
import "./Blog.css";
const Blog = () => {
    const [articles, setArticles] = React.useState([]);
    React.useEffect(() => {
        fetch("https://dev.to/api/articles?username=shreshthgoyal")
        .then((res)=>res.json())
        .then((res)=>{
            setArticles(res);
        });
    }, []);
return(
  <div>
  {articles.map((article) => (
  <div className="blog-card" key={article.id}>
  <div className="meta">
    <div className="photo"><img src={article.social_image} alt="blog" /></div>
    <ul className="details">
      <li className="author">{article.user.name}</li>
      <li className="date">{article.readable_publish_date}</li>
      <li className="tags">
        <ul>
          {article.tag_list.map((tag)=>(<li key={tag}>| {tag} | </li>))}
        </ul>
      </li>
    </ul>
  </div>
  <div className="description">
    <h1>{article.title}</h1>
    <p>{article.description}</p>
    <p className="read-more">
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
    </p>
  </div>
</div>))}
</div>
)
}

export default Blog; 