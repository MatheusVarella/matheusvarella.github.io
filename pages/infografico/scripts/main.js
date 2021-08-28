function get(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function main() {
    data = get("https://apitempo.inmet.gov.br/estacao/2019-10-23/2019-10-23/A301");
    format = JSON.parse(data);

    format.forEach()
}

main()