///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const sumPrice = (accumulator, item) => accumulator + item.price;

const totalPrice = cart.reduce(sumPrice, 0);

console.log(totalPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax){
    const taxAmount = cartTotal * tax;
    const finalPrice = cartTotal + taxAmount - couponValue;
    return finalPrice;
}

const cartTotal = totalPrice;
const tax = 0.06;
const couponValue = 0.0;

const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);

console.log(finalPrice)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   properties for customer object
   1. Name to idenentify and communicate with customer will be a string because itll be made up of letters and can have spaces
   2. ID/rewards number to help pinpoint specift customer and reward custoemrs with extra savings. ID will be an intger since it will be made up of numbers
   3. Phone number incase customer needs to be contacted with order information. It will be a phone number that way it can store special characters if needed
   4. Email to email coupons or upcoming sales. It will be a string so it can include letters, numbers and special characters
   5. address for delivery. It will be a string so it can include letters, numbers and special characters

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Nik',
    id: 123123,
    phone: '900-888-8888',
    email: `Niknik@nik.com`,
    address: "123 dev way",
}

console.log(customer);