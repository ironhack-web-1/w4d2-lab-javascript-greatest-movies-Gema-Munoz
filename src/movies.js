// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(function(movie){
        return movie.director
    })

    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if ( moviesArray.length === 0 )
   return 0

    
   let moviesWithScore = moviesArray.filter ( movie => "score" in movie )
    let sum = moviesWithScore.reduce( (sumMovies, movie ) => sumMovies + movie.score, 0) 
    let average = sum / moviesArray.length 
    return Number(average.toFixed(2))
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let moviesWithScore = moviesArray.filter ( movie => movie.genre.includes("Drama"))
      if ( moviesWithScore.length === 0)
        return 0
    let sum = moviesWithScore.reduce ( ( sumMovies, movie ) => sumMovies + movie.score, 0 )
    let average = sum / moviesWithScore.length
    return Number(average.toFixed(2))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArray = moviesArray.slice()
    newArray.sort(function(movie1, movie2){
        let result = movie1.year - movie2.year
        if (result === 0){
            result = movie1.title.localeCompare(movie2.title)
        }
        return result
    }) 
    
    return newArray
}

    
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let newArray = moviesArray.slice()
    newArray.sort(function(movie1, movie2){
        return movie1.title.localeCompare(movie2.title)
    })

    let titles = newArray.map(movie => movie.title)
    let top20titles = titles.slice(0, 20)
        return top20titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
