import { inputPostionOfElement } from "./elementPostionService";

export function dragMouseDown(e: any, elementID: string, parentID: string) {
  const element = document.getElementById(elementID)!;
  const parent = document.getElementById(parentID)!;

  document.onmouseup = () => closeDragElement(elementID);

  const elementX = Number.isNaN(parseInt(element.style.left)) ? 0 : parseInt(element.style.left);
  const elementY = Number.isNaN(parseInt(element.style.top)) ? 0 : parseInt(element.style.top);

  const takeAway: number[] = [e.clientX - elementX, e.clientY - elementY]

  document.onmousemove = (e) => elementDrag(e, element, parent, takeAway);
}

function elementDrag(e: any, element: HTMLElement, parentElement: HTMLElement, takeAway: number[]) {
  let posX = e.clientX - takeAway[0];
  let posY = e.clientY - takeAway[1];

  const parentMinY = parentElement.getBoundingClientRect().top;
  const parentMaxY = parentElement.getBoundingClientRect().bottom - element.clientHeight;
  const parentMinX = parentElement.getBoundingClientRect().left;
  const parentMaxX = parentElement.getBoundingClientRect().right - element.clientWidth;

  if (posY > parentMaxY) {
    element.style.top = parentMaxY + "px";
  } else if (posY < parentMinY) {
    element.style.top = 0 + "px";
  } else {
    element.style.top = posY + "px";
  }

  if (posX > parentMaxX) {
    element.style.left = parentMaxX + "px";
  } else if (posX < parentMinX) {
    element.style.left = 0 + "px";
  } else {
    element.style.left = posX + "px";
  }
}

export function closeDragElement(elementID: string) {
  inputPostionOfElement(elementID);

  document.onmouseup = null;
  document.onmousemove = null;
}