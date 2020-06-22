const recipesURL = "https://tasty.p.rapidapi.com/recipes/list?from=0&sizes=10";
const apiKey = "70ceef3ddcmsh88831d09e9e8948p113056jsn30d2370e5888";
const queryType = "q=";
let titleQuery = " "
const queryURL = recipesURL + apiKey + "&" + queryType;

let getRecipe = () => {
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

        if (results.length > 0) {
            $("#input-box").val(" "); 
            for (let i = 0; i < 10; i++) {
                $('#container').append(`
                <div id="box">
                <h3> ${results[i].name} </h3>
                <img src="${results[i].thumbnail_url}" width=350px, height= 200px>
                </div>
                `) 
                for (let y = 0; y < 10; y++) {
                    let recipeIn = results[i].instructions[y].display_text
                    $('#box').append(`
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


    // let getRecipe = () => {
    //     let result = $.ajax({
    //         type: 'GET',
    //         crossDomain: true,
    //         async: true,        
    //         url: recipesURL + "&" + queryType + titleQuery,
    //         headers: {
    //             "x-rapidapi-host": "tasty.p.rapidapi.com",
    //             "x-rapidapi-key": "70ceef3ddcmsh88831d09e9e8948p113056jsn30d2370e5888"
    //             }
    //     }) .then((result) => {
    //        console.log("These are recipes")
    //        console.log(result)
    //        let results = result.results;
    //        console.log(results[1].instructions[0].display_text)
    
    //         if (results.length > 0) {
    //             $("#input-box").val(" "); 
    //             for (let i = 0; i < 10; i++)             $('#container').append(`
    //                 <h3> ${results[i].name} </h3>
    //                 <img src="${results[i].thumbnail_url}" width=350px, height= 200px>
    //         `)
    //             } 
    //             for (let y = 0; y < results.length; y++) {
    //          let recipeIn = results[y].instructions[y].display_text
    //             }

    
    // $(() => {  
    //     $("#submit").on("click", (event) => {
    //         const value = $("#input-box").val();
    //         titleQuery = value;
    //         getRecipe()
    //         })
    //     })