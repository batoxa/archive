function foo(x) {
    let result = x; //результату присваиваем первое значение

    function f(y) {
        if (y === undefined) {
            return result; //если у = () то возвращаем результат
        } else {
            result *= y; //иначе результат умножаем на У и перезаписываем
            return f;
        }
    }
    return f;
}
console.log(foo(5)(2)());
console.log(foo(5)());
console.log(foo(2)(1)(3)(4)());