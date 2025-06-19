let discussionName;
const topicContainer =  document.querySelector("#topic")
const secondContainer = document.querySelector("#secContainer")
const minContainer = document.querySelector("#minContainer")

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