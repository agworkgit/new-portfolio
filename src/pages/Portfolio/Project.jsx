import "./portfolio.css"

function Project(props) {
    //Body
    return (
    <div className="project-container">
    <div className="project-card">
        
        <img src={props.image} className="project-image"></img>
        <h2 className="project-title">{props.title}</h2>
        <p className="project-subtitle">{props.description}</p>
        
        <a href={props.linkDeployed} target="_blank" rel="noreferrer" className="button button-flex project-deployed-button">
            <i className="bi bi-box-arrow-right dep-icon"></i>
            Live Link</a>
        <a href={props.linkRepo} target="_blank" rel="noreferrer" className="button button-flex project-repo-button">
            <i className="bi bi-folder rep-icon"></i>
            Code Link</a>
    </div>
    </div>)
}

export default Project;
