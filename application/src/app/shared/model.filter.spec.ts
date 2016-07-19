import { FilterModel } from './model.filter';


describe('Filter Model', () => {

    it('should be null if started with null', () => {

        let model = new FilterModel(null, null);

        expect(model.type).toEqual(null);
        expect(model.value).toEqual(null);

    });


    it('should return any value', () => {

        let type = 'genre';
        let value = 'value';

        let model = new FilterModel(type, value);

        expect(model.type).toEqual(type);
        expect(model.value).toEqual(value);

    });

    it('should be null if type is not reconigzed', () => {

        let type = 'any';
        let value = 'value';

        let model = new FilterModel(type, value);

        expect(model.type).toEqual(null);
        expect(model.value).toEqual(null);

    });


});
