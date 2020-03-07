import { observable, action } from 'mobx';

export default class HomeStore {
    @observable result                = 'Informe o valor do litro!';
    @observable errorMsg              = '';
    @observable valorEtanol: string   = '';
    @observable valorGasolina: string = '';

    @action calculate = () => {

        const myRegex = /^[0-9][.][0-9][0-9]$/;

        if(this.valorEtanol == '') {
            this.errorMsg = 'Informe o valor do R$ Etanol!';
            return;
        } else {
            if(!myRegex.test(this.valorEtanol)){
                this.errorMsg = 'Valor inválido para o R$ Etanol!';
                return;
            } else {
                this.errorMsg = '';
            }
        }
      
        if(this.valorGasolina == '') {
            this.errorMsg = 'Informe o valor da R$ Gasolina!';
            return;
        } else {
            if(!myRegex.test(this.valorGasolina)){
                this.errorMsg = 'Valor inválido para a R$ Gasolina!';
                return;
            } else {
                this.errorMsg = '';
            }
        }

        const valorCalculado = Number(this.valorEtanol) / Number(this.valorGasolina);

        if( valorCalculado > 0.70 ) {
            this.result = 'Abasteça com gasolina!';
        } else if( valorCalculado < 0.70 ) {
            this.result = 'Abasteça com etanol!';
        } else {
            this.result = 'Diferença irrelevante!';
        }
    }
    
    @action clear = () => {
        this.valorEtanol   = '';
        this.valorGasolina = '';
        this.result        = 'Informe o valor do litro!';
        this.errorMsg      = '';
    }   
    
    @action changedValEtanol = (text) => {
        let newText = '';
        let numbers = '0123456789.';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }

        this.valorEtanol = newText;
    }

    @action changedValGasolina = (text) => {
        let newText = '';
        let numbers = '0123456789.';
    
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
        }

        this.valorGasolina = newText;
    }

}
const homeStore = new HomeStore();
export { homeStore };