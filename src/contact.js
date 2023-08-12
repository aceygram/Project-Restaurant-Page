const contact = document.createElement('div');

const contactTab = (() =>{
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');
    contact.appendChild(contactSection);

    const formSection = document.createElement('div');
    formSection.classList.add('form-section');
    contactSection.appendChild(formSection);

    const layer = document.createElement('div');
    layer.classList.add('layer');
    formSection.appendChild(layer);

    const form = document.createElement('div');
    form.classList.add('form');
    layer.appendChild(form);

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    form.appendChild(h1);

    const formField = document.createElement('form');
    form.appendChild(formField);


    const label1 = document.createElement('label');
    label1.setAttribute('for', 'name');
    label1.textContent = 'Name:'
    formField.appendChild(label1)

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('placeholder', 'First & Last Name');
    formField.appendChild(input1);


    const label2 = document.createElement('label');
    label2.setAttribute('for', 'email');
    label2.textContent = 'Email:'
    formField.appendChild(label2)

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'email');
    input2.setAttribute('placeholder', 'example@example.com');
    formField.appendChild(input2);


    const label3 = document.createElement('label');
    label3.setAttribute('for', 'message');
    label3.textContent = 'Message:'
    formField.appendChild(label3)

    const textArea = document.createElement('textarea');
    textArea.setAttribute('rows', 4);
    formField.appendChild(textArea);

    const button = document.createElement('button');
    button.textContent = 'Submit';
    formField.appendChild(button);


    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96770.82505456054!2d-73.56528835307847!3d40.7160730040858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c27fe69ded1ef3%3A0xc0ea7b2633e4936f!2s1495%20Hicksville%20Rd%20Suite%201%2C%20North%20Massapequa%2C%20NY%2011758%2C%20United%20States!3m2!1d40.7160903!2d-73.48295689999999!5e0!3m2!1sen!2sng!4v1691859370996!5m2!1sen!2sng');

    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600');
    iframe.setAttribute('style', 'border:0');
    iframe.setAttribute('allowfullscreen', ' ');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    contactSection.appendChild(iframe);

    const callUs = document.createElement('div');
    callUs.classList.add('call-us');
    contactSection.appendChild(callUs);

    const contactSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    contactSvg.setAttribute("width", "35");
    contactSvg.setAttribute("height", "24");

    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z");

    contactSvg.appendChild(path)
    infoHeader3.appendChild(contactSvg);

    let  contactPara = [
        '+1-580-749-7736',
        '+1-952-975-0270'
    ];

    contactPara.forEach(item =>{
        const para = document.createElement('p');

        para.textContent = item;

        contact.appendChild(para);
    });
})();

export default contact







