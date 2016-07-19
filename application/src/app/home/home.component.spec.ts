import {
    inject,
    addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { HomeComponent } from './home.component';
import { ApiService } from '../shared/api.service';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { ResponseOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


describe('Home', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        addProviders([
                HomeComponent,
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
            ]
        );
    });

    it('should Call api at reloading book store', inject([ApiService, HomeComponent], (apiService, home) => {

        // I dont want to struggle with responses
        class MockObservable {
            subscribe(data = null){
                return;
            }
        };

        // Given
        spyOn(apiService, 'getBooks').and.returnValue(new MockObservable());

        // When
        home.reloadBookStore();

        // Then
        expect(apiService.getBooks).toHaveBeenCalled();

    }));

});
