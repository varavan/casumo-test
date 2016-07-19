export class SortModel {

    sort = null;

    constructor(sortType = null) {
        if (sortType === 'name' || sortType === 'author') {
            this.sort = sortType;
        }
    }
}
