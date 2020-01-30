(async function () {
    const playerId = param.get('id');
    const track = await apiLink(`https://api.spotify.com/v1/tracks/${playerId}`)
    console.log(track)
    const AvatarImg = document.querySelector('.avatar-img');
    console.log(AvatarImg)
    const trackBgImg = document.querySelector('.player-page');
    const trackName = document.querySelector('.player__song-name');
    const trackArtist = document.querySelector('.player__artist-name');

    console.log(trackBgImg)

    AvatarImg.src = track.album.images[1].url
    trackBgImg.style.backgroundImage = `url(${track.album.images[0].url})`;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artists[0].name

})()