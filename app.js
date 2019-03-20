function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(25);
    return (Math.floor((Math.random() * (max - min)) + min)).toFixed(2);
  }

function newFact() {
    let factNumber = getRandomInt();
    let fact;

    switch (factNumber) {
        case factNumber === 1:
            return 'Fact One';
            break;
        case factNumber === 2:
            return 'Fact Two';
            break;
        case factNumber === 3:
            return 'Fact Three';
            break;
        case factNumber === 4:
            return 'Fact Four';
            break;
        case factNumber === 5:
            return 'Fact Five';
            break;
        case factNumber === 6:
            return 'UF was founded in 1853';
            break; 
        case factNumber === 7:
            return 'Fact 7';
            break;
        case factNumber === 8:
            return 'Fact 8';
            break;
        case factNumber === 9:
            return 'Fact 9';
            break;
        case factNumber === 10:
            return 'Fact 10';
            break;
        case factNumber === 11:
            return 'Fact 11';
            break;
        case factNumber === 12:
            return 'Fact 12';
            break; 
        case factNumber === 13:
            return 'Fact 13';
            break;
        case factNumber === 14:
            return 'Fact 14';
            break;
        case factNumber === 15:
            return 'Fact 15';
            break;
        case factNumber === 16:
            return 'Fact 16';
            break;
        case factNumber === 17:
            return 'Fact 17';
            break;
        case factNumber === 18:
            return 'Fact 18';
            break;
        case factNumber === 19:
            return 'Fact 19';
            break;
        case factNumber === 20:
            return 'Fact 20';
            break;
        case factNumber === 21:
            return 'Fact 21';
            break;
        case factNumber === 22:
            return 'Fact 22';
            break;
        case factNumber === 23:
            return 'Fact 23';
            break;
        case factNumber === 24:
            return 'Fact 24';
            break;  
        case factNumber === 25:
            return 'Fact 25';
            break;
    }


}
