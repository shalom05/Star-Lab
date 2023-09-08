class Finish extends HTMLElement {

    static get observedAttributes(){
        return["Title","text","img",]
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
            <link rel="stylesheet" href="./src/components/Finish/Finish.css">
            <section>
            <h1>${this.title}</h1>
            <p>${this.text}</p>
            <img src="${this['img']}" width="1600" height="756" alt="¿Qué vas a ver primero?" loading="lazy">>
            </section>
            `

        
    }

    
}

customElements.define("my-finish",Finish);
export default Finish;