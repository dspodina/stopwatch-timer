import dom from "../dom.js";
import startHandler from "../handlers/startHandler.js";

const startEvent = () => {
  dom.startBtn.addEventListener("click", startHandler);
};

export default startEvent;
