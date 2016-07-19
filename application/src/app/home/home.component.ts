import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FilterModel } from  '../shared/model.filter';
import { SortModel } from  '../shared/model.sort';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // View childs, so we can bind actions
    @ViewChild('nextPageLink') nextPageLinkComponent:ElementRef;
    @ViewChild('previousPageLink') previousPageLinkComponent:ElementRef;
    @ViewChild('sortInput') sortInputComponent:ElementRef;
    @ViewChild('filterTypeInput') filterTypeInputComponent:ElementRef;
    @ViewChild('filterTypeValue') filterValueInputComponent:ElementRef;

    books = [];
    page = 1;

    filterType = 'genre';
    filterValue = null;
    sortType = null;

    constructor(private apiService:ApiService) {
    }

    public nextPage() {
        this.page++;
        this.reloadBookStore();
    }

    public previousPage() {
        if (this.page > 1) {
            this.page--;
            this.reloadBookStore();
        }
    }

    public reloadBookStore() {

        let filterModel = new FilterModel(this.filterType, this.filterValue);
        let sortModel = new SortModel(this.sortType);

        this.apiService.getBooks(this.page, filterModel, sortModel).subscribe(
            data => this.books = data,
            error => console.log('there was an error fetching data')
        );
    }

    private bindings() {

        this.nextPageLinkComponent.nativeElement.addEventListener('click', function () {
                this.nextPage();
            }.bind(this)
        );

        this.previousPageLinkComponent.nativeElement.addEventListener('click', function () {
                this.previousPage();
            }.bind(this)
        );

        this.sortInputComponent.nativeElement.addEventListener('change', function (event) {
                let value = event.srcElement.value;

                if (value === 'false') {
                    this.sortType = null;
                } else {
                    this.sortType = value;
                }
                this.reloadBookStore();

            }.bind(this)
        );

        this.filterTypeInputComponent.nativeElement.addEventListener('change', function (event) {
                this.filterType = event.srcElement.value;
                this.reloadBookStore();

            }.bind(this)
        );

        this.filterValueInputComponent.nativeElement.addEventListener('change', function (event) {
                let value = event.srcElement.value;
                if (value !== '') {
                    this.filterValue = value;
                } else {
                    this.filterValue = null;
                }
                this.reloadBookStore();

            }.bind(this)
        );
    }

    ngOnInit() {
        this.reloadBookStore();
        this.bindings();
    }


}
