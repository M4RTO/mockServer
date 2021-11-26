import { Prueba } from '../src/prueba';

describe('Decidir', () => {
  //reset()

  it('config mockserver for Prueba', () => {
    new Prueba().configMockServer();
  });
});
