function temp(...days) {
    console.log(days);
    let sum = 0;
    days.forEach(day => sum += day); //сложение элементов массива в sum
    return sum / days.length //среднее арифметическое
}
console.log(temp(20, 30, 10, 59));
console.log(temp(10, 30));