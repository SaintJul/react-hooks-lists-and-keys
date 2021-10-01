import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map((coleur) => <li key = {coleur} style ={{color: coleur}}>{coleur}</li>)
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <colorElements/>
    </div>
  );
}

export default ColorList;
