function generatePage() {

    data.playlists.items.forEach(element => {
        //console.log(element)
        const featuredTemplate = document.getElementById('featured-template')
        const container = document.querySelector('.featured-list');
        const clone = featuredTemplate.content.cloneNode(true)

        //clones 

        clone.querySelector('.featured-list__img').src = element.images[0].url



        container.appendChild(clone)
        return
    });
}
apiLink('https://api.spotify.com/v1/browse/featured-playlists')