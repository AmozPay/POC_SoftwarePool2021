import { expect, describe, it } from '@jest/globals';
import { Country, createCosmonaut as cC, Mission } from '../src/createCosmonaut';

describe('createCosmonaut', () => {
  it('Cosmonaut', () => {
    const name = 'Kevin';
    const mission = Mission.EARTH;
    const country = Country.USA;
    const kevin = cC(name, mission, country);
    expect(kevin.name).toBe('Kevin');
    expect(kevin.mission).toBe('EARTH');
    expect(kevin.country).toBe('United-State');
  });
});
