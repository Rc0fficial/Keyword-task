import React from "react";
import content from "./Content"



function Data() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content.para }} />
    </div>
  );
}
const result = Object.values(content.para.split(' '));
// console.log(result);

let keywords = content.keywords;
// console.log(keywords)

const intersection = result.filter(element => keywords.includes(element));
// console.log(intersection)




// Create sample arrays variables.
// const domainsArr1 = ["infinitbility", "aGuideHub", "SortoutCode"];
// const domainsArr2 = ["notebility", "aGuideHub", "repairbility"];
// To get common elements in new array use `filter()` method
// Use `includes()` method to check string is available in array
const filteredArray = keywords.filter(value => result.includes(value));
console.log("filteredArray", filteredArray)
// Expected 'filteredArray' [ 'aGuideHub' ]


export default Data;
