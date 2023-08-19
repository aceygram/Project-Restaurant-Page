(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var d=a.length-1;d>-1&&!t;)t=a[d--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"832a5bf43759658c6611.png",n=e.p+"aa2b58f9e6b3c4c2d61e.png",a=document.createElement("div"),d=((()=>{const e=document.createElement("div");e.classList.add("hero-section"),a.appendChild(e);const t=document.createElement("div");t.classList.add("hero-caption"),e.appendChild(t);const d=document.createElement("div");d.classList.add("hero-title"),t.appendChild(d),["<span>Welcome</span> to","The Kitchen of","Tasty & Fresh Meal."].forEach((e=>{let t=document.createElement("div");t.innerHTML=e,d.appendChild(t)}));const c=document.createElement("div");c.classList.add("hero-para"),c.textContent=" Keep it easy with these simple but delicious recipes from one of the best cooks in town. Check us out today.",t.appendChild(c);const i=document.createElement("div");i.classList.add("search"),t.appendChild(i);let o=document.createElement("input");o.type="Text",o.placeholder="Search Meal";let s=document.createElement("button");s.textContent="Search",i.appendChild(o),i.appendChild(s);const l=document.createElement("div");l.classList.add("hero-img"),e.appendChild(l);const r=new Image;r.src=n,l.appendChild(r)})(),(()=>{const e=document.createElement("div");e.classList.add("about-section"),a.appendChild(e);const n=document.createElement("div");n.classList.add("about-us"),e.appendChild(n);const d=document.createElement("h1");d.textContent="About Chilli Kitchen",n.appendChild(d),["Chilli Kitchen is a popular restaurant that has gained a reputation for its delectable and diverse menu, offering a fusion of African and international cuisines. The restaurant specializes in serving a variety of mouthwatering dishes, including Jollof rice, fried rice, chili dishes, and other exotic meals.","The history of Chilli Kitchen dates back to the early 2000s when it was founded by a group of passionate food enthusiasts. The founders, who hailed from various African countries, shared a common love for their traditional dishes and a desire to introduce them to a wider audience.","The restaurant initially started as a small, humble establishment, serving traditional African dishes to a local clientele. However, as word spread about the restaurant's unique flavors and authentic cooking methods, its popularity began to soar."].forEach((e=>{let t=document.createElement("p");t.textContent=e,n.appendChild(t)}));const c=new Image;c.src=t,n.appendChild(c)})(),(()=>{const e=document.createElement("div");e.classList.add("info-section"),a.appendChild(e);const t=document.createElement("div");t.classList.add("hours"),e.appendChild(t);let n=document.createElement("div");n.classList.add("info-header"),t.appendChild(n);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width","35"),d.setAttribute("height","24");let c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"),d.appendChild(c),n.appendChild(d);const i=document.createElement("h1");i.textContent="Opening Hours",n.appendChild(i),["Sunday: 8am - 8pm","Monday: 6am - 6pm","Tuesday: 6am - 6pm","Wednesday: 6am - 6pm","Thursday: 6am - 10pm","Friday: 6am - 10pm","Saturday: 8am - 10pm"].forEach((e=>{const n=document.createElement("p");n.textContent=e,t.appendChild(n)}));const o=document.createElement("div");o.classList.add("location"),e.appendChild(o);let s=document.createElement("div");s.classList.add("info-header"),o.appendChild(s);const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("width","35"),l.setAttribute("height","24");let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d","M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"),l.appendChild(r),s.appendChild(l);let p=document.createElement("h1");p.textContent="Location",s.appendChild(p),["4760 Hershell Hollow Road","Oklahoma City, OK 73129"].forEach((e=>{const t=document.createElement("p");t.textContent=e,o.appendChild(t)}));const m=document.createElement("div");m.classList.add("contact"),e.appendChild(m);let h=document.createElement("div");h.classList.add("info-header"),m.appendChild(h);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width","35"),u.setAttribute("height","24");let C=document.createElementNS("http://www.w3.org/2000/svg","path");C.setAttribute("d","M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z"),u.appendChild(C),h.appendChild(u);let b=document.createElement("h1");b.textContent="Contact Us",h.appendChild(b);const E=document.createElement("div");E.classList.add("search"),m.appendChild(E);let f=document.createElement("input");f.type="email",f.placeholder="Email";let g=document.createElement("button");g.textContent="Send",E.appendChild(f),E.appendChild(g),["+1-580-749-7736","+1-952-975-0270"].forEach((e=>{const t=document.createElement("p");t.textContent=e,m.appendChild(t)}))})(),a),c=e.p+"27939f7aeaf29d949bc8.jpg",i=e.p+"4d2e2a65405709500719.jpg",o=e.p+"481de9e981dd4534d8c3.jpg",s=e.p+"b93296dcb45ea71233c9.jpg",l=e.p+"67f2b3d9ad641b4ca458.jpg",r=e.p+"c73d47ff1e025351d1b4.jpg",p=e.p+"41a8af60dff6a20ced9a.jpg",m=e.p+"94635eae907296fa9818.jpg",h=e.p+"837f3643d734bd85dcc4.jpg",u=e.p+"1e0765985792827c8b18.jpg",C=e.p+"cde609f049d140173ca5.jpg",b=document.createElement("div"),E=((()=>{const e=document.createElement("div");e.classList.add("menu-section"),b.appendChild(e);const t=document.createElement("h1");t.textContent="Our Top Menu",e.appendChild(t);const n=document.createElement("p");n.textContent="From appetizers to desserts, our menu is designed to tantalize your taste buds and leave you craving for more.",e.appendChild(n);const a=document.createElement("button");a.textContent="View More",e.appendChild(a);const d=document.createElement("div");d.classList.add("food-menu"),e.appendChild(d),[{src:c,h1:"Sausage Fried Rice",p:"$25.99"},{src:i,h1:"Fried Rice With Minced Pork",p:"$48.99"},{src:o,h1:"Fried Pork With Chilli",p:"$19.99"},{src:s,h1:"Indian Family Meal",p:"$16.99"},{src:l,h1:"Gourment Meal",p:"$29.99"},{src:r,h1:"Asian Meal",p:"$50.99"},{src:p,h1:"Food Gourment",p:"$35.99"},{src:m,h1:"Spicy Salad With Fried Chicken",p:"$22.99"},{src:h,h1:"Stirfry Crab With Curry Power",p:"$32.99"},{src:u,h1:"Ice-Cream Sundae",p:"$15.99"},{src:C,h1:"Ice-Cream With Strawberries",p:"$17.99"}].forEach((e=>{const t=document.createElement("div");t.classList.add("food-menu-list"),d.appendChild(t);const n=new Image;n.src=e.src,t.appendChild(n);const a=document.createElement("h1");a.textContent=e.h1,t.appendChild(a);const c=document.createElement("p");c.textContent=e.p,t.appendChild(c)}))})(),b),f=document.createElement("div"),g=((()=>{const e=document.createElement("div");e.classList.add("contact-section"),f.appendChild(e);const t=document.createElement("div");t.classList.add("form-section"),e.appendChild(t);const n=document.createElement("div");n.classList.add("layer"),t.appendChild(n);const a=document.createElement("div");a.classList.add("form"),n.appendChild(a);const d=document.createElement("h1");d.textContent="Contact Us",a.appendChild(d);const c=document.createElement("form");a.appendChild(c);const i=document.createElement("label");i.setAttribute("for","name"),i.textContent="Name:",c.appendChild(i);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("placeholder","First & Last Name"),c.appendChild(o);const s=document.createElement("label");s.setAttribute("for","email"),s.textContent="Email:",c.appendChild(s);const l=document.createElement("input");l.setAttribute("type","email"),l.setAttribute("placeholder","example@example.com"),c.appendChild(l);const r=document.createElement("label");r.setAttribute("for","message"),r.textContent="Message:",c.appendChild(r);const p=document.createElement("textarea");p.setAttribute("rows",4),c.appendChild(p);const m=document.createElement("button");m.textContent="Submit",c.appendChild(m);const h=document.createElement("iframe");h.setAttribute("src","https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96770.82505456054!2d-73.56528835307847!3d40.7160730040858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89c27fe69ded1ef3%3A0xc0ea7b2633e4936f!2s1495%20Hicksville%20Rd%20Suite%201%2C%20North%20Massapequa%2C%20NY%2011758%2C%20United%20States!3m2!1d40.7160903!2d-73.48295689999999!5e0!3m2!1sen!2sng!4v1691859370996!5m2!1sen!2sng"),h.setAttribute("width","100%"),h.setAttribute("height","600"),h.setAttribute("style","border:0"),h.setAttribute("allowfullscreen"," "),h.setAttribute("loading","lazy"),h.setAttribute("referrerpolicy","no-referrer-when-downgrade"),e.appendChild(h);const u=document.createElement("div");u.classList.add("call-us"),e.appendChild(u);const C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.setAttribute("width","25"),C.setAttribute("height","30");let b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d","M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z"),C.appendChild(b),u.appendChild(C);const E=document.createElement("h1");E.textContent="Contact Us",u.appendChild(E),["+1-580-749-7736","+1-952-975-0270"].forEach((e=>{const t=document.createElement("p");t.textContent=e,u.appendChild(t)}))})(),f),w=document.getElementById("content");(()=>{const e=document.createElement("div");e.classList.add("header"),w.appendChild(e),window.addEventListener("scroll",(function(){window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled")}));const n=document.createElement("div");n.classList.add("logo"),e.appendChild(n);const a=new Image;a.src=t,n.appendChild(a);var c=document.createElement("ul");c.id="tabButtonContainer",c.className="tab",e.appendChild(c),[{id:"tab1",label:"Home"},{id:"tab2",label:"Menu"},{id:"tab3",label:"Contact"}].forEach((function(e){var t=document.createElement("li");t.className="menu-list",t.setAttribute("data-tab",e.id),t.textContent=e.label,c.appendChild(t)}));var i=[{id:"tab1",contents:d,active:!0},{id:"tab2",contents:E},{id:"tab3",contents:g}];let o=document.createElement("div");o.id="tabContainer",o.className="tabContainer",w.appendChild(o),i.forEach((function(e){var t=document.createElement("div");t.id=e.id,t.className="tabcontent",t.appendChild(e.contents),o.appendChild(t)}));const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width","24"),s.setAttribute("height","24");let l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","M19 6H17C17 3.2 14.8 1 12 1S7 3.2 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6M12 3C13.7 3 15 4.3 15 6H9C9 4.3 10.3 3 12 3M19 20H5V8H19V20M12 12C10.3 12 9 10.7 9 9H7C7 11.8 9.2 14 12 14S17 11.8 17 9H15C15 10.7 13.7 12 12 12Z"),s.appendChild(l),c.appendChild(s);var r=document.querySelectorAll(".menu-list");r.forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("data-tab");document.querySelectorAll(".tabcontent").forEach((function(e){e.style.display="none"})),r.forEach((function(e){e.classList.remove("active")})),document.getElementById(e).style.display="block",this.classList.add("active")}))})),r[0].click()})()})();