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

function buscarPais(){

    //let chave = "ae81a959";

    let pais = document.getElementById("pais").value;
    //let ano = document.getElementById("ano").value;

    /*
    if (titulo == "") {

        alert("Digite o nome de um filme.");
        return;
    }
    */
    
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
            console.log("Localização: ", dados[0].localizacao["regiao-intermediaria"].nome);
            console.log("Lingua: ", dados[0].linguas[0].nome);            
            console.log("historico: ", dados[0].historico);
    });


}