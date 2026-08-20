/*
var urlPais = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}"
var urlIndicadores = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}/indicadores/{indicadores}"

meuBD: {
    id.ISO-3166-1-ALPHA-3:"BRA",
    nome.abreviado:"Brasil",
    area.total: "8509360,850",
    area.símbolo: "km2",
    regiao-intermediria.nome:"America do sul",
    linguas.nome: "portugues",
    governo.capital.nome: "brasilia",
    unidades-monetarias.nome: "real brasileiro",
    historico:"blabla"
}
*/
    
function limpar(){
    document.getElementById("pais").value = "";
}

function buscarPais(){
    let pais = document.getElementById("pais").value;

    console.log(pais);
    pais = pais.slice(0,2);
    console.log(pais);
    
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("País não encontrado");
                return;
            }
            
            //Acesso aos dados dos paises
            console.log(dados);
            console.log("País: ", dados[0].nome.abreviado); //Brasil
            console.log("Capital: ", dados[0].governo.capital.nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);
            console.log("Area Total: ", dados[0].area.total); 
            console.log("Localização: ", dados[0].localizacao["sub-regiao"].nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);            
            //console.log("historico: ", dados[0].historico);
    });
    
    //educação 19
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77819`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Educação não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador educacao
            console.log("Investimento em Educação: ",dados[0].series[0].serie)
 
    });
    //saude 20
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77820`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Saude não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador saude
            console.log("Investimento em Saúde: ", dados[0].series[0].serie)
 
    });
    //pesquisa e desenvolvimento 21
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77821`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Pesquisa e Desenvolvimento não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador Pesquisa e Desenvolvimento
            console.log("Investimento em Pesquisa e desenvolvimento", dados[0].series[0].serie)
 
    });
    //populacao 49
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77849`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador população não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador população
            console.log("População: ", dados[0].series[0].serie)
 
    });

    //total pib 27
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77827`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Pib Total não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador Pib Total
            console.log("Pib Total: ", dados[0].series[0].serie)
 
    });

    //pib per capita 23
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77823`)
        .then(function(resposta){
            return resposta.json();            
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Educação não encontrado");
                return;
            }
            console
            //Acesso aos dados do indicador pib per capita
            console.log("Pib Per Capita", dados[0].series[0].serie)
 
    });
    
}