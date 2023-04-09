export function setPostionOfElement(elementID: string) {
  let restorableObjects = [elementID];
  restorableObjects.forEach(element => {
    if (localStorage.getItem(element + 'TranslateX') === null || localStorage.getItem(element + 'TranslateY')!.toString() === null) {
      return;
    }

    let translateX: string = localStorage.getItem(element + 'TranslateX')!.toString() + "px"
    let translateY: string = localStorage.getItem(element + 'TranslateY')!.toString() + "px"
    document.getElementById(element)!.style.left = translateX;
    document.getElementById(element)!.style.top = translateY;
  });
}

export function inputPostionOfElement(elementID: string) {
  const element = document.getElementById(elementID)!

  if (!element) {
    return
  }

  const elementStyle = element.style;
  const translateArray = elementStyle.transform.split('(')[1].split(')')[0].split(',');
  let translateArrayX: number = parseInt(translateArray[0]);
  let translateArrayY: number = parseInt(translateArray[1]);

  let oldValueX: number = parseInt(window.getComputedStyle(element).left);
  let oldValueY: number = parseInt(window.getComputedStyle(element).top);

  translateArrayX = translateArrayX + oldValueX;
  translateArrayY = translateArrayY + oldValueY;

  localStorage.setItem(elementID + 'TranslateX', translateArrayX.toString());
  localStorage.setItem(elementID + 'TranslateY', translateArrayY.toString());
}