(async function () {
    const albumId = param.get('id');
    const album = await apiLink(`https://api.spotify.com/v1/albums/${albumId}`)
    const artist = await apiLink(`https://api.spotify.com/v1/artists/${album.artists[0].id}`)
    console.log(artist.genres)

    // Elements vars
    const showcaseImg = document.querySelector('.albumDetails-showcase__img');
    const albumName = document.querySelector('.albumDetails__heading');
    const numOfTrack = document.querySelector('.albumDetails__numOfTracks');
    const firstHashtag = document.querySelector('.first-hashtag');
    const secondHashtag = document.querySelector('.second-hashtag');

    // Showcase header

    showcaseImg.src = album.images[0].url;
    albumName.textContent = album.name
    numOfTrack.textContent = album.total_tracks + ' Songs'
    //if()

    firstHashtag.textContent = artist.genres[0]



    secondHashtag.textContent = artist.genres[1]



    // Tracks 
    function msToMinsAndSecs(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }


    album.tracks.items.forEach(element => {
        console.log(element)
        const albumDetailTemp = document.getElementById('albumDetailTemplate')
        const container = document.querySelector('.track-list');
        const clone = albumDetailTemp.content.cloneNode(true)

        clone.querySelector('.track-list__track-name').textContent = element.name

        clone.querySelector('.track-list__track-name').href = `/player?id=${element.id}`

        clone.querySelector('.track-list__track-artist').textContent = element.artists[0].name
        clone.querySelector('.track-list__length').textContent = msToMinsAndSecs(element.duration_ms)

        container.appendChild(clone)
    });





})()