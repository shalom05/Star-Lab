class Plans extends HTMLElement {

    static get observedAttributes(){
        return["subscribe1","subscribe2","subscribe3","eligetuplan","combo","yearandprice1","yearandprice2","yearandprice3","text1","text2","text3","text","img1","img2","img3","price"]
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
            <link rel="stylesheet" href="./src/components/Plans/Plans.css">
            <section>
            <h1>${this.eligetuplan}</h1>

            <section class="position">

            <div class="Plan1">
            <img src= "${this[`img1`]}" class="img1" width="420" height="84" alt="Star+ Logo" loading="lazy">
            <h3 class="year1">${this.yearandprice1}</h3>
            <p class="text1">${this.text1}</p>
            <button class="susbcribe1">${this.subscribe1}</button>
            </div>

            <div class="combopopular">
            <img src= "${this[`img2`]}" class="Img2" width="420" height="84" alt="Star+ Logo" loading="lazy">
            <h3 class="year2">${this.yearandprice2}</h3>
            <p class="text2">${this.text2}</p>
            <button class="susbcribe2">${this.subscribe2}</button>
            </div>

            <div class="Plan3">
            <img src= "${this[`img3`]}" class="img3" width="420" height="84" alt="Star+ Logo" loading="lazy">
            <h3 class="year3">${this.yearandprice3}</h3>
            <p class="text3">${this.text3}</p>
            <button class="susbcribe3">${this.subscribe3}</button>
            </div>

            </section>
            
            <p class="end">${this.price}</p>

            </section>
            `

        
    }

    
}

customElements.define("my-plans",Plans);
export default Plans;
