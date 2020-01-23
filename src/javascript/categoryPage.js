/*async function apiLink(url) {
    accessToken = await getToken();
    data = await pageData(url);

    categoryPage()

}*/


let bgContainer = ['#D70060', '#E54028', '#F18D05', '#F2BC06', '#5EB11C', '#3A7634', '#0ABEBE', '#00A1CB', '#115793']
let totalColors = bgContainer.length;

function generatePage() {
    //console.log(data.categories.items)
    data.categories.items.forEach((element, id) => {

        console.log(id)

        const categoryTemplate = document.getElementById('category-template')
        const container = document.querySelector('.category-list');
        const clone = categoryTemplate.content.cloneNode(true)

        //clones 
        clone.querySelector('.genre-heading').innerText = element.id




        clone.querySelector('.genre-container').style.backgroundColor = bgContainer[id % bgContainer.length];
        container.appendChild(clone)
        return
    });

}

apiLink('https://api.spotify.com/v1/browse/categories')