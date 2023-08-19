import menuImg1 from './assets/sausage-fried-rice-with-tomatoes-carrots-shiitake-mushrooms-plate.jpg'
import menuImg2 from './assets/fried-rice-with-minced-pork-tomato-carrot-cucumber-plate.jpg'
import menuImg3 from './assets/fried-pork-with-dried-chili-salt-dark-background.jpg'
import menuImg4 from './assets/flat-lay-indian-food-assortment.jpg'
import menuImg5 from './assets/gourmet-lifestyle-cocina-yummy-foodie.jpg'
import menuImg6 from './assets/high-angle-traditional-asian-meal-with-chopsticks.jpg'
import menuImg7 from './assets/lifestyle-food-gourmet-comida-gastronomy.jpg'
import menuImg8 from './assets/spicy-salad-with-fried-chicken.jpg'
import menuImg9 from './assets/stir-fried-crab-with-curry-powder-beautiful-side-dishes.jpg'
import menuImg10 from './assets/ice-cream.jpg'
import menuImg11 from './assets/ice-cream-with-strawberries-chocolate-white-plate.jpg'


const menu = document.createElement('div');


const menuTab = (() =>{
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');
    menu.appendChild(menuSection);

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Top Menu';
    menuSection.appendChild(h1);

    const para = document.createElement('p');
    para.textContent = 'From appetizers to desserts, our menu is designed to tantalize your taste buds and leave you craving for more.';
    menuSection.appendChild(para);

    const button = document.createElement('button');
    button.textContent = 'View More';
    menuSection.appendChild(button);

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('food-menu');
    menuSection.appendChild(foodMenu);

    const  menuItems = [
        {
            src: menuImg1,
            h1: 'Sausage Fried Rice',
            p: '$25.99'
        },
        {
            src: menuImg2,
            h1: 'Fried Rice With Minced Pork',
            p: '$48.99'
        },
        {
            src: menuImg3,
            h1: 'Fried Pork With Chilli',
            p: '$19.99'
        },
        {
            src: menuImg4,
            h1: 'Indian Family Meal',
            p: '$16.99'
        },
        {
            src: menuImg5,
            h1: 'Gourment Meal',
            p: '$29.99'
        },
        {
            src: menuImg6,
            h1: 'Asian Meal',
            p: '$50.99'
        },
        {
            src: menuImg7,
            h1: 'Food Gourment',
            p: '$35.99'
        },
        {
            src: menuImg8,
            h1: 'Spicy Salad With Fried Chicken',
            p: '$22.99'
        },
        {
            src: menuImg9,
            h1: 'Stirfry Crab With Curry Power',
            p: '$32.99'
        },
        {
            src: menuImg10,
            h1: 'Ice-Cream Sundae',
            p: '$15.99'
        },
        {
            src: menuImg11,
            h1: 'Ice-Cream With Strawberries',
            p: '$17.99'
        },
    ]

    menuItems.forEach(obj =>{
        const foodMenuList = document.createElement('div');
        foodMenuList.classList.add('food-menu-list');
        foodMenu.appendChild(foodMenuList);
        
        const img = new Image();
        img.src = obj.src;
        foodMenuList.appendChild(img);

        const h1 = document.createElement('h1');
        h1.textContent = obj.h1;
        foodMenuList.appendChild(h1);
    
        const para = document.createElement('p');
        para.textContent = obj.p;
        foodMenuList.appendChild(para);
    })
})()

export default menu;