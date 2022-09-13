class Golden {
    static staticMethod() {
        console.log('I am static');
        console.log(this === Golden);
    }
}



Golden.staticFunction = function() {
    console.log('I am static too')
    console.log(this === Golden);
}

module.exports = Golden