module.exports = function reverse (n) {
    const number = String(Math.abs(n));
    return number.split('').reverse().join('');
}
