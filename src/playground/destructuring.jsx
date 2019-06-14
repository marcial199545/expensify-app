//NOTE Object destructuring
const book = {
    title: "ego is the enemy",
    author: "Ryan Holliday",
    publisher: {
        name: "penguin"
    }
};
const { name: publisherName = "self-published" } = book.publisher;
console.log(publisherName);

//NOTE Array destructuring

const address = [];

const [location, city, state = "jalisco", zipCode] = address;

console.log(`you are in ${state} `);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [description, , mediumSize] = item;

console.log(` a medium size ${description} costs ${mediumSize}`);
