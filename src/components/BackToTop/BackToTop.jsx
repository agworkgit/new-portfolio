import "./backtotop.css"

const BackToTop = () => {
    window.addEventListener("scroll", function () {
        const backToTop = document.querySelector(".back-to-top");
        (this.scrollY >= 560) 
        ? backToTop.classList.add("show-scroll")
        : backToTop.classList.remove("show-scroll");

        // If the viewport is past 560px, show arrow back to top
    })

    return (
        <a href="#" className="back-to-top">
            <i className="bi bi-arrow-up-circle-fill back-to-top-icon"></i>
        </a>
    )
}

export default BackToTop;