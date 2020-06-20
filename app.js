const recipesURL = "https://api.spoonacular.com/recipes/findByIngredients";
const apiKey = "?apiKey=9d03d0ace13f40a994d4da7726fc8c77";
const queryType = "ingredients=";
let titleQuery = " ";
//const number = 20;
//const instructionsRequired = true;
//let recipes = ()
const queryURL = recipesURL + apiKey + "&" + queryType;
let getRecipe = () => {
    let recipes = $.ajax({
        type: 'GET',
        async: false,
        url: queryURL + titleQuery
    })  .then((recipes) => {
        console.log("These are recipes")
        console.log(recipes)
        if (recipes.length > 0) {
            recipes.push(recipes);
            $("#input-box").val(" "); 
            for (let i = 0; i < recipes.length; i++) {
                $('.container').html(`
                <h3> ${recipes[0].title} </h3>
                <img src="${recipes[0].image}">
                `)

                $('.container2').html(`
                <h3> ${recipes[1].title} </h3>
                <img src="${recipes[1].image}">
                `)

                $('.container3').html(`
                <h3> ${recipes[2].title} </h3>
                <img src="${recipes[2].image}">
                `)

                $('.container4').html(`
                <h3> ${recipes[3].title} </h3>
                <img src="${recipes[3].image}">
                `)

                $('.container5').html(`
                <h3> ${recipes[4].title} </h3>
                <img src="${recipes[4].image}">
                `)
                
            //getRecipe()
            } return recipes.responseJSON
        } 
       });
       console.log(recipes)
    //console.log(recipes.responseJSON)
    // let recipes = $.ajax({ 
    //     url: queryURL + titleQuery
}

$(() => {  
$("#submit").on("click", (event) => {
    const value = $("#input-box").val();
    titleQuery = value;
    getRecipe()
    })
})



// const queryURL = recipesURL + apiKey + "&" + queryType;
// let getRecipe = () => {
//    let recipes = $.ajax({
//     type: 'GET',
//     async: false,
//     url: queryURL + titleQuery
//     })  .then((recipes) => {
//         if (recipes.length > 0) {
//       recipes.push(recipes);
//  $("#input-box").val(" "); 
//             for (let i = 0; i < recipes.length; i++) {
// $('.container').html(`
                // <h3> ${r} </h3>
                // <h4> ${} </h4>
                // <h4> ${} </h4>
                // `)
            // getRecipe()
            // }