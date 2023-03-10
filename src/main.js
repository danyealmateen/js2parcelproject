import anime from "animejs";
import { text } from "./modules/module";

console.log(text);

anime({
  targets: "h1",
  rotate: 360,
  duration: 3000,
});

//Images
const img = document.createElement("img");
document.body.append(img);

console.log(import.meta);

const imgURL = new URL("./images/kermit.jpg", import.meta.url);
img.src = imgURL;
