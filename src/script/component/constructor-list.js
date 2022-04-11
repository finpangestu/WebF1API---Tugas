class Constructor extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="constructor-preview" id="viewConstructor">
            <div class="constructor-preview-header">
                <h2> 2022 Constructors</h2>
                 <div class="row"></div>
            </div>
            <div class="constructor-preview-body" id="constructorList">
    
            </div>
        </div>
        `;
    }
}

customElements.define('constructor-list', Constructor);