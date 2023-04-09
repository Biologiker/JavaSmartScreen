import { CommunicationService } from '@/services/loopService';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MiniDayWidget',
  methods: {
    initMiniDayWidget
  },
  mounted() { initMiniDayWidget() },
})

function initMiniDayWidget() {
  setDay();

  CommunicationService.componentMethodCalled$.subscribe(() => {
    setDay();
  });

  function setDay() {
    const shortWeekday = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

    //todo: schleife muss noch eingegrenzt werden auf 23:59:59
    //Hier wird überprüft ob der aktuelle Tag mit dem dargestellten Tag übereinstimmt
    if (document.getElementById("innerDayBox")!.innerHTML != shortWeekday[new Date().getDay()]) {
      //Wenn er es nicht tut wird das innerHtml verändert zum shortCode für den WochenTag
      document.getElementById("innerDayBox")!.innerHTML = shortWeekday[new Date().getDay()];
    }
  }
}