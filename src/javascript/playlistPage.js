(async function () {
    const playlistId = param.get('id');
    const playlist = await apiLink(`https://api.spotify.com/v1/playlists/${playlistId}`);
    //console.log(playlist.tracks.items[0])
    //*** playlist showcase ****/

    const genreHeading = document.querySelector('.playlist-genre')
    genreHeading.textContent = playlist.name;
    const imgSlide = document.querySelector('.slider-img__1');
    console.log(imgSlide)
    imgSlide.src = playlist.images[0].url

    function msToMinsAndSecs(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    playlist.tracks.items.forEach(element => {
        console.log(element)
        const playlistTemp = document.getElementById('playlistTemplate');
        const container = document.querySelector('.play-list')
        const clone = playlistTemp.content.cloneNode(true)


        clone.querySelector('.play-list__play-name').textContent = element.track.name;

        clone.querySelector('.play-list__play-name').href = `/player?id=${element.track.id}`;

        clone.querySelector('.play-list__play-artist').textContent = element.track.artists[0].name;
        clone.querySelector('.play-list__numOfPlays').textContent = msToMinsAndSecs(element.track.duration_ms)

        container.appendChild(clone)

    });



})()