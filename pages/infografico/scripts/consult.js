async function get(url) {
    let request = await new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

async function consulta(adress, relatorio, cod) {
    data = await get(adress + relatorio + "/" + cod +"/83767");
    format = JSON.parse(data);

    console.log(format);
    return format;

}

async function dados(relatorio, cod, cod2) {   
    data = await consulta("https://apitempo.inmet.gov.br/normais/consulta/", relatorio, cod);
    
    mesMedicao = [];
    
    valor = [];

    valor2 = [];
    
    data.forEach(element => {
        mesMedicao.push(element.MES_MEDICAO);
        valor.push(parseFloat(element.VALOR));
    });

    data = await consulta("https://apitempo.inmet.gov.br/normais/consulta/", relatorio, cod2);

    data.forEach(element => {
        valor2.push(parseFloat(element.VALOR));
    });

    return [
        mesMedicao, valor, valor2
    ]
}