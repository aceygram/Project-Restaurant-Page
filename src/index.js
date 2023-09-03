import img_1 from './assets/logo.png';
import home from './home';
import menu from './menu';
import contact from './contact';


const content = document.getElementById('content');

const head = (() => {
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    window.addEventListener('scroll', function() {
        const yOffset = window.scrollY;
      
        if (yOffset > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

    const logo = document.createElement('div');
    logo.classList.add('logo');
    header.appendChild(logo);

    const logoImg = new Image();
    logoImg.src = img_1;
    logo.appendChild(logoImg);

    // Create tab button container dynamically
    var tabButtonContainer = document.createElement('ul');
    tabButtonContainer.id = 'tabButtonContainer';
    tabButtonContainer.className = 'tab';
    header.appendChild(tabButtonContainer);
    
    // Create tab button container dynamically
    var menuList = document.createElement('li');
    menuList.className = 'hamburger-menu';
    tabButtonContainer.appendChild(menuList);

    // Create tab buttons dynamically
    var tabButtons = [
        { id: 'tab1', label: 'Home' },
        { id: 'tab2', label: 'Menu' },
        { id: 'tab3', label: 'Contact' }
    ];

    tabButtons.forEach(function(tab) {
        var tabButton = document.createElement('div');
        tabButton.className = 'menu-list';
        tabButton.setAttribute('data-tab', tab.id);
        tabButton.textContent = tab.label;
        menuList.appendChild(tabButton);
    });

    // Create tab contents dynamically
    var tabContents = [
        { id: 'tab1', contents: home, active: true },
        { id: 'tab2', contents: menu },
        { id: 'tab3', contents: contact }
    ];

    let tabContainer = document.createElement('div');
    tabContainer.id = 'tabContainer';
    tabContainer.className = 'tabContainer';
    content.appendChild(tabContainer);

    tabContents.forEach(function(tab) {
        var tabContent = document.createElement('div');
        tabContent.id = tab.id;
        tabContent.className = 'tabcontent';
        tabContent.appendChild(tab.contents);
        tabContainer.appendChild(tabContent);
      });

    //creating the svg in the header
    const cart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cart.setAttribute("width", "24");
    cart.setAttribute("height", "24");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z");

    cart.appendChild(path)
    tabButtonContainer.appendChild(cart);

    const hamburger = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    hamburger.setAttribute("id", "hamburger");
    hamburger.setAttribute("width", "24");
    hamburger.setAttribute("height", "24");

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z");

    hamburger.appendChild(path2)
    tabButtonContainer.appendChild(hamburger); 

    // nav1.setAttribute('id', 'selected');
    // content.appendChild(home);

 // Handle tab click event
    var tabLinks = document.querySelectorAll('.menu-list');
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');

            // Hide all tab content
            var tabContents = document.querySelectorAll('.tabcontent');
            tabContents.forEach(function(tab) {
                tab.style.display = 'none';
            });

            // Remove active class from all tab links
            tabLinks.forEach(function(tabLink) {
                tabLink.classList.remove('active') 
            });

            // Show the selected tab content and mark the button as active
            document.getElementById(tabName).style.display = 'block';
            this.classList.add('active');

            menuList.classList.toggle('hamburger-show');
        });
    });

    hamburger.addEventListener('click', () => {
        menuList.classList.toggle('hamburger-show');
    })

    tabLinks[0].click();
})();