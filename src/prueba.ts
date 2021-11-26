import { expect } from './mockserver';
import * as dataJson from '../ejemplos/data.json'

export class Prueba {
  configMockServer() {
    expect(
      'GET',
      '/foo',
      201,
        dataJson,
      0
    );
  }
}
