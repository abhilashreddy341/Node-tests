const request = require('supertest');
const expect = require('expect');


var app = require('./server').app;

describe('Server',()=>{

describe('GET /',()=>{
  it('should return Hello World',(done)=>{
    request(app)
     .get('/')
     .expect(200)
     .expect((res)=>{
     expect(res.body).toInclude({
       name : 'Abhilash'
     })
     })
     .end(done);
  });
});
describe('Get/users',()=>{
  it("should check for Abhilash",(done)=>{
    request(app)
      .get('/users')
     .expect(200)
     .expect((res)=>{
       expect(res.body).toInclude({
         name : 'Abhilash',
         address : 'Kansas City'
       })
     }).end(done);
   });
 });

})
