import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: "Smartphone", price: 499.99, image: "https://picsum.photos/200?random=1" },
        { id: 2, name: "Laptop", price: 899.99, image: "https://picsum.photos/200?random=2" },
        { id: 3, name: "Wireless Headphones", price: 79.99, image: "https://picsum.photos/200?random=3" },
        { id: 4, name: "Smartwatch", price: 149.99, image: "https://picsum.photos/200?random=4" },
        { id: 5, name: "Bluetooth Speaker", price: 39.99, image: "https://picsum.photos/200?random=5" },
        { id: 6, name: "Tablet", price: 299.99, image: "https://picsum.photos/200?random=6" },
        { id: 7, name: "DSLR Camera", price: 1099.99, image: "https://picsum.photos/200?random=7" },
        { id: 8, name: "Gaming Mouse", price: 49.99, image: "https://picsum.photos/200?random=8" },
        { id: 9, name: "Mechanical Keyboard", price: 89.99, image: "https://picsum.photos/200?random=9" },
        { id: 10, name: "External Hard Drive", price: 64.99, image: "https://picsum.photos/200?random=10" },
        { id: 11, name: "LED Monitor", price: 189.99, image: "https://picsum.photos/200?random=11" },
        { id: 12, name: "Action Camera", price: 229.99, image: "https://picsum.photos/200?random=12" },
        { id: 13, name: "VR Headset", price: 349.99, image: "https://picsum.photos/200?random=13" },
        { id: 14, name: "USB-C Hub", price: 24.99, image: "https://picsum.photos/200?random=14" },
        { id: 15, name: "Smart Home Speaker", price: 59.99, image: "https://picsum.photos/200?random=15" },
        { id: 16, name: "Fitness Tracker", price: 69.99, image: "https://picsum.photos/200?random=16" },
        { id: 17, name: "Portable Charger", price: 29.99, image: "https://picsum.photos/200?random=17" },
        { id: 18, name: "Noise Cancelling Headphones", price: 199.99, image: "https://picsum.photos/200?random=18" },
        { id: 19, name: "Projector", price: 329.99, image: "https://picsum.photos/200?random=19" },
        { id: 20, name: "Webcam", price: 44.99, image: "https://picsum.photos/200?random=20" },
        { id: 21, name: "Microphone", price: 89.99, image: "https://picsum.photos/200?random=21" },
        { id: 22, name: "Router", price: 59.99, image: "https://picsum.photos/200?random=22" },
        { id: 23, name: "Graphics Tablet", price: 129.99, image: "https://picsum.photos/200?random=23" },
        { id: 24, name: "E-Reader", price: 119.99, image: "https://picsum.photos/200?random=24" },
        { id: 25, name: "Desk Lamp", price: 19.99, image: "https://picsum.photos/200?random=25" }
    ];

    if (req.query.search) {
        const filter_product = products.filter(product => product.name.includes(req.query.search))
        res.send(filter_product);
        return;
    }
    setTimeout(() => {
        res.send(products);
    }, 3000);

})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



// browser ma ap na is ko asa likhna hia 
// http://localhost:3000/api/products
// or agr kuch bhi search krna hai to products ka aga ?search=productname
// dal dana