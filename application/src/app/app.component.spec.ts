import {
  inject,
  addProviders
} from '@angular/core/testing';

// to use Translate Service, we need Http, and to test Http we need to mock the backend
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { ApiService } from './shared';
import { AppComponent } from './app.component';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      AppComponent,
      ApiService,
      BaseRequestOptions,
      MockBackend,
      // Provide a mocked (fake) backend for Http
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: function useFactory(backend, defaultOptions) {
          return new Http(backend, defaultOptions);
        }
      }
    ]);
  });

  it('should have an author', inject([AppComponent], (app: AppComponent) => {
    expect(app.author).toEqual('Ivan Ruiz <ivan.ruiz.delatorre@gmail.com>');
  }));

});
