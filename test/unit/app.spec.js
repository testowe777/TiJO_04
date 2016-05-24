describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });

    describe('Funkcja getDescendingNumbers', function(){
        it('should', function(){
            expect(app.getDescendingNumbers(10,7)).toEqual('10 9 8 7');
        });
        it('should return false', function(){
            expect(app.getDescendingNumbers(6,7)).toEqual(false);
        });

        it('should return false', function(){
            expect(app.getDescendingNumbers('10','7')).toEqual(false);
        });

        it('should return false', function(){
            expect(app.getDescendingNumbers(9,9)).toEqual(false);
        });

        it('should return false', function(){
            expect(app.getDescendingNumbers([10],[7])).toEqual(false);
        });
    });

    describe('Funkcja areaOfTrapezoid', function(){
        it('should return', function(){
            expect(app.areaOfTrapezoid(-1, 3, 4)).toEqual(false);
        });

        it('should return', function(){
            expect(app.areaOfTrapezoid(-1, -3, -4)).toEqual(false);
        });

        it('should return', function(){
            expect(app.areaOfTrapezoid(1, 1, 2)).toEqual(2);
        })
        
    });


});
