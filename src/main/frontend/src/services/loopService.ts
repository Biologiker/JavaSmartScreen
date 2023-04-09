import { TaskTimer } from 'tasktimer';
import { Subject } from 'rxjs';

export function initLoop() {
  //This starts and executes the Loop every 500ms
  const timer = new TaskTimer(500);

  timer.on("tick", () => theLoop());

  const currDate: Date = new Date();
  sessionStorage.setItem("millis", (currDate.getMilliseconds() < 500).toString());

  timer.start();

  function theLoop() {
    loopVars();
  }

  function loopVars() {
    LoopTimings.timingRuns += 1;

    const currDate: Date = new Date();

    if (sessionStorage.getItem("millis") !== (currDate.getMilliseconds() < 500).toString()) {
      LoopTimings.secondSwitch = true;
      if (currDate.getSeconds() == 59 || currDate.getSeconds() == 0) {
        LoopTimings.minuteSwitch = true;

        if (currDate.getMilliseconds() < 500 && currDate.getSeconds() === 59) {
          LoopTimings.minutelyReload = true;
        } else {
          LoopTimings.minutelyReload = false;
        }
        if ((currDate.getMinutes() == 59 || currDate.getMinutes() == 0)) {
          LoopTimings.hourSwitch = true;
        } else {
          LoopTimings.hourSwitch = false;
        }
      } else {
        LoopTimings.minuteSwitch = false;
        LoopTimings.minutelyReload = false;
        LoopTimings.hourSwitch = false;
      }
      sessionStorage.setItem("millis", (currDate.getMilliseconds() < 500).toString());
    } else {
      LoopTimings.secondSwitch = false;
      LoopTimings.minuteSwitch = false;
      LoopTimings.minutelyReload = false;
      LoopTimings.hourSwitch = false;
    }

    CommunicationService.callComponentMethod();
  }
}

export class LoopTimings {
  public static timingRuns: number = 0;

  public static secondSwitch: boolean = false;
  public static minuteSwitch: boolean = false;
  public static minutelyReload: boolean = false;
  public static hourSwitch: boolean = false;
  public static daySwitch: boolean = false;
}

export class CommunicationService {

  // Observable string sources
  private static componentMethodCallSource = new Subject<any>();

  // Observable string streams
  public static componentMethodCalled$ = CommunicationService.componentMethodCallSource.asObservable();

  // Service message commands
  public static callComponentMethod() {
    CommunicationService.componentMethodCallSource.next("");
  }
}