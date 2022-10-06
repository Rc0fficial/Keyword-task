import React from "react";
import content from "./Content"



function Data() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content.para }} />
    </div>
  );
}
const result = Object.values(content.para);
console.log(result);

export default Data;
