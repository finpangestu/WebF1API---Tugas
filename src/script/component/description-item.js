import slide1 from '../../img/slide1.jpg';
import slide2 from '../../img/slide2.jpg';
import slide3 from '../../img/slide3.jpg';
import slide4 from '../../img/slide4.png';
import slide5 from '../../img/slide5.jpg';

class Description extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <fieldset class="description">
            <legend>
                <h2>What is Formula 1?</h1>
            </legend>
            <div class="container">
                <div class="mySlides fade">
                    <img src="${slide1}" alt="Image">
                </div>
                <div class="mySlides fade">
                    <img src="${slide2}" alt="Image">
                </div>
                <div class="mySlides fade">
                    <img src="${slide3}" alt="Image">
                </div>
                <div class="mySlides fade">
                    <img src="${slide4}" alt="Image">
                </div>
                <div class="mySlides fade">
                    <img src="${slide5}" alt="Image">
                </div>
            </div>
            <p>Formula One, abbreviated as F1 (or the full name FIA Formula One World Championship), is the highest class of single-seat auto racing regulated by the International Automotive Federation (FIA) and owned by the Formula One Group. The word formula in "Formula One" refers to the rules and regulations that all participants must follow. Formula One consists of a series of races known as Grand Prix. The races are held in circuits or public roads in the city which are closed to the public.</p>
        </fieldset>
        `;
    }
}

customElements.define('description-item', Description);