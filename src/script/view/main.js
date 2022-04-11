import "../component/description-item.js";
import viewToStanding from "../data/view-to-standing.js";
import viewToConstructor from "../data/view-to-constructor.js";
import viewToCircuit from "../data/view-to-circuit.js";

const main = () => {
    let slideIndex = 0;

    const showSlides = () => {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }    
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 7000);
    }

    showSlides();
    viewToStanding();
    viewToCircuit();
    viewToConstructor();
};

export default main;