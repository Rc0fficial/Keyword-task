import React, {useState} from "react";
import content from "./Content";
// import Button from "./Button"

function Data() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  let btnFunc =  <input
  className="form-check-input"
  type="checkbox"
  value=""
  id="flexCheckIndeterminate"
  onClick={handleClick}
/>

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: paraWithBtn }} />
    </div>
  );
}
const result = Object.values(content.para.split(" "));
let keywords = content.keywords;
const matchedKeywords = [];
keywords.forEach((kw) => {
  return result.map((res, i) => {
    if (res.toLowerCase() === kw.key.toLowerCase()) {
      result[i] = res + `<span class="checkbox">
      <input class = "checkbox" type="checkbox"/>
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
