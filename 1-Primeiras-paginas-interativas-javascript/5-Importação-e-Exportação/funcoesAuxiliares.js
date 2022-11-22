
function gets() {
    return 10;
};

function print(texto) {
    console.log(texto);
};


//moduso de exportação unico
module.exports.gets = gets;

//moduso de exportação multiplo
module.exports = {gets , print};