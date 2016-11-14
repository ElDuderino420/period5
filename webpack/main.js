/**
 * Created by David on 11 Nov 2016.
 */
require('./main.css');
import todos from "./todo.js";

document.getElementById("todo").innerHTML = todos;

const name = 'Scotch.io';

setTimeout(() => {
    document.getElementById("msg").innerHTML= `Name:${name}`}, 300);




let promiseFactory = function(size){
    return new Promise((resolve,reject) =>{
        let status = true;
        if(status){
            require('crypto').randomBytes(size, function(err, buffer) {
                let secureHex = buffer.toString('hex');
                resolve({secureHex,size});
            });
        }else{
            reject("Upppps, something went wrong!");
        }
    });
};

let ans = {
    title: "6 Secure Randoms",
    randoms: []
};
let p1 = promiseFactory(48);
let p2 = promiseFactory(40);
let p3 = promiseFactory(32);
let p4 = promiseFactory(24);
let p5 = promiseFactory(16);
let p6 = promiseFactory(8);

Promise.all([p1,p2,p3,p4,p5,p6]).then((hex) => {
    console.log(hex);
    hex.forEach(data =>{
        ans.randoms.push({length: data.size,random:data.secureHex});
    })
    document.getElementById("randoms").innerHTML= `Randoms: ${ans}`;
}).catch(err => console.log(err));