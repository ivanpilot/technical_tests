const flatten = require('../flatten');

describe.only('flatten', () => {
    let input = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        single: true,
        age: 31,
        city: 'London',
        address: {
            main: {
                streetNumber: 20,
                streetName: 'avanue of world',
                zipcode: 9999,
                city: 'New York',
            },
        },
    };

    let output = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        single: true,
        age: 31,
        streetNumber: 20,
        streetName: 'avanue of world',
        zipcode: 9999,
        city: 'New York',
    };

    it('returns a flat object that overwrites properties with the same name', () => {
        expect(flatten(input)).toEqual(output);
    });

    it('returns an empty object if an empty object is provided', () => {
        expect(flatten({})).toEqual({});
    });

    describe('throws an error if the input', () => {
        it('is a string', () => {
            input = 'hello';
            expect(() => flatten(input)).toThrow();
        });

        it('is a number', () => {
            input = 2;
            expect(() => flatten(input)).toThrow();
        });

        it('is a boolean', () => {
            input = true;
            expect(() => flatten(input)).toThrow();
        });

        it('is a function', () => {
            input = () => console.log('hello');
            expect(() => flatten(input)).toThrow();
        });

        it('is an array', () => {
            input = [1, 'hello'];
            expect(() => flatten(input)).toThrow();
        });
    });
});