import "./portfolio.css";
import Project from "./Project";
import projectsData from "../../data/projects-data.json"
import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

const Portfolio = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    return (
    <div className="portfolio-container">
        <div className="project-container grid">
            {projectsData.map((project) => {
                return <Project key={project.id} title={project.title} description={project.description} image={project.image} linkDeployed={project.linkDeployed}
                linkRepo={project.linkRepo}/>
            })}
        </div>
        {/* Add HashLink components for in-page navigation
        <HashLink to="/#about"></HashLink>
        <HashLink to="/#skills"></HashLink>
        <HashLink to="/#services"></HashLink> */}
    </div>
    )
}

export default Portfolio;