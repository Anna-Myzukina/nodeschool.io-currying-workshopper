function unary(inputFirst) {
    return function unaryNew(inputSecond) {
        return inputFirst + inputSecond;
    }
}
module.exports = unary;