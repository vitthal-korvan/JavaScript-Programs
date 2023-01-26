const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning of the shopping cart if it's not already added
if (shoppingCart.indexOf('Meat') === -1) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' to the end of the shopping cart if it's not already added
if (shoppingCart.indexOf('Sugar') === -1) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey'
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart)
