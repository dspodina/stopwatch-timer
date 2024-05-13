import dom from "../dom.js";
import stopHandler from "../handlers/stopHandler.js";

const stopEvent = () => {
  dom.stopBtn.addEventListener("click", stopHandler);
};

export default stopEvent;
