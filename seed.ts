import { faker } from '@faker-js/faker';
import db from './src/db/index';
import { category } from './src/db/schema';
import { product } from './src/db/schema';

const categories = [
    { name: 'clothing' },
    { name: 'shoes' },
    { name: 'sports' },
    { name: 'cycling' },
    { name: 'toys' },
];

const products = new Array(20).fill('').map(() => ({
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: +faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: 'item' }),
    categoryId: faker.number.int({ min: 1, max: 5 }),
}));

(async function () {
    try {
        // await db.insert(category).values(categories);
        await db.insert(product).values(products);
        process.exit(0);
    } catch (error) {
        console.log('seeding failed');
        console.log(error);
        process.exit(1);
    }
})();
