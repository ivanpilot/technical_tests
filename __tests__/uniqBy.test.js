const uniqBy = require('../uniqBy');

describe.only('UniqBy > Id', () => {
    let input = [
        { id: 1, name: 'Anakin', age: 10 },
        { id: 2, name: 'Obi-Wan', side: 'light', age: 25 },
        { id: 1, name: 'Darth Vader', side: 'dark' },
      ]

    let output = [
        { id: 1, name: 'Anakin', age: 10 },
        { id: 2, name: 'Obi-Wan', side: 'light', age: 25 }
      ]

    it('returns an object with uniq id', () => {
        expect(uniqBy('id', input)).toEqual(output);
    });
});