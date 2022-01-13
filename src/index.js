module.exports = function toReadable (number) {
    let result = '';

    let zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let twentyNinety = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];

    if (number < 10) {
        result += zeroNine[number];
    } else if (number >= 10 && number <= 19) {
        result += tenNineteen[number % 10];
    } else if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            result += twentyNinety[parseInt(number / 10)];
        } else {
            result += twentyNinety[parseInt(number / 10)] + ' ' + zeroNine[number % 10];
        } 
    } else if (number >= 100 && number <= 999) {
        if (parseInt(number % 100 / 10) === 0 && number % 10 === 0) {
            result += zeroNine[parseInt(number / 100)] + ' ' + 'hundred';
        } else if (number % 100 >= 1 && number % 100 <= 9) {
            result += zeroNine[parseInt(number / 100)] + ' ' + 'hundred' + ' ' + zeroNine[number % 100];
        } else if (number % 100 >= 10 && number % 100 <= 19) {
            result += zeroNine[parseInt(number / 100)] + ' ' + 'hundred' + ' ' + tenNineteen[number % 10];
        } else if (number % 10 === 0) {
            result += result += zeroNine[parseInt(number / 100)] + ' ' + 'hundred' + ' ' + twentyNinety[parseInt(number % 100 / 10)];
        } else {
            result += result += zeroNine[parseInt(number / 100)] + ' ' + 'hundred' + ' ' + twentyNinety[parseInt(number % 100 / 10)] + ' ' + zeroNine[number % 10];
        }
    }

    return result;
}
