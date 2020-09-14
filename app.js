// API information
const recipesURL = "https://tasty.p.rapidapi.com/recipes/list?from=0&sizes=10";
const apiKey = "70ceef3ddcmsh88831d09e9e8948p113056jsn30d2370e5888";
const queryType = "q=";
let titleQuery = " "
const queryURL = recipesURL + apiKey + "&" + queryType;

// Function to get the recipes from the API
let getRecipe = () => {
    //information needed to pull data 
    let result = $.ajax({
        type: 'GET',
        crossDomain: true,
        async: true,       
        url: recipesURL + "&" + queryType + titleQuery,
        headers: {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "70ceef3ddcmsh88831d09e9e8948p113056jsn30d2370e5888"
            }
    }) .then((result) => {
       console.log("These are recipes")
       console.log(result)
       let results = result.results;
       //console.log(results[1].instructions[0].display_text)
        // The recipes to be displayed on HTML
        if (results.length > 0) {
            $("#input-box").val(" "); 
            //for loop to iterate over the data to post each recipes name and picture
            for (let i = 0; i < 5; i++) {
                $('#container').append(`
                <div id='box${i}'>
                <h3> ${results[i].name} </h3>
                <img src="${results[i].thumbnail_url}" width=350px, height= 200px>
                </div>
                `) 
                // For every recipe, the instructions need to be posted, needed a new DIV for each recipe
                for (let y = 0; y < results[i].instructions.length; y++) {
                    let recipeIn = results[i].instructions[y].display_text
                    $(`#box${i}`).append(`
                    <p> ${recipeIn} </p>
                    `) 
                    
                } 
            }
        }
    })
}

$(() => {  
    $("#submit").on("click", (event) => {
        const value = $("#input-box").val();
        titleQuery = value;
        getRecipe()
        })
    })

