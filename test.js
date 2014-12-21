var ffith=require('./TH.js')
var TH = ffith.TH

console.log('creating new 10-element tensor')
var tensor1=TH.THFloatTensor_newWithSize1d(10)

console.log('filling tensor with 13.44')
TH.THFloatTensor_fill(tensor1, 13.44)

console.log('printing tensor')
for (i=0; i < 10; ++i) {
    console.log(TH.THFloatTensor_get1d(tensor1, i))
}
