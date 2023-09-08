class Nav extends HTMLElement {

    static get observedAttributes(){
        return["login","img-src","subscribe",]
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();

    }

    render(){
            this.shadowRoot.innerHTML =`
            <link rel="stylesheet" href="./src/components/Nav/Nav.css">
            <nav>
            <img src="${this['img-src']}" width="1784px" height="541px" alt="Star+ logo" class="Logo">
            <button class="Subscribe">${this.subscribe}</button>
            <button class="Login">${this.login}</button>
            </nav>
            `

        
    }

    
}

customElements.define("my-nav",Nav);
export default Nav;
