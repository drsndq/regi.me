function getRandomInt() {
    var min = Math.ceil(1);
    var max = Math.floor(20);
    return (Math.floor((Math.random() * (max - min)) + min));
  }

let baseNumber = getRandomInt();

function newFact() {
    let factNumber = baseNumber;

    if (factNumber == 1) {
            document.getElementById('newFact').innerHTML = 'Albert Einstein could have been president of Israel when it was formed, but he declined.';
    } else if (factNumber == 2) {
            document.getElementById('newFact').innerHTML = 'Before dentures were invented, teeth were pulled from the mouths of dead soldiers for use as prosthetics.';
    } else if (factNumber == 3) {
            document.getElementById('newFact').innerHTML = 'Roman Emperor Gaius, also known as Caligula, made one of his favorite horses a senator.';
    } else if (factNumber == 4) {
            document.getElementById('newFact').innerHTML = 'There\'s a giant mushroom in Oregon\'s Malheur National Forest with a root system that covers over 2,200 acres, making it the largest living organism in the world.';
    } else if (factNumber == 5) {
            document.getElementById('newFact').innerHTML = 'In 1929, researchers at Princeton University claimed that they had turned a living cat into a telephone.';
    } else if (factNumber == 6) {
            document.getElementById('newFact').innerHTML = 'Heroin was once a perfectly acceptable medicine prescribed by doctors for everything from coughs to headaches.'; 
    } else if (factNumber == 7) {
            document.getElementById('newFact').innerHTML = 'While Pope Gregory IX was in power, he declared that cats were to be associated with devil worship and had them exterminated in droves.';
    } else if (factNumber == 8) {
            document.getElementById('newFact').innerHTML = 'Russian dictator Joseph Stalin often had photos retouched to remove people who had died or been removed from office.';
    }  else if (factNumber == 9) {
            document.getElementById('newFact').innerHTML = 'Chinese women used to painfully bind their feet to make them appear smaller and more feminine.';
    }  else if (factNumber == 10) {
            document.getElementById('newFact').innerHTML = 'The shortest war in history was the Anglo-Zanzibar War. It lasted just 38 minutes.';
    } else if (factNumber == 11) {
            document.getElementById('newFact').innerHTML = 'Former North Korean dictator Kim Jong-il was said to be a great lover of music and composed six operas while he was in office.';
    } else if (factNumber == 12) {
            document.getElementById('newFact').innerHTML = 'The Leaning Tower of Pisa was actually never straight to begin with. The foundation began to sink when they started on the second floor.'; 
    } else if (factNumber == 13) {
            document.getElementById('newFact').innerHTML = 'Researchers believe that the famous Guanajuato Mummies\' terrible expressions are the result of the victims being buried alive.';
    } else if (factNumber == 14) {
            document.getElementById('newFact').innerHTML = 'Klerksdorp spheres are strange objects that have been dug up near Ottosdal in South Africa. The spherical objects are billions of years old and no one has been able to fully explain the markings on their sides.';
    } else if (factNumber == 15) {
            document.getElementById('newFact').innerHTML = 'Before there were alarm clocks, there were \“knockers-up\”, who were hired to shoot dried peas from a blow gun at people\'s windows in order to wake them up in the morning.';
    } else if (factNumber == 16) {
            document.getElementById('newFact').innerHTML = 'The largest bird ever to exist had a wingspan of almost 20 feet. It lived 60 million years ago.';
    } else if (factNumber == 17) {
            document.getElementById('newFact').innerHTML = 'Russian mystic Grigori Yefimovich Rasputin reportedly survived being poisoned, shot, and stabbed numerous times before he was finally drowned in the Volga river.';
    } else if (factNumber == 18) {
            document.getElementById('newFact').innerHTML = 'Like many ancient royalty, King Tut’s parents were related. They were actually brother and sister, according to DNA taken from his mummified body. He was also disabled and probably had malaria.';
    } else if (factNumber == 19) {
            document.getElementById('newFact').innerHTML = 'Winston Churchill famously loved cigars. How much? About 10-a-day-much.';
    } else if (factNumber == 20) {
            document.getElementById('newFact').innerHTML = 'During the Great Depression, people often made clothes out of potato sacks. Seeing this, distributors made their sacks more colorful to help people remain at least somewhat fashionable.';
    }
}

window.onload = newFact();