import * as components from "./components/indexH.js"

class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-nav img-src="https://cnbl-cdn.bamgrid.com/assets/e41020c93fec10692725897c2cffbc75a1c59a6855b2cb702d85b45c596a81e7/original"
        Login= "INICIAR SESION"
        Subscribe="SUSCRÍBETE AHORA"
        ></my-nav>
        
        <my-plans eligetuplan="Elige tu plan" 
        img1="https://cnbl-cdn.bamgrid.com/assets/22ae3f62d85a2b2f27f3804e10099b5d3a2dcd85674cb35580fd3804e297e57c/original" 
        yearandprice1="COP 34.900/mes*"
        text1="Estrenos de películas, series y eventos deportivos de ESPN. En Star+ hay más de lo que te gusta."
        subscribe1="SUSCRÍBETE AHORA"

        img2="https://cnbl-cdn.bamgrid.com/assets/5071639d0f6a94c5f2195a70334122de0f503bde7be35d898d9527edf8089f82/original" 
        yearandprice2="COP 41.900/mes*"
        text2="Contrata Disney+ y Star+ juntos. Ahorra y disfruta ahora los dos servicios por un precio único."
        subscribe2="SUSCRÍBETE AHORA"

        img3="https://cnbl-cdn.bamgrid.com/assets/22ae3f62d85a2b2f27f3804e10099b5d3a2dcd85674cb35580fd3804e297e57c/original" 
        yearandprice3="COP 319.900/año*"
        text3="Un año de Star+ a un precio único. Todo el entretenimiento y tus deportes favoritos, sin límites."
        subscribe3="SUSCRÍBETE AHORA"
        
        price="* El precio podría variar en otras plataformas. Podrían aplicar cargos de terceros no asociados a Disney.">
     
        
        </my-plans>

        <my-finish title="¿Qué vas a ver primero?" 
        text="Estrenos de películas, clásicos, sagas, series exclusivas, comedias animadas, producciones originales y deportes en vivo de ESPN."
        img="https://cnbl-cdn.bamgrid.com/assets/8adc7e50e0686e1dbb9f9d3dddef07cc3830b860d01a4393d36b62f75c541714/original" >
        </my-finish>
        `
       

}


}

customElements.define("app-container",AppContainer);