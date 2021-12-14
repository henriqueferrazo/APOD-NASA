const botao = $("#btn-in")
const ttulo = $("#titulo")
const solucao = $("#imagem")
const textExplicacao = $("#esplicação")

botao.('onclick', function(evento){
    evento.preventDeFault()
    sendApiRequest()
}

function apiNasa(){
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod? api_key = NQYH3fThl9tf9JqcaE5aLiBxsfNkHmh302iSCcxo` + $(`#data`).val(),
        sucesso: function(resultado){
            obj: resultado,
            titulo.html(`${obj.title}`)
            if(obj.media_type = 'video'){
                resultado.html(`<img width = "600px" heght = "600px" id="result" src="${obj.url}" alt=""></img>`)
            }else{
                resultado.html(`<iframe id="video" src="${obj.url}" alt=""></iframe>`)
            }
        }
    })
}