function reverseMyName(str) {
    // put your code here
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

    // return kata
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")