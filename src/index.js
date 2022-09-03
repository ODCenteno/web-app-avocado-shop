const app = document.querySelector('#app');
const baseURL = 'https://platzi-avo.vercel.app';
const apiURL = '/api/avo';

// Web API
window.fetch(`${baseURL}${apiURL}`)
    .then(response => response.json())
    .then(responseJson => {
        const responseItems = [];
        responseJson.data.forEach( item => {
            const title = document.createElement('h2');
            title.textContent = item.name;
            const image = document.createElement('img');
            image.src = `${baseURL}${item.image}`;
            const price = document.createElement('p')
            price.textContent = item.price;
            const container = document.createElement('div');

            container.append(title, image, price);

            responseItems.push(container);
        })

        console.log(responseItems);
        app.append(...responseItems);
    })
