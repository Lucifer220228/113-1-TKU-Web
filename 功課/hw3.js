function printMultiplicationTable() {
    for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        console.log("");
    }
}
printMultiplicationTable();
