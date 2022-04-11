class Standing extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="standing" id="viewStanding">
            <p>Drivers Standing</p>
            <h2>FIA Formula One World Championship 2022</h2>
            <div class="driver-ranking" id="driverRanking">
                            
            </div>
        </div>
        `;
    }
}

customElements.define('mini-standing', Standing)