class Circuit extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render(){ 
        this.innerHTML = `
        <div class="mini-circuit" id="viewCircuit">
            <h2>2022 Circuit</h2>
            <div class="row"></div>
            <div class="circuit" id="circuitList">
                    
            </div>
            <div class="row"></div>
        </div>
        `;
    }
}

customElements.define('prev-circuit', Circuit);