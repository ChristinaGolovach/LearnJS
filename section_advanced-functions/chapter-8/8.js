// https://learn.javascript.ru/settimeout-setinterval

//task //https://learn.javascript.ru/task/output-numbers-100ms

//TODO ask

//use setInterval
function printNumbers(from, to) {
    const intervalId = setInterval(() => {
        console.log(from);
        if (from === to) {
            clearInterval(intervalId);
        }
        from++;

    }, 1000);
}

printNumbers(1, 4);


//use recursive setTimeout
function printNumbers2(from, to) {
    let timerId = setTimeout(function print() {
        console.log(from);
        if (from === to) {
            clearTimeout(timerId);
        } else {
            from++;
            timerId = setTimeout(print, 1000);
        }

    }, 1000);

}

printNumbers2(2, 5);
