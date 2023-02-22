/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console");

  const excuseButton = document.getElementById("excuse-button");
  excuseButton.addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["My cat", "My dog", "My fish", "My turtle", "My sister"];
  let what = ["ate", "draw on", "torn apart", "misplaced", "lost"];
  let avoid = ["my homework", "my project"];
  let when = ["this morning", "last night", "10 minutes ago", "last week"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let avoidIndex = Math.floor(Math.random() * avoid.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    avoid[avoidIndex] +
    " " +
    when[whenIndex]
  );
};
