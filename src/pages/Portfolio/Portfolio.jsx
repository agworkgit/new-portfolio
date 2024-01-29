import "./portfolio.css";
import Project from "./Project";
import projectsData from "../../data/projects-data.json"

const Portfolio = () => {
    return (
    <div>
        <div>
            {projectsData.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} image={project.image}/>
            })}
        </div>
    </div>
    )
}

export default Portfolio;