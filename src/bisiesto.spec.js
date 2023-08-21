import esBisiesto from "./bisiesto";

describe("Es bisiesto", () => {
  it("El 4 debería considerase como año bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
});
