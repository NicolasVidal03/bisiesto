import esBisiesto from "./bisiesto";

describe("Es bisiesto", () => {
  it("El 4 debería considerase como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });

  it("El 5 no debería considerase como año bisiesto", () => {
    expect(esBisiesto(5)).toEqual(false);
  });

  it("El 400 debería considerase como año bisiesto", () => {
    expect(esBisiesto(400)).toEqual(true);
  });

  it("Un año divisible entre 400 debería ser año bisiesto", () => {
    expect(esBisiesto(800)).toEqual(true);
  });

  it("El 100 no debería considerase como año bisiesto", () => {
    expect(esBisiesto(100)).toEqual(false);
  });

  it("Divisibles entre 100 (menos div entre 400) no deberían considerase como años bisiestos", () => {
    expect(esBisiesto(200)).toEqual(false);
  });
  
  it("Divisibles entre 4 menos entre 100 son bisiestos", () => {
    expect(esBisiesto(8)).toEqual(true);
  });

});
