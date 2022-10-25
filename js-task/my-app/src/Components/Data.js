// import React, { useState } from "react";
// import { Button } from "bootstrap";
import content from "./Content";
// import myFunction from "./Button";

function Data() {
  return (
    <div>
      <div
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: el.innerHTML }}
      />
    </div>
  );
}




let onClick = function (e) {
  if (e.target.nodeName !== "INPUT") {
    return;
  }
  if(e.target.parentNode.classList.contains('box-show')){
    return ;
  }
  e.target.parentNode.classList.toggle("box-show");
 
};





// let onClickCheck = (e)=>{
//   if(e.target.parentNode.classList.contains('box-show')){
//     return onClick ;
//   }
  
// }




const contentHtml = content.para;
const keywords = content.keywords;

const el = document.createElement("div");
el.innerHTML = contentHtml;
const listEl = el.getElementsByTagName("ul")[0];
[...listEl.children].forEach((li) => {
  let itemText = li.textContent;
  const updatedText = itemText
    .split(" ")
    .map((word) => {
      const matchedKeyWord = keywords.find((kw) => kw.key === word);
      if (matchedKeyWord) {
        word = word +
          `<span class="checkbox"><input  class= "checkbox" type="radio"/><div class="box"><div class = "boxp">${matchedKeyWord.description}</div></div></span>`;
      }
      return word;
    })
    .join(" ");
  li.innerHTML = updatedText;
});


export default Data;
