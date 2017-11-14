module.exports.add=(a,b)=>a+b;

module.exports.square=(x)=> x*x;

module.exports.asyncAdd = (a,b,callback)=>{
  setTimeout(()=>{
    callback(a+b)
  },1000);
}

module.exports.asyncSquare = (x,callback)=>{
  setTimeout(()=>{
    callback(x*x)
  },1000);
}

module.exports.name = (user,name)=>{
  var newName= name.split(' ');
  user.firstName = newName[0];
  user.lastName = newName[1];
  return user;

}
