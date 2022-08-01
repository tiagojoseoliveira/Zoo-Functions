const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar o objeto', () => {
    const actual = getOpeningHours();
    const expected = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
    });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
    });
    it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
        const actual = getOpeningHours('Wednesday', '09:00-PM');
        const expected = 'The zoo is closed';
        expect(actual).toEqual(expected);
    });
    it('Vericar case sentive retorna The zoo is open', () => {
        const actual = getOpeningHours('Thursday', '10:00-am');
        const expected = 'The zoo is open';
        expect(actual).toEqual(expected);
    });
    it('Vericar se o erro é lançado quando parametro diferente de numero', () => {
        expect(() => { getOpeningHours('Thursday', 'nove-am'); }).toThrow();
    });
    it('Vericar se o erro é lançado final horario diferente de am ou pm', () => {
        expect(() => { getOpeningHours('Thursday', '10:00-ap'); }).toThrow();
    });
    it('The hour must be between 0 and 12', () => {
        expect(() => { getOpeningHours('Thursday', '14:00-am'); }).toThrow();
    });
    it('The minutes must be between 0 and 59', () => {
        expect(() => { getOpeningHours('Thursday', '10:100-am'); }).toThrow();
    });
    it('Não é dia de semana', () => {
        expect(() => { getOpeningHours('Tiago', '10:00-am'); }).toThrow();
    });
});