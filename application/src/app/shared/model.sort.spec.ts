import { SortModel } from './model.sort';


describe('Sort Model', () => {

    it('should be null if started with null', () => {

        let model = new SortModel(null);

        expect(model.sort).toEqual(null);

    });

});
