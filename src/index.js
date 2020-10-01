module.exports = function toReadable (number) { 
        
    let arrayOfNumbersChars = String(number).split('').map(item => +item);
    
    let numberLength = arrayOfNumbersChars.length;

    let readableArr;

    switch (numberLength) {

        case (1):
            readableArr = arrayOfNumbersChars.map(item => {
                if (item === 0) return 'zero';
                return readableNumeral(item);
            })
        break;  

        case (2):
            readableArr = arrayOfNumbersChars.map((item, index, array) => {
                if (index === 0) return readableTens(item);                 
                
                if (index === 1) {
                    if (array[index-1] === 1) return readableTensLessTwenty(item);    
                    return readableNumeral(item);    
                }
            })
        break;  

        case (3):
            readableArr = arrayOfNumbersChars.map((item, index, array) =>{
                if (index === 0 ) return `${readableNumeral(item)} hundred`;                   
                
                if (index === 1) return readableTens(item);

                if (index === 2){
                    if (array[index-1] === 1) return readableTensLessTwenty(item);                    
                    return readableNumeral(item);   
                }
            })
    }
    
    return readableArr.filter(item => item !== undefined).join(' ');
}

function readableNumeral (num){
    if (num === 1) return 'one';
    if (num === 2) return 'two';
    if (num === 3) return 'three';
    if (num === 4) return 'four';
    if (num === 5) return 'five';
    if (num === 6) return 'six';
    if (num === 7) return 'seven';
    if (num === 8) return 'eight';
    if (num === 9) return 'nine';
}

function readableTensLessTwenty (num) {
    if (num === 0 ) return 'ten';
    if (num === 1 ) return 'eleven';
    if (num === 2 ) return 'twelve';
    if (num === 3 ) return 'thirteen';
    if (num === 4 ) return 'fourteen';
    if (num === 5 ) return 'fifteen';                      
    if (num === 6 ) return 'sixteen';                      
    if (num === 7 ) return 'seventeen';                      
    if (num === 8 ) return 'eighteen';                      
    if (num === 9 ) return 'nineteen';
}

function readableTens (num) {

if (num === 2) return 'twenty';
if (num === 3) return 'thirty';
if (num === 4) return 'forty';
if (num === 5) return 'fifty';
if (num === 6) return 'sixty';
if (num === 7) return 'seventy';
if (num === 8) return 'eighty';
if (num === 9) return 'ninety';

}