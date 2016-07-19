import {
    inject,
    addProviders
} from '@angular/core/testing';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions, Response } from '@angular/http';
import { BaseRequestOptions, Http } from '@angular/http';
import { FilterModel } from  './model.filter';
import { SortModel } from  './model.sort';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

describe('Api Service', () => {
    beforeEach(() => {
        addProviders([
            BaseRequestOptions,
            MockBackend,
            {
                provide: Http,
                deps: [MockBackend, BaseRequestOptions],
                useFactory: function useFactory(backend, defaultOptions) {
                    return new Http(backend, defaultOptions);
                }
            },
            ApiService
        ]);
    });

    it('should not make any param due to not expected', inject([ApiService], (api:ApiService) => {

        let params = api.makeParams(new FilterModel('foo', 'foo'), new SortModel('foo'));

        expect(params.rawParams).toEqual('');

    }));

});
