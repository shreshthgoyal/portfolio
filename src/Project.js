import "./Project.css";
import{ projects }from "./data/project";
const Project = () => {
    return(
<div id="movie-card-list">
{ 
			projects.map(project=> (
	<div class="movie-card" style={{backgroundImage: "url(" + `${project.img}` + ")"}}>
    <div class="movie-card__overlay"></div>
    <div class="movie-card__share">
      <button class="movie-card__icon"><i class="material-icons">xe87d</i></button>
      <button class="movie-card__icon"><i class="material-icons">xe253</i></button>
      <button class="movie-card__icon"><i class="material-icons">xe80d</i></button>
    </div>
    <div class="movie-card__content">
      <div class="movie-card__header">
        <h1 class="movie-card__title">{project.name}</h1>
        <h4 class="movie-card__info">{project.desc}</h4>
      <div class="movie-card__desc">{project.tech.map(i=> (<span className="tech" key={i}> ▫ {i} ▫ </span>))}</div>
      <a href={project.url} target="_blank" rel="noreferrer" ><button class="btn btn-outline movie-card__button" type="button">Source Code  <i class="fab fa-github"></i></button></a>
	  {project.live ? <a href={project.live} target="_blank" rel="noreferrer" ><button class="btn btn-outline movie-card__button" type="button">Live  <i class="fas	 fa-code"></i></button></a> : ""}
	  </div>
    </div>
  </div>

			))
}
</div>
    )
}

export default Project;