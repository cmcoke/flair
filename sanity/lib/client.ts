import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skntejq4NdfGLghPwNifaPAyufTlOtV2VmMM7hRrXJ9UKObA47FeUKOOkrzGfA1mKRH3zJ6zz6pgjy7tYBbB5FY7N7vwMkmj28Jv1WUrX5bA0Ir4w2cLdWmwfkheDApevZWFDIdVBrjo494SxmiUdsuTLYzwktlpOg1EAaINqx4GeRmcIiD1",
})
