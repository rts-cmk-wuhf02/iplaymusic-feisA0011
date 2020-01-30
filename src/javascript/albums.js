(async function () {
    const data = await apiLink('https://api.spotify.com/v1/search?q=a&type=album');
    console.log(data)

    data.albums.items.forEach(element => {
        //console.log(element)
        //Image list vars
        const albumsTemplate = document.getElementById('albumTemplate')
        const container = document.querySelector('.img-list')
        const cloneImg = albumsTemplate.content.cloneNode(true)

        //Song list vars

        const songListTemplate = document.getElementById('songListTemplate')
        const songContainer = document.querySelector('.song-list')
        //console.log(songContainer)
        const cloneSong = songListTemplate.content.cloneNode(true)

        // Clone images
        cloneImg.querySelector('.img-list__link').href = `/albumDetails?id=${element.id}`
        cloneImg.querySelector('.img-list__img').src = element.images[1].url

        //Clone Songs

        cloneSong.querySelector('.song-list__img').src = element.images[2].url
        cloneSong.querySelector('.song-list__song-name').innerText = element.name
        cloneSong.querySelector('.song-list__song-name').href = `/albumDetails?id=${element.id}`
        cloneSong.querySelector('.song-list__song-artist').innerText = element.artists[0].name
        cloneSong.querySelector('.song-list__song-artist').href = `/albumDetails?id=${element.id}`
        cloneSong.querySelector('.song-list__songs').innerText = element.total_tracks + ' songs'
        cloneSong.querySelector('.song-list__songs').href = `/albumDetails?id=${element.id}`

        container.appendChild(cloneImg)
        songContainer.appendChild(cloneSong)

        return
    });
})()