const connectDB = require("./config/database");
connectDB();
const productModel = require("./models/product.model");
const {faker} = require("@faker-js/faker");

const seedPrdoucts = async () =>{
 
    try{
        await productModel.deleteMany({});
        console.log("Old products deleted");

        let products = [];

        for(let i=0; i< 1000 ; i++){
            products.push({
                title: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: parseFloat(faker.commerce.price()),
                category: faker.commerce.department(),
                image: faker.image.url(), // random image url
                stock: faker.number.int({ min: 1, max: 500 }),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }

        await productModel.insertMany(products);
        console.log("✅ 1000 fake products inserted!");
        process.exit(); // script band karne ke liye
    }
    catch(err){
        console.error("err" , err)
        process.exit(1);

    }
}

seedPrdoucts();