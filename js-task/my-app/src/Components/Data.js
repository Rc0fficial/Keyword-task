import React from "react";
import content from "./Content";

function Data() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content.para }} />
    </div>
  );
}
const result = Object.values(content.para.split(" "));
let keywords = content.keywords;
const matchedKeywords = [];
keywords.forEach((kw) => {
  return result.map((res, i) => {
    if (res.toLowerCase() === kw.key.toLowerCase()) {
      result[i] = res + `<button onclick="myFunction()">o</button>`;
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
