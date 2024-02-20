import fatoshistoricos from '../dados/fatos.js';

function servicoValidaAno (ano){
    if(isNaN(ano)){
        return false;
    }else{
        if(ano >= 1920 && ano <= 2020){
            return true;
        }else{
            return false;
        }
    }
}


function  servicoBuscarFatoAno(ano){
    let fatoselecionado = fatoshistoricos.find(Fato =>{
        return Fato.Ano == ano;
    });

    return fatoselecionado.Fato;
}

export {servicoBuscarFatoAno, servicoValidaAno};