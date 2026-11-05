import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  studioHost: "maurilio-moreira",
  deployment: { appId: "ao9pw0fgzzil3lgf59niiw5m" },
});
