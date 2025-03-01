// let myName = "Adnan      ";
// let myChannel = "chai";
// // console.log(myName.truelength);   // undefined
// console.log(myName.trim().length); // 5 {remove empty spaces}

// console.log(myName.trueLength); //

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};


Object.prototype.hitest = function(){
    console.log("Hitesh is presented in all objects");
}

heroPower.hitest();