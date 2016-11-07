(function() {
    'use strict';


    // TODO: Your tests go here!

    var expect = chai.expect;

    describe('my calc', function() {
      it('should know that obviously one equals one', function() {
        expect(1).to.equal(1);
      });

      describe('sum', function() {
        beforeEach(function() {
          console.log('Am I before?');
        });

        it('should have a function called sum', function() {
          expect(window.calc.sum).to.be.a('function');
        });

        it('should give a total when given numbers', function() {
          var result = window.calc.sum([2,3,5]);
          expect(result).to.equal(10);
        });

        it('should know that total is a string when given text', function() {
          var result = window.calc.sum('Jordan');
          expect(result).to.equal('Jordan');
        });

        it('should know how to handle an input with no argument', function() {
          var result = window.calc.sum();
          expect(result).to.equal(result);
        });
      });

      describe('factorial', function() {
        beforeEach(function() {
          console.log('Am I before?');
        });

        it('should have a function called factorial', function() {
          expect(window.calc.factorial).to.be.a('function');
        });
      })

    })




})();
