import updTimeDom from "../components/updTimeDOM.js";
import data from "../data.js";
import updTime from "../utils/updTime.js";
import dom from "../dom.js";

const startHandler = () => {
  if (data.intervalId) {
    clearInterval(data.intervalId);
  };

  data.intervalId = setInterval(() => {
    const newData = updTime(data);
    updTimeDom(dom.time, newData);
  }, 10);
};

export default startHandler;
