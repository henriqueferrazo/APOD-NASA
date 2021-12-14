$("#btn-in").click(
    function(){
        const data = $("#date").val(); 
        $.ajax({
            url: `https://api.nasa.gov/planetary/apod?api_key=kb1rtE5VqFl1PAaE8dI16yagmdTXhJQj1ykRqct2&date=${data}`,
            type: 'GET',

            success: function(result){
                $('#imagem').height("350px")
                $('#imagem').width("650px")
                $('#titulo').text(result.title)
                $('#imagem').attr("src", result.url)
                $('#esplicação').text(result.explanation)
            }
        })
    }
)
