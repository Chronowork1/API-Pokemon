let url ="http://pokeapi.co/api/v2/pokemon"

console.log(url)

$(document).ready(function(){
    let pokeApi = "http://pokeapi.co/api/v2/"
    let inputVal;
    $("#searchButton").click(function(){
        $.ajax({
            url: pokeApi,
            type: "GET",
            success: function(response){
                
            }
        })
    })
})