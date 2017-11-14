const utils = require('./utils');
const expect = require('expect');

describe('Utils',()=>{
  describe('add',()=>{
    it('should add two numbers',()=>{
      var num = utils.add(12,13);
      expect(num).toBe(25).toBeA('number');
      // if(num!=25){
      //   throw new Error(`Expected 25 but got ${num}`);
      // }
    })
  })
  describe('square',()=>{
    it('should square the given number',()=>{
      var num = utils.square(5);
    //  if(num!=25) throw new Error('Expected 25, but got'+ num);
      expect(num).toBe(25).toBeA('number')

    });
  })

  it('should include first and last names',()=>{
    var obj = utils.name({
      age : 23,
      location : 'kansas city'
    },"Abhilash Gaddam");
    expect(obj).toInclude({
      firstName : "Abhilash",
      lastName : "Gaddam"
    })
  })

  it('should check the sum',(done)=>
  {
    utils.asyncAdd(3,4,(num)=>{
      expect(num).toBe(7).toBeA('number');
      done();
    })
  })

  it('should check the square',(done)=>{
    utils.asyncSquare(3,(x)=>{
      expect(x).toBe(9).toBeA('number');
      done();
      })
  })

})







// it('should constain a value',()=>{
//   //expect(12).toNotBe(12);
//   // expect({
//   //   name : "abhilash"
//   // }).toBe({
//   //   name : "abhilash"
//   // })
//   // expect([2,3,4,5]).toExclude(3);
//   expect({
//     name : 'abhilash',
//     age : 23,
//   }).toExclude({
//     name : 'arun'
//   });
// })
