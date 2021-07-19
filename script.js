var Quantity = '';

do {
    var UserNum = +prompt('Количество: ');
} while (isNaN(UserNum) || UserNum == 0) {
    Quantity = UserNum;
}

var Symbol = prompt('Символ отступов: ');
var FinalSymbol = prompt('Конечный символ: ');

var Row = '';

for (let i = 0; i < Quantity; i++) {
    Row += Symbol;
    console.log(Row + FinalSymbol);
}