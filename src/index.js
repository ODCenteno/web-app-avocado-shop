const app = document.querySelector('#app');
const baseURL = 'https://platzi-avo.vercel.app';
const apiURL = '/api/avo';

// Internationalization API
const formatPrice = (price) => {
    const formatedPrice = new window.Intl.NumberFormat('en-En', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return formatedPrice;
}


// Web API
window.fetch(`${baseURL}${apiURL}`)
    .then(response => response.json())
    .then(responseJson => {
        const responseItems = [];
        responseJson.data.forEach( item => {

            // Create Item Title
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = "text-lg text-lime-500";

            // Create Item Image
            const image = document.createElement('img');
            image.src = `${baseURL}${item.image}`;
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

            // Create Item Price
            const price = document.createElement('div');
            price.textContent = formatPrice(item.price);
            price.className = "text-gray-500";

            // Create a Container for Intem Details
            const itemCard = document.createElement('div');
            itemCard.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";

            const itemDetails = document.createElement('div');
            itemDetails.append(title, price)

            itemCard.append(image, itemDetails);
            responseItems.push(itemCard);
        })

        console.log(responseItems);
        app.append(...responseItems);
    })
