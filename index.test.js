const assert = require('assert');





describe('write multipl', () => {
    function multiply(a, b) {
        return a * b;
    }

    describe('Multiplication Tests', () => {
        it('should return 6 for multiply(2, 3)', () => {
            assert.strictEqual(multiply(2, 3), 6);
        });

        it('should return 0 for multiply(0, 5)', () => {
            assert.strictEqual(multiply(0, 5), 0);
        });

        it('should return -15 for multiply(-3, 5)', () => {
            assert.strictEqual(multiply(-3, 5), -15);
        });

        it('should return 25 for multiply(5, 5)', () => {
            assert.strictEqual(multiply(5, 5), 25);
        });

        it('should return 0 for multiply(0, 0)', () => {
            assert.strictEqual(multiply(0, 0), 0);
        });
    });
    
});