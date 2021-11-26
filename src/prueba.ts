import { expect } from './mockserver';

export class Prueba {
  configMockServer() {
    expect(
      'GET',
      '/foo',
      201,
      {
        foo: 'bar'
      },
      0
    );
  }
}
