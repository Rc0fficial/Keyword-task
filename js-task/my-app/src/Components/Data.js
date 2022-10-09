import React, { useState } from "react";
import content from "./Content";
import myFunction from "./Button";

function Data() {




  
  



  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: paraWithBtn }} />
    </div>
  );
}

let clickFunc = ()=> {<span  id="btnId" onClick={myFunction} class="checkbox">
           <input class = "checkbox" type="checkbox"/>
        </span>
}

const myFunction1 = () => {
  var x = document.getElementById("btnId");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const result = Object.values(content.para.split(" "));
let keywords = content.keywords;
const matchedKeywords = [];
keywords.forEach((kw) => {
  return result.map((res, i) => {
    if (res.toLowerCase() === kw.key.toLowerCase()) {
      result[i] =
        res +
        `<span class="checkbox">
           <input class = "checkbox" type="checkbox" onClick="${myFunction}" />
           <div id="myDIV2">${kw.description}</div>
        </span>`;
      matchedKeywords.push({
        keyword: kw.key,
        index: i,
        description: kw.description,
      });
    }
  });
});

const paraWithBtn = result.join(" ");
console.log("paraWithBtn", paraWithBtn);
console.log("matchedKeywords", matchedKeywords);

export default Data;
