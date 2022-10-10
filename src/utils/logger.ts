import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  // prettyPrint is depricated
  // prettyPrint: true,
  base: {
    // process id
    pid: false,
  },
  timestamp: () => `,"time": ${dayjs().format()}`,
});

export default log;
