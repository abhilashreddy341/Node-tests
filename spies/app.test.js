const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');

describe('Spy',()=>{
 var db = {
   saveUser : expect.createSpy()
 };

app.__set__('db',db);
  it('should call the spy',()=>{
     var spy = expect.createSpy();
     spy('Abhilash',23);
     expect(spy).toHaveBeenCalledWith('Abhilash',23);
  });

  it('should call save user with user object',()=>{
    var email = 'abhilash123@gmail.com';
    var password = '123ewsdr';
     app.sampleSpie(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
})
