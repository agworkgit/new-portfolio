import "./portfolio.css"

function Project(props) {
    //Body
    return (
    <div className="project-container container section">
    <div className="project-card">
        <h2 className="project-title">{props.title}</h2>
        <p className="project-subtitle">{props.description}</p>
        <img src={props.image} className="project-image"></img>
        <a href={props.linkDeployed} target="_blank" className="button button-flex project-deployed-button">
            <i className="bi bi-box-arrow-right dep-icon"></i>
            Link to deployed project</a>
        <a href={props.linkRepo} target="_blank" className="button button-flex project-repo-button">
            <i className="bi bi-folder rep-icon"></i>
            Link to repository</a>
    </div>
    </div>)
}

export default Project;
