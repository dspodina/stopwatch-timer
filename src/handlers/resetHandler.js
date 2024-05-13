import data from "../data.js";
import dom from "../dom.js";
import updTimeDom from "../components/updTimeDOM.js";

const resetHandler = () => {
  if (data.intervalId) 
    clearInterval(data.intervalId);

  // reset data
  data.milliseconds = 0;
  data.seconds = 0;
  data.minutes = 0;

  updTimeDom(dom.time, data);
};

export default resetHandler;
