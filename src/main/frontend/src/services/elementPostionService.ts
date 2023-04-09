export function setPostionOfElement(elementID: string) {
  if (localStorage.getItem(elementID + 'TranslateX') === null || localStorage.getItem(elementID + 'TranslateY')!.toString() === null) {
    return;
  }

  let translateX: string = localStorage.getItem(elementID + 'TranslateX')!.toString()
  let translateY: string = localStorage.getItem(elementID + 'TranslateY')!.toString()
  document.getElementById(elementID)!.style.left = translateX;
  document.getElementById(elementID)!.style.top = translateY;
}

export function inputPostionOfElement(elementID: string) {
  const element = document.getElementById(elementID)!

  if (!element) {
    return
  }

  const elementStyle = element.style;

  localStorage.setItem(elementID + 'TranslateX', elementStyle.left.toString());
  localStorage.setItem(elementID + 'TranslateY', elementStyle.top.toString());
}