import {EventManager} from "./EventManager.js";

export const eventManager = new EventManager();
//events



export function initEvents(canvas){
  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    eventManager.dispatchEvent("click", { x: mouseX, y: mouseY });
  });
}