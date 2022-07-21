async function main() {
    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c8ac708d")
    const moviesData = await movies.json()
    console.log(
     moviesData.map(movie => `<div class ="selection__container">
      <div class="row">
          <h3>Movie</h3>
          <img src="" alt="">
          <p><b>Title:</b>200jsdfjsffs</p>
          <p><b>Year:</b>2009</p>
          <p><b>Rated</b>sfsfwfwefwe</p>
          <p><b>Released</b>sfsfwfwefwe</p>
          <p><b>Runtime</b>sfsfwfwefwe</p>
      </div>
    </div>`)
    )  
  }
  main()