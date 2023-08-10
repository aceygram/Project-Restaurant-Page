import img_1 from './assets/logo.png';
import home from './home';

const content = document.querySelector('#content');


const head = (() => {
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    header.appendChild(logo);

    const logoImg = new Image();
    logoImg.src = img_1;
    logo.appendChild(logoImg);

    //creating the menu
    const menu = document.createElement('ul');
    menu.classList.add('menu');
    header.appendChild(menu);

    const menuList = ['Home', 'About', 'Contact'];

    // creating the menu items
    menuList.forEach(list => {
        const li = document.createElement('li');
        li.textContent = list;
        li.classList.add('menu-list');

        menu.appendChild(li);
    })

    //creating the svg in the header
    const cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cart.setAttribute("width", "24");
    cart.setAttribute("height", "24");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z");

    cart.appendChild(path)
    menu.appendChild(cart);
})();

// content.appendChild(home);