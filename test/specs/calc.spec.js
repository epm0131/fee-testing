(function() {
    'use strict';


    // TODO: Your tests go here!

    var expect = chai.expect;

    describe('my calc', function() {
      it('should know that obviously one equals one', function () {
        expect(1).to.equal(1);
      });

      describe('sum', function() {
        beforeEach(function() {
          console.log('Am I before?');
        });

      it('should have a function called sum', function() {
        expect(window.calc.sum).to.be.a('function');
      });

      it('should give a total when given a number', function() {
        var result = window.calc.sum([2,3,5]);
        console.log(window.calc.sum);
        expect(result).to.equal(10);
      })

      })
    })




})();
