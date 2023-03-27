import { greetings } from './greetings.js';

console.log(greetings());

const s1l1 =[
    {
        'link' :'Store',
    },
    {
        'link' :'Mac',
    },
    {
        'link' :'iPad',
    },
    {
        'link' :'iPhone',
    },
    {
        'link' :'Watch',
    },
    {
        'link' :'AirPods',
    },
    {
        'link' :'TV & Home',

    },
    {
        'link' :'AirTag',
    },
    {
        'link' :'Accessories',

    },
    {
        'link' :'GiftCards',
    },
]

const s1l1container = document.getElementById("section1-l1");
for(let i =0;i<s1l1.length;i++){
    const s1l1ItemContainer = document.createElement("div");
    s1l1ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s1l1[i].link;

    s1l1ItemContainer.appendChild(listThing);

    s1l1container.appendChild(s1l1ItemContainer);
}
const s1l2 =[
    {
        'link' :'Wallet',
    },
    {
        'link' :'Apple Card',
    },
    {
        'link' :'Apple Pay',
    },
    {
        'link' :'Apple Cash',
    },
]
const s1l2container = document.getElementById("section1-l2");
for(let i =0;i<s1l2.length;i++){
    const s1l2ItemContainer = document.createElement("div");
    s1l2ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s1l2[i].link;

    s1l2ItemContainer.appendChild(listThing);

    s1l2container.appendChild(s1l2ItemContainer);
}

const s2l1 =[
    {
        'link' :'Manage Your Apple ID',
    },
    {
        'link' :'Apple Store Account',
    },
    {
        'link' :'iCloud.com',
    },
]
const s2l1container = document.getElementById("section2-l1");
for(let i =0;i<s2l1.length;i++){
    const s2l1ItemContainer = document.createElement("div");
    s2l1ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s2l1[i].link;

    s2l1ItemContainer.appendChild(listThing);

    s2l1container.appendChild(s2l1ItemContainer);
}


const s2l2 =[
    {
        'link' :'Apple One',
        
    },
    {
        'link' :'Apple TV+',
    },
    {
        'link' :'Apple Muics',
    },
    {
        'link' :'Apple Arcade',
    },
    {
        'link' :'Apple Arcade',
    },
    {
        'link' :'Apple Fitness+',
    },
    {
        'link' :'Apple News+',
    },
    {
        'link' :'Apple Books',
    },
    {
        'link' :'App Store',
    },
]
const s2l2container = document.getElementById("section2-l2");
for(let i =0;i<s2l2.length;i++){
    const s2l2ItemContainer = document.createElement("div");
    s2l2ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s2l2[i].link;

    s2l2ItemContainer.appendChild(listThing);

    s2l2container.appendChild(s2l2ItemContainer);
}
const s3l1 =[
    {
        'link' :'Find a Store',
    },
    {
        'link' :'Genius Bar',
    },
    {
        'link' :'Today at Apple',
    },
    {
        'link' :'Apple Store App',
    },
    {
        'link' :'Certified Refurbished',
    },
    {
        'link' :'Apple Trade In',
    },
    {
        'link' :'Financing',

    },
    {
        'link' :'Carrier Deals at Apple',
    },
    {
        'link' :'Order Status',

    },
    {
        'link' :'Shopping Help',
    },
]
const s3l1container = document.getElementById("section3-l1");
for(let i =0;i<s3l1.length;i++){
    const s3l1ItemContainer = document.createElement("div");
    s3l1ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s3l1[i].link;

    s3l1ItemContainer.appendChild(listThing);

    s3l1container.appendChild(s3l1ItemContainer);
}
const s4l1 =[
    {
        'link' :'Apple and Business',
    },
    {
        'link' :'Shop for Business',
    },
    
]
const s4l2 =[
    {
        'link' :'Apple and Education',
    },
    {
        'link' :'Shop for K-12',
    },
    {
        'link' :'Shop for College',
    },
]
const s4l3 =[
    {
        'link' :'Apple in Healthcare',
    },
    {
        'link' :'Health on Apple Watch',
    },
    {
        'link' :'Health Records on iPhone',
    },
]
const s4l4 =[
    {
        'link' :'Shop for Government'
    },
    {
        'link' :'Shop for Veterans and Military',
    },
]
const s4l1container = document.getElementById("section4-l1");
for(let i =0;i<s4l1.length;i++){
    const s4l1ItemContainer = document.createElement("div");
    s4l1ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s4l1[i].link;

    s4l1ItemContainer.appendChild(listThing);

    s4l1container.appendChild(s4l1ItemContainer);
}
const s4l2container = document.getElementById("section4-l2");
for(let i =0;i<s4l2.length;i++){
    const s4l2ItemContainer = document.createElement("div");
    s4l2ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s4l2[i].link;

    s4l2ItemContainer.appendChild(listThing);

    s4l2container.appendChild(s4l2ItemContainer);
}
const s4l3container = document.getElementById("section4-l3");
for(let i =0;i<s4l3.length;i++){
    const s4l3ItemContainer = document.createElement("div");
    s4l3ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s4l3[i].link;

    s4l3ItemContainer.appendChild(listThing);

    s4l3container.appendChild(s4l3ItemContainer);
}
const s4l4container = document.getElementById("section4-l4");
for(let i =0;i<s4l4.length;i++){
    const s4l4ItemContainer = document.createElement("div");
    s4l4ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s4l4[i].link;

    s4l4ItemContainer.appendChild(listThing);

    s4l4container.appendChild(s4l4ItemContainer);
}
const s5l1 =[
    {
        'link' :'Accessibility',
    },
    {
        'link' :'Education',
    },
    {
        'link' :'Environment',
    },
    {
        'link' :'Inclusion and Diversity',
    },
    {
        'link' :'Privacy',
    },
    {
        'link' :'Racial Equity and Justice',
    },
    {
        'link' :'Supplier Responsibility',

    },
]
const s5l2 =[
    {
        'link' :'Newsroom',
    },
    {
        'link' :'Apple Leadership',
    },
    {
        'link' :'Career Opportunities',
    },
    {
        'link' :'Investors',
    },
    {
        'link' :'Ethics & Compliance',
    },
    {
        'link' :'Events',
    },
    {
        'link' :'Contact Apple',

    },
]
const s5l1container = document.getElementById("section5-l1");
for(let i =0;i<s5l1.length;i++){
    const s5l1ItemContainer = document.createElement("div");
    s5l1ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s5l1[i].link;

    s5l1ItemContainer.appendChild(listThing);

    s5l1container.appendChild(s5l1ItemContainer);
}
const s5l2container = document.getElementById("section5-l2");
for(let i =0;i<s5l2.length;i++){
    const s5l2ItemContainer = document.createElement("div");
    s5l2ItemContainer.className = "section-lists";

    const listThing =document.createElement("p");
    listThing.textContent = s5l2[i].link;

    s5l2ItemContainer.appendChild(listThing);

    s5l2container.appendChild(s5l2ItemContainer);
}