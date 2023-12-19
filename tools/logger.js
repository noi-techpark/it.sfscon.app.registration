import axios from "axios";

const log = async (msg) => {
  try {
    const _uuid = new Date().getTime();
    await axios.post("https://telmekom.stage.digitalcube.dev/svcapp/logger", {
      log: `${_uuid} - ${msg}`,
    });
  } catch (error) {
    // console.log(error);
  }
};

export default log;
