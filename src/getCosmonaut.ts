import { Cosmonaut } from './createCosmonaut';

export function getCosmonaut(path: string) {
  const json = require(path);
  const cosmonaut: Cosmonaut = json;
  return cosmonaut;
}
