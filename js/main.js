let discussionName;
const topicContainer =  document.querySelector("#topic")
const secondContainer = document.querySelector("#secContainer")
const minContainer = document.querySelector("#minContainer")
// const addAgument = document.querySelector("#add-Arg");

// // Show the popup

// addAgument.addEventListener("click" , ()=>{

// document.querySelector('.append_argument').style.display = 'block';

// // Hide on close click
// document.querySelector('.close').addEventListener('click', () => {
//   document.querySelector('.append_argument').style.display = 'none';
// });
// })

import {FetchName} from "./FetchName.mjs";
import  StopWatch  from "./StopWatch.mjs";

const loader = document.querySelector(".loader"); 
const appContainer = document.querySelector(".app-container")
/**fetch the debate name using api */

setTimeout(() => {
    loader.classList.add("invisible")
    appContainer.classList.remove("invisible")
    RenderMainPage();
}, 3000);  



FetchName()
.then((data)=>{
    discussionName = data;
    console.log(data)}

)
.catch((err)=>{
throw new Error(err)
}) 




function RenderMainPage() {
    topicContainer.textContent=discussionName;
    StopWatch(secondContainer , minContainer)
}