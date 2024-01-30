import "./backtotop.css"
import { HashLink } from 'react-router-hash-link';

const BackToTop = () => {
    window.addEventListener("scroll", function () {
        const backToTop = document.querySelector(".back-to-top");
        (this.scrollY >= 560) 
        ? backToTop.classList.add("show-scroll")
        : backToTop.classList.remove("show-scroll");

        // If the viewport is past 560px, show arrow back to top
    })

    return (
        <HashLink to="#" className="back-to-top">
            <i className="bi bi-arrow-up-circle-fill back-to-top-icon"></i>
        </HashLink>
    )
}

export default BackToTop;