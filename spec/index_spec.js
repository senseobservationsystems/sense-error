const SError = require('../index');

class ErrorA extends SError {};
class ErrorB extends SError {};

describe('Identifying the Error', () => {
    it('identifies by the `instanceOf`', () => {
        try {
            throw new ErrorB();
        } catch (e) {
            expect(e instanceof ErrorB).toBe(true);
            expect(e instanceof ErrorA).toBe(false);
        }
    });

    it('identifies by the map', () => {
        try {
            throw new ErrorB();
        } catch (e) {
            const errorMap = {
                [ErrorA]: () => fail(),
                [ErrorB]: () => expect().nothing()
            };
            expect(errorMap.hasOwnProperty('ErrorB')).toBe(true);
            errorMap[e]();
        }
    });
});

describe('Passing arguments', () => {
    it('no args', () => {
        try {
            throw new ErrorA();
        } catch (e) {
            expect(e.message).toBe('');
            expect(e.details).toBeUndefined();
        }
    });

    it ('string arg', () => {
        try {
            throw new ErrorA('A message');
        } catch (e) {
            expect(e.message).toBe('A message');
            expect(e.details).toBeUndefined();
        }
    });
    
    it ('object arg', () => {
        try {
            throw new ErrorA({ message: 'A message', details: { userId: 'asdf' } });
        } catch (e) {
            expect(e.message).toBe('A message');
            expect(e.details).toEqual({ userId: 'asdf' });
        }
    });
});
