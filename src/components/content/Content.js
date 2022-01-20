import React from "react";
import "./content.css";
import ContentPartOne from "./ContentPartOne";
import ContentPartThree from "./ContentPartThree";
import ContentPartTwo from "./ContentPartTwo";
// https://freewebsitetemplates.com/preview/hairstylesalon/images/great-hairstyle.jpg
function Content() {
  return (
    <div className="content__container">
      <div className="content">
        {/* PART1 */}
        <ContentPartOne />

        {/* PART2 */}
        <ContentPartTwo />

        {/* PART 3 */}
        <ContentPartThree />
      </div>
    </div>
  );
}

export default Content;
