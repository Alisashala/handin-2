
//Exercise one: Fetch the database:
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movieData => {
        console.log(movieData);
        //exerciseTwo(movieData);
        //exerciseThree(movieData);
        exerciseFour(movieData);
        exerciseFive(movieData);

    });

//Exercise two: render string
function exerciseTwo(movieData) {
    const h1 = document.createElement('h1')
    h1.innerHTML = movieData.length + ' movies fetched'
    document.body.appendChild(h1);
}

//Exercise three: render first movie in array
function exerciseThree(movieData) {
    console.log(movieData[0])
    const span = document.createElement('span')
    span.innerHTML = JSON.stringify(movieData[0])
    document.body.appendChild(span);
}

//Exercise four:Render movies in ul and li
function exerciseFour(movieData) {

    for (let i = 0; i < movieData.length; i++){

        let movieTitle = document.createElement("ul");
        let movieYear = document.createElement("li");
        let movieRating = document.createElement("li");
        let movieVotes = document.createElement("li");
        let movieRunningTimes = document.createElement("li");

        movieTitle.innerHTML = movieData[i].title;
        movieYear.innerHTML = movieData[i].year;
        movieRating.innerHTML = movieData[i].rating;
        movieVotes.innerHTML = movieData[i].votes;
        movieRunningTimes.innerHTML = movieData[i].running_times;


        document.body.appendChild(movieTitle);
        document.body.appendChild(movieYear);
        document.body.appendChild(movieRating);
        document.body.appendChild(movieVotes);
        document.body.appendChild(movieRunningTimes);

    }
}

function exerciseFive(movieData) {

    const movieBtn = document.querySelector("button")
    movieBtn.addEventListener("click", function ()  {

        for (let i = 0; i < movieData.length; i++) {

            }
})}





