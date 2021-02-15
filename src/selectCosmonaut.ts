import * as cos from './createCosmonaut';

const axios = require('axios').default;

const api = 'http://localhost:7600/';

async function selectCosmonaut(mission: cos.Mission, country: cos.Country) {
  const request = await axios.get(`${api}cosmo/`);
  const cosmonauts = request.data;
  return cosmonauts.filter((cosmo) => (cosmo.mission === mission && cosmo.country === country));
}
