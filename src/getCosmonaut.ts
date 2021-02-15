import {Cosmonaut} from "./createCosmonaut";

export function getCosmonaut(path: string) {
  let json = require(path);
  let cosmonaut: Cosmonaut = json;
  return cosmonaut;
}