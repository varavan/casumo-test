export class FilterModel {

    type = null;
    value = null;

    constructor(type = null, value = null) {
        if ((type === 'genre' || type === 'author') && value !== null) {
            this.type = type;
            this.value = value;
        }
    }
}