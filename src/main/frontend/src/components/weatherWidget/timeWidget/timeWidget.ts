import { defineComponent } from 'vue';
import { LoopTimings, CommunicationService } from '@/services/loopService';

export default defineComponent({
  name: 'TimeWidget',
  methods: {
    init
  },
  mounted() { init() },
})



export function init() {
  CommunicationService.componentMethodCalled$.subscribe(() => {
    refreshWrapper(new Date(Date.now()));
  });

  const currDate: Date = new Date(Date.now())

  refreshTimes('second', currDate.getSeconds().toString(), currDate.getMilliseconds() >= 500 /*Dieses If schaltet doMove an oder aus damit der Rythmus des Switchens gleich bleibt*/, true);

  refreshTimes('minute', currDate.getMinutes().toString(), currDate.getMilliseconds() >= 500, document.getElementById("secondLeft")!.classList.contains('move'));

  refreshTimes('hour', currDate.getHours().toString(), currDate.getMilliseconds() >= 500, document.getElementById("secondLeft")!.classList.contains('move'));

  refreshWrapper(new Date(Date.now()));

  function refreshTimes(element: string, timeElement: string, doMove: boolean, parentHasMove: boolean) { //NOSONAR
    const elementLeft = document.getElementById(element + "Left");
    const elementRight = document.getElementById(element + "Right");
    const elementLeft2 = document.getElementById(element + "Left2");
    const elementRight2 = document.getElementById(element + "Right2");

    let elementLeftClassList = elementLeft!.classList
    let elementRightClassList = elementRight!.classList
    let elementLeft2ClassList = elementLeft2!.classList
    let elementRight2ClassList = elementRight2!.classList

    if (timeElement.length == 2) {
      //Hier setzte ich die Zahlen ein für die oberen Zahlen ein
      elementLeft!.innerHTML = timeElement[0];
      elementRight!.innerHTML = timeElement[1];
      //Hier die unteren Zahlen, diese rechne ich einfach plus 1 um die Zeit dann hochscrollen zu lassen
      //Die Ifs fragen außerdem noch ab ob die Zahlen valid sind
      //Da es keine 10 oder 6 geben kann bei einem einstelligen Sekunden block z.B. 67 oder 107
      elementLeft2!.innerHTML = [10, 6].includes((+timeElement[0] + 1)) ? '0' : (+timeElement[0] + 1).toString()
      elementRight2!.innerHTML = (+timeElement[1] + 1) == 10 ? '0' : (+timeElement[1] + 1).toString();
    } else {
      elementLeft!.innerHTML = '0';
      elementRight!.innerHTML = timeElement[0];
      elementLeft2!.innerHTML = '1';
      elementRight2!.innerHTML = (+timeElement[0] + 1) == 10 ? '0' : (+timeElement[0] + 1).toString();
    }

    if (doMove) {
      if (elementRightClassList.contains('move') || !parentHasMove) {
        elementRightClassList.remove('move');

        elementRight2ClassList.remove('move');
      } else if (parentHasMove) {
        elementRightClassList.add('move');

        elementRight2ClassList.add('move');
      }

      //Hier werden die Moveelemente von den Zehnerszahlen entfernt
      if (elementLeftClassList.contains('move')) {
        elementLeftClassList.remove('move');

        elementLeft2ClassList.remove('move');
        //Mit diesem If wird abgefragt ob die neunte Zahl im 10er Block erreicht ist um die Animation für die 10er Zahlen zu starten.
      } else if (+timeElement % 10 == 9 && elementRightClassList.contains('move')) {
        elementLeftClassList.add('move');

        elementLeft2ClassList.add('move');
      }
    }
  }

  function refreshWrapper(currDate: Date) {
    if (LoopTimings.secondSwitch) {
      refreshTimes('second', currDate.getSeconds().toString(), true, true);
      if (LoopTimings.minuteSwitch) {
        refreshTimes('minute', currDate.getMinutes().toString(), true, document.getElementById("secondLeft")!.classList.contains('move'));
        if (LoopTimings.hourSwitch) {
          refreshTimes('hour', currDate.getHours().toString(), true, document.getElementById("secondLeft")!.classList.contains('move'));
        }
      }
    }
  }
}