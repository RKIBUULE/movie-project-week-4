// async function main() {
//     const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c8ac708d")
//     const moviesData = await movies.json()
//     console.log(
//      moviesData. map((movie) => `
//       <div class="movies">
//         <figure>
//             <img src="./assets/black panther.jpg" alt="">
//         </figure>
//       <div class="movie__title" >
//         <h2>
//             Black Panther
//         </h2>
//      </div>
//         <p><b>Year:</b>2009</p>
//         <p><b>Released</b>sfsfwfwefwe</p>
//         <p><b>Runtime</b>sfsfwfwefwe</p>
//     </div>`)
//     )  
//   }
//   main()


function main(){
    const moviesWrapper =  document.querySelector(`.movies`)

    const movies = getMovies()
  
   const moviesHtml = movies.map(
    (movie) =>{
    return ` <div class="movie">
    <figure>
        <img src="${movie.url}" alt="">
    </figure>
    <div class="movie__title" >
        <h2>
            ${movie.title}
        </h2>
    </div>
    <p><b>Year: </b>${movie.year}</p>
    <p><b>Released: </b>${movie.Released}</p>
    <p><b>Runtime: </b>${movie.Runtime}</p>
</div>`
   })
   .join("")
    moviesWrapper.innerHTML = moviesHtml
  console.log(moviesHtml)
} 

setTimeout(() => {
    main()
})


function getMovies(){
    return[
        {
            id: 1,
            title:"Guardians of the Galaxy Vol. 2",
            url:"assets/guardian of the galaxy.jpg",
            year:2020,
            Released:"05 May 2017",
            Runtime: "136 min"
        },
        {
            id: 1,
            title:"Black panther",
            url:"assets/black panther.jpg",
            year:2020,
            Released:"05 May 2017",
            Runtime: "136 min"
        }
    ]
}