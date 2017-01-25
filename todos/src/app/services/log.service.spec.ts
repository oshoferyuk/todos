/* tslint:disable:no-unused-variable */

import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { LogService } from './log.service';
import { MockBackend } from '@angular/http/testing';
import {ResponseOptions, Response} from '@angular/http';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],      
      providers: [LogService,
      {
        provide: Http, //override http
        useFactory: (mockBackend, options) => {
          return new Http(mockBackend, options);
        },
      deps: [MockBackend, BaseRequestOptions]
      },
      MockBackend,
      BaseRequestOptions
      ]
    });
  });

  it('should exist', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));

  it('should call http method with mock data',
    inject([LogService, MockBackend], (service: LogService, mockBackend: MockBackend) =>{

      //mock data
      const mockResponse = {        
          data: [
            { id: 0, name: 'Video 0' },
            { id: 1, name: 'Video 1' },
            { id: 2, name: 'Video 2' },
            { id: 3, name: 'Video 3' },
          ]
        };

        //subscribe to mockBackend, what it retuns will be on method
        mockBackend.connections.subscribe((connection) => {
          //what we return, will be in our expect test
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

      //invoke method      
      service.getHttpData().subscribe((data) => {                    
        expect(data.data[0].id).toBe(0);
        expect(data.data[1].name).toBe('Video 1');        
      });
    }))
});
