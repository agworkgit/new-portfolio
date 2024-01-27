function Project(props) {
    //Body
    return (
    <div className="container">
    <div className="card bg-warning my-2 p-2">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} className="fluid-image rounded-2 mb-2"></img>
        <button className="btn btn-secondary mb-2">Link to deployed project</button>
        <button className="btn btn-secondary">Link to repository</button>
    </div>
    </div>)
}

export default Project;
