function TratarErro(dadoDaBusca){
    try {
        if(dadoDaBusca != undefined)
            return dadoDaBusca[0].serie;
    } catch (error) {
        return "A lista deste dado é vazia";
    }
}