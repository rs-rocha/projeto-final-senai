function limpar(){
    document.getElementById("pais").value = "";
}

function buscarEducacao(pais){
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
            console.log("Investimento em Educação: ", TratarErro(dados[0].series));
    });
}

function buscarSaude(pais){
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
            console.log("Investimento em Saúde: ", TratarErro(dados[0].series));
    });
}

function buscarPesquisaDesenvolvimento(pais){
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
            console.log("Investimento em Pesquisa e desenvolvimento: ", TratarErro(dados[0].series));
    });
}

function buscarPopulacao(pais){
    
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
            console.log("População: ", TratarErro(dados[0].series));
    });

}

function buscarTotalPib(pais){
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
            console.log("Pib Total: ", TratarErro(dados[0].series));
    });
}

function buscarPibPerCapta(pais){
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
            console.log("Pib Per Capita: ", TratarErro(dados[0].series));
    });
}

function buscarPais(pais){
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
            console.log("Area Total: ", dados[0].area.total + " km²");
            console.log("Localização: ", dados[0].localizacao["sub-regiao"].nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);
            console.log("historico: ", dados[0].historico);
    });
}

function main(){
    let pais = document.getElementById("pais").value;
    pais = pais.slice(0,2);
    buscarPais(pais);
    buscarEducacao(pais);
    buscarSaude(pais);
    buscarPesquisaDesenvolvimento(pais);
    buscarPopulacao(pais);
    buscarTotalPib(pais);
    buscarPibPerCapta(pais);
}