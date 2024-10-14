// RISPOST 1.

function concatenateAndConvert(stringha1, stringha2) {
    let result = (stringha1.slice(0, 2) + stringha2.slice(-3)).toUpperCase();
    console.log(result);
  }
  concatenateAndConvert("hello", "world");
  
// RISPOST 2.

function generateRandomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(Math.floor(Math.random() * 101));
    }
    return arr;
  }
  console.log(generateRandomArray());
  
// RISPOST 3.

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
  
// RISPOST 4.

function sumArray(arr) {
    let sum = 0;
    arr.forEach(num => sum += num);
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
  
// RISPOST 5.

function sumArrayReduce(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  console.log(sumArrayReduce([1, 2, 3, 4, 5]));
  
// RISPOST 6.

function incrementArray(arr, n) {
    return arr.map(num => num + n);
  }
  console.log(incrementArray([1, 2, 3], 5));
  
// RISPOST 7.

function getStringLengths(arr) {
    return arr.map(str => str.length);
  }
  console.log(getStringLengths(["EPICODE", "is", "great"]));
  
// RISPOST 8.

function getOddNumbers() {
    let arr = [];
    for (let i = 1; i < 100; i += 2) {
      arr.push(i);
    }
    return arr;
  }
  console.log(getOddNumbers());
  
// RISPOST 9.

function findOldestMovie(movies) {
    let oldest = movies[0];
    movies.forEach(movie => {
      if (parseInt(movie.Year) < parseInt(oldest.Year)) {
        oldest = movie;
      }
    });
    return oldest;
  }
  console.log(findOldestMovie(movies));
  
// RISPOST 10.

function countMovies(movies) {
    return movies.length;
  }
  console.log(countMovies(movies));

// RISPOST 11.

function getMovieTitles(movies) {
    return movies.map(movie => movie.Title);
  }
  console.log(getMovieTitles(movies));
  
// RISPOST 12.

function getMoviesFromCurrentMillennium(movies) {
    return movies.filter(movie => parseInt(movie.Year) >= 2000);
  }
  console.log(getMoviesFromCurrentMillennium(movies));
  
// RISPOST 13.

function sumMovieYears(movies) {
    return movies.reduce((acc, movie) => acc + parseInt(movie.Year), 0);
  }
  console.log(sumMovieYears(movies));
  
// RISPOST 14.

function findMovieById(movies, imdbID) {
    return movies.find(movie => movie.imdbID === imdbID);
  }
  console.log(findMovieById(movies, 'tt0120737'));
  
// RISPOST 15.

function findFirstMovieByYear(movies, year) {
    return movies.findIndex(movie => parseInt(movie.Year) === year);
  }
  console.log(findFirstMovieByYear(movies, 2012));