/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
**/


import viewImage from "./pages/images.js";
console.log('Happy hacking :)')


const btnImgGnt = document.querySelector("#button-generator");
btnImgGnt.addEventListener("click", imgGenerate);

async function imgGenerate() {
    const view = await viewImage();
    return view;
}

