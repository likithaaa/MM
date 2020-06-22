const recipesURL = "https://api.spoonacular.com/recipes/findByIngredients";
const apiKey = "?apiKey=9d03d0ace13f40a994d4da7726fc8c77";
const queryType = "ingredients=";
let titleQuery = " ";
const queryURL = recipesURL + apiKey + "&" + queryType;
let getRecipe = () => {
    let recipes = $.ajax({
        type: 'GET',
        async: true,
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
                <h4> ${recipes[0].missedIngredients[0].originalString} </h4>
                <h4> ${recipes[0].missedIngredients[1].originalString} </h4>
                <h4> ${recipes[0].missedIngredients[2].originalString} </h4>
                `)

                $('.container2').html(`
                <h3> ${recipes[1].title} </h3>
                <img src="${recipes[1].image}">
                <h4> ${recipes[1].missedIngredients[0].originalString} </h4>
                <h4> ${recipes[0].missedIngredients[1].originalString} </h4>
                <h4> ${recipes[0].missedIngredients[2].originalString} </h4>
                `)

                $('.container3').html(`
                <h3> ${recipes[2].title} </h3>
                <img src="${recipes[2].image}">
                <h4> ${recipes[2].missedIngredients[0].originalString} </h4>
                <h4> ${recipes[2].missedIngredients[1].originalString} </h4>
                <h4> ${recipes[2].missedIngredients[2].originalString} </h4>
                `)

                $('.container4').html(`
                <h3> ${recipes[3].title} </h3>
                <img src="${recipes[3].image}">
                <h4> ${recipes[3].missedIngredients[0].originalString} </h4>
                <h4> ${recipes[3].missedIngredients[1].originalString} </h4>
                <h4> ${recipes[3].missedIngredients[2].originalString} </h4>
                `)

                $('.container5').html(`
                <h3> ${recipes[4].title} </h3>
                <img src="${recipes[4].image}">
                <h4> ${recipes[4].missedIngredients[0].originalString} </h4>
                <h4> ${recipes[4].missedIngredients[1].originalString} </h4>
                <h4> ${recipes[4].missedIngredients[2].originalString} </h4> 
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
