const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchMusic);
document.getElementById("searchInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        searchMusic();
    }

});

async function searchMusic() {

    const searchInput = document.getElementById("searchInput").value.trim();

    if(searchInput === ""){
        alert("Please enter a song name");
        return;
    }

    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "<h2>Loading...</h2>";

    try{

        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(searchInput)}&entity=song&limit=9`
        );

        const data = await response.json();

        resultsDiv.innerHTML = "";

        if(data.results.length === 0){
            resultsDiv.innerHTML = "<h2>No songs found.</h2>";
            return;
        }

        data.results.forEach(song => {

            const preview = song.previewUrl
            ? `<audio controls>
                    <source src="${song.previewUrl}" type="audio/mpeg">
               </audio>`
            : `<p>No Preview Available</p>`;

            resultsDiv.innerHTML += `
                <div class="card">
                    <img src="${song.artworkUrl100}" alt="Album Art">

                    <h3>${song.trackName}</h3>

                    <p><strong>Artist:</strong> ${song.artistName}</p>

                    <p><strong>Album:</strong> ${song.collectionName}</p>
                    <p><b>Release :</b> ${new Date(song.releaseDate).toLocaleDateString()}</p>

                    ${preview}
                </div>
            `;
        });
       

    }catch(error){

        resultsDiv.innerHTML =
        "<h2>Error fetching data. Please try again.</h2>";

        console.error(error);
    }
}

document.addEventListener("play", function(event) {

    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        if (audio !== event.target) {
            audio.pause();
            audio.currentTime = 0; // Optional: reset song to beginning
        }
    });

}, true);