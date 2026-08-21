var dadosDoPais = [];

function limpar(){
    document.getElementById("pais").value = "";
    limparDados();
}


async function buscarEducacao(pais){

     //educação 19
    let educacao;

    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77819`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Educação não encontrado");
                return;
            }
            
            //Acesso aos dados do indicador educacao

            //console.log("Investimento em Educação: ", TratarErro(dados[0].series));
            educacao = TratarErro(dados[0].series);
    });
    return educacao;
}

async function buscarSaude(pais){
    //saude 20
    let saude;
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77820`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Saude não encontrado");
                return;
            }
            
            //Acesso aos dados do indicador saude
            //console.log("Investimento em Saúde: ", TratarErro(dados[0].series));
            saude = TratarErro(dados[0].series);
    });
    return saude;
}

async function buscarPesquisaDesenvolvimento(pais){
//pesquisa e desenvolvimento 21
    let pesquisaDesenvolvimento;
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77821`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Pesquisa e Desenvolvimento não encontrado");
                return;
            }
            //Acesso aos dados do indicador Pesquisa e Desenvolvimento
            //console.log("Investimento em Pesquisa e desenvolvimento: ", TratarErro(dados[0].series));
            pesquisaDesenvolvimento = TratarErro(dados[0].series)
    });
    return pesquisaDesenvolvimento;
}

async function buscarPopulacao(pais){
    let populacao;
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77849`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador população não encontrado");
                return;
            }
            //Acesso aos dados do indicador população
            //console.log("População: ", TratarErro(dados[0].series));
            populacao = TratarErro(dados[0].series);
    });
    return populacao;
}

async function buscarTotalPib(pais){
    //total pib 27
    let totalPib;
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77827`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Pib Total não encontrado");
                return;
            }
            
            //Acesso aos dados do indicador Pib Total
            //console.log("Pib Total: ", TratarErro(dados[0].series));
            totalPib = TratarErro(dados[0].series)
    });
    return totalPib;
}

async function buscarPibPerCapita(pais){
    //pib per capita 23
    let pibPerCapita;
    fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/77823`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(dados){
            if(dados.error){
                alert("Indicador Educação não encontrado");
                return;
            }
            
            //Acesso aos dados do indicador pib per capita
            //console.log("Pib Per Capita: ", TratarErro(dados[0].series));
            pibPerCapita = TratarErro(dados[0].series);
    });
    return pibPerCapita;
}

function buscarPais(pais){
    let paisEncontrado;
    let capital;
    let lingua;
    let areaTotal;
    let localizacao;
    let historico;

    

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
            /*
            console.log(dados);
            console.log("País: ", dados[0].nome.abreviado); //Brasil
            console.log("Capital: ", dados[0].governo.capital.nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);
            console.log("Area Total: ", dados[0].area.total + " km²");
            console.log("Localização: ", dados[0].localizacao["sub-regiao"].nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);
            console.log("historico: ", dados[0].historico);
            */

            paisEncontrado = dados[0].nome.abreviado;
            capital = dados[0].governo.capital.nome;
            lingua = dados[0].linguas[0].nome;
            areaTotal = dados[0].area.total + " km²";
            localizacao = dados[0].localizacao["sub-regiao"].nome;
            historico = dados[0].historico;

            console.log(paisEncontrado)
            console.log(capital)
            console.log(lingua)
            console.log(areaTotal)
            console.log(localizacao)
            console.log(historico)
            
            document.getElementById("nomePais").innerHTML = paisEncontrado;
            document.getElementById("capital").innerHTML = capital;
            document.getElementById("lingua").innerHTML = lingua;
            document.getElementById("area").innerHTML = areaTotal;
            document.getElementById("localizacao").innerHTML = localizacao;
            document.getElementById("historico").innerHTML = historico;
            
            dadosDoPais.push(paisEncontrado);
            dadosDoPais.push(capital);
            dadosDoPais.push(lingua);
            dadosDoPais.push(areaTotal);
            dadosDoPais.push(localizacao);
            dadosDoPais.push(historico);


    });
    //console.log(dadosDoPais);
    //return dadosDoPais;
    
}

function limparDados(){
    document.getElementById("vazio").innerHTML = "";
    document.getElementById("nomePais").innerHTML = "";
    document.getElementById("capital").innerHTML = "";
    document.getElementById("lingua").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("localizacao").innerHTML = "";
    document.getElementById("historico").innerHTML = "";
}

async function main(){
    let pais = document.getElementById("pais").value;    
    pais = pais.slice(0,2);

    if (pais != ""){
        limparDados();
        let paisEncontrado = buscarPais(pais);
    } else {
        limparDados();
        document.getElementById("vazio").innerHTML = "Valor em Branco";
    }

            
    /*
    let educacao = buscarEducacao(pais);
    let saude = buscarSaude(pais);
    let pesquisaDesenvolvimento = buscarPesquisaDesenvolvimento(pais);
    let populacao = buscarPopulacao(pais);
    let totalPib = buscarTotalPib(pais);
    let pibPerCapita = buscarPibPerCapita(pais);


    console.log(
        "País: " + paisEncontrado[0],
        "\nCapital: " + paisEncontrado[1],
        "\nLingua: " + paisEncontrado[2],
        "\nArea Total: " + paisEncontrado[3],
        "\nLocalizacao: " + paisEncontrado[4],
        "\nInvestimento em Educacao: " + educacao,
        "\nInvestimento em Saude: " + saude,
        "\nInvestimento em Pesquisa e Desenvolvimento: " + pesquisaDesenvolvimento,
        "\nPopulacao: " + populacao,
        "\nTotal do Pib: " + totalPib,
        "\nPib per Capita: " + pibPerCapita,
        "\nHistorico: " + paisEncontrado[5]
    );
    */
}