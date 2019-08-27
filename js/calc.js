// Calculator version 0.1

(function () {
  "use strict";

  let calc = function (calc) {
    return {
      calcState: calc,
      plus: function (plus) {
        this.calcState = this.calcState + plus;
        return this
      },
      minus: function (minus) {
        this.calcState = this.calcState - minus;
        return this
      },
      multiply: function (multiply) {
        this.calcState = this.calcState * multiply;
        return this
      },
      divide: function (divide) {
        if (divide !== 0) {
          this.calcState = this.calcState / divide;
          return this
        } else {
          console.log('You cant divide by zero !')
        }
      },
      result: function () {
        console.log(this.calcState);
        return this
      }
    }
  }

  calc(1).plus(3).result()
  calc(1).multiply(3).result()
  calc(1).minus(3).result()
  calc(1).divide(3).result()
  calc(1).divide(0).result()

}());

