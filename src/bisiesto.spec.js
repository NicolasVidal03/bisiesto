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



});
