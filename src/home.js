import meal from './assets/hero-page.png';
import img_1 from './assets/logo.png';

const home = document.createElement('div');

const hero = (() => {
    const heroSection = document.createElement('div')
    heroSection.classList.add('hero-section');
    home.appendChild(heroSection);

    const heroCaption = document.createElement('div')
    heroCaption.classList.add('hero-caption');
    heroSection.appendChild(heroCaption);

    const heroTitle = document.createElement('div')
    heroTitle.classList.add('hero-title');
    heroCaption.appendChild(heroTitle);

    
    let caption = ['<span>Welcome</span> to', 'The Kitchen of', 'Tasty & Fresh Meal.'];

    caption.forEach(item  => {
        let div = document.createElement('div');
        div.innerHTML = item;

        heroTitle.appendChild(div);
    })

    const heroPara = document.createElement('div');
    heroPara.classList.add('hero-para');
    heroPara.textContent = ' Keep it easy with these simple but delicious recipes from one of the best cooks in town. Check us out today.';
    heroCaption.appendChild(heroPara);

    const search = document.createElement('div');
    search.classList.add('search');
    heroCaption.appendChild(search);

    let input = document.createElement("input");
    input.type = "Text";
    input.placeholder = "Search Meal";

    let button = document.createElement("button");
    button.textContent = 'Search';

    search.appendChild(input);
    search.appendChild(button);


    const heroImg = document.createElement('div');
    heroImg.classList.add('hero-img');
    heroSection.appendChild(heroImg);

    const img = new Image();
    img.src = meal;
    heroImg.appendChild(img);
})();

const about = (() => {
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');
    home.appendChild(aboutSection);

    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');
    aboutSection.appendChild(aboutUs);

    const aboutUsHeader = document.createElement('h1');
    aboutUsHeader.textContent = 'About Chilli Kitchen';
    aboutUs.appendChild(aboutUsHeader);

    const para = [
        'Chilli Kitchen is a popular restaurant that has gained a reputation for its delectable and diverse menu, offering a fusion of African and international cuisines. The restaurant specializes in serving a variety of mouthwatering dishes, including Jollof rice, fried rice, chili dishes, and other exotic meals.', 
        'The history of Chilli Kitchen dates back to the early 2000s when it was founded by a group of passionate food enthusiasts. The founders, who hailed from various African countries, shared a common love for their traditional dishes and a desire to introduce them to a wider audience.',
        "The restaurant initially started as a small, humble establishment, serving traditional African dishes to a local clientele. However, as word spread about the restaurant's unique flavors and authentic cooking methods, its popularity began to soar."
    ]

    para.forEach(item => {
        let p = document.createElement('p');

        p.textContent = item;

        aboutUs.appendChild(p);
    });

    const img = new Image();
    img.src = img_1;
    aboutUs.appendChild(img);
})();

const info = (() =>{
    const infoSection = document.createElement('div');
    infoSection.classList.add('info-section');
    home.appendChild(infoSection);

    //Opening Hours
    const hours = document.createElement('div');
    hours.classList.add('hours');
    infoSection.appendChild(hours);

    let infoHeader1 = document.createElement('div');
    infoHeader1.classList.add('info-header');
    hours.appendChild(infoHeader1);
    
    //creating the svg in the info-header
    const opening = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    opening.setAttribute("width", "35");
    opening.setAttribute("height", "24");

    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z");

    opening.appendChild(path1)
    infoHeader1.appendChild(opening);

    const h1 = document.createElement('h1');
    h1.textContent = 'Opening Hours';
    infoHeader1.appendChild(h1);

    let  openingPara = [
        'Sunday: 8am - 8pm',
        'Monday: 6am - 6pm',
        'Tuesday: 6am - 6pm',
        'Wednesday: 6am - 6pm',
        'Thursday: 6am - 10pm',
        'Friday: 6am - 10pm',
        'Saturday: 8am - 10pm'
    ]

    openingPara.forEach(item =>{
        const para = document.createElement('p');

        para.textContent = item;

        hours.appendChild(para);
    })


    //Location
    const location = document.createElement('div');
    location.classList.add('location');
    infoSection.appendChild(location);

    let infoHeader2 = document.createElement('div');
    infoHeader2.classList.add('info-header');
    location.appendChild(infoHeader2);
    
    //creating the svg
    const locationSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    locationSvg.setAttribute("width", "35");
    locationSvg.setAttribute("height", "24");

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z");

    locationSvg.appendChild(path2)
    infoHeader2.appendChild(locationSvg);

    let h2 = document.createElement('h1');
    h2.textContent = 'Location';
    infoHeader2.appendChild(h2);

    let  locationPara = [
        '4760 Hershell Hollow Road',
        'Oklahoma City, OK 73129'
    ];

    locationPara.forEach(item =>{
        const para = document.createElement('p');

        para.textContent = item;

        location.appendChild(para);
    })


    //contact
    const contact = document.createElement('div');
    contact.classList.add('contact');
    infoSection.appendChild(contact);

    let infoHeader3 = document.createElement('div');
    infoHeader3.classList.add('info-header');
    contact.appendChild(infoHeader3);
    
    //creating the svg
    const contactSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    contactSvg.setAttribute("width", "35");
    contactSvg.setAttribute("height", "24");

    let path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z");

    contactSvg.appendChild(path3)
    infoHeader3.appendChild(contactSvg);

    let h3 = document.createElement('h1');
    h3.textContent = 'Contact Us';
    infoHeader3.appendChild(h3);

    const search = document.createElement('div');
    search.classList.add('search');
    contact.appendChild(search);

    let input = document.createElement("input");
    input.type = "email";
    input.placeholder = "Email";

    let button = document.createElement("button");
    button.textContent = 'Send';

    search.appendChild(input);
    search.appendChild(button);

    let  contactPara = [
        '+1-580-749-7736',
        '+1-952-975-0270'
    ];

    contactPara.forEach(item =>{
        const para = document.createElement('p');

        para.textContent = item;

        contact.appendChild(para);
    })
})();


export default home
