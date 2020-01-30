let bgContainer = ['#D70060', '#E54028', '#F18D05', '#F2BC06', '#5EB11C', '#3A7634', '#0ABEBE', '#00A1CB', '#115793']
let totalColors = bgContainer.length;

(async function () {
    const data = await apiLink('https://api.spotify.com/v1/browse/categories?country=US');
    //console.log(data)
    //const playlistId = data.categories.items[0].id;
    //console.log(playlistId)

    // const subCat = await apiLink(`https://api.spotify.com/v1/browse/categories/${playlistId}/playlists`);

    //console.log(subCat.playlists.items)

    data.categories.items.forEach((element, id) => {
        const categoryTemplate = document.getElementById('category-template')
        const container = document.querySelector('.category-list');
        const clone = categoryTemplate.content.cloneNode(true)

        //clones 
        clone.querySelector('.genre-heading').innerText = element.name
        clone.querySelector('.category-list__item').setAttribute('data-id', element.id)
        clone.querySelector('.genre-container').style.backgroundColor = bgContainer[id % bgContainer.length];


        container.appendChild(clone)
    });
    const subCat = document.querySelectorAll('.subCat-list');

    for (let i = 0; i < subCat.length; i++) {
        const playlist = await apiLink(`https://api.spotify.com/v1/browse/categories/${subCat[i].parentNode.getAttribute('data-id')}/playlists`);

        if (!playlist.error) {

            playlist.playlists.items.forEach(item => {
                const clone = document.getElementById('sub-category-template').content.cloneNode(true);
                clone.querySelector('p').textContent = item.name;
                clone.querySelector('a').href = "/playlist?id=" + item.id;
                subCat[i].append(clone);
            })
        }
    }

    // ******* Drop Down Categories ******

    const dropDowns = document.querySelectorAll(".category-list__item")
    //console.log(dropDowns)
    for (let i = 0; i < dropDowns.length; i++) {
        dropDowns[i].addEventListener('click', () => {
            console.log('test')

            if (dropDowns[i].querySelector(".subCat-list").style.display == "block") {
                dropDowns[i].querySelector(".subCat-list").style.display = "none"
                console.log("hide")
            } else {
                dropDowns[i].querySelector(".subCat-list").style.display = "block"
                console.log("show")
            }

        })
    }
})()