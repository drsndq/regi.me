function getRandomInt(min, max) {
    min = Math.ceil(1);
    max = Math.floor(20);
    return (Math.floor((Math.random() * (max - min)) + min)).toFixed(2);
  }

function newFact() {
    let factNumber = getRandomInt();
    let fact;

    switch (factNumber) {
        case factNumber === 1:
            fact = 'Albert Einstein could have been president of Israel when it was formed, but he declined.';
            return fact;
            break;
        case factNumber === 2:
            fact = 'Before dentures were invented, teeth were pulled from the mouths of dead soldiers for use as prosthetics.';
            return fact;
            break;
        case factNumber === 3:
            fact = 'Fact ThrRoman Emperor Gaius, also known as Caligula, made one of his favorite horses a senator.';
            return fact;
            break;
        case factNumber === 4:
            fact = 'There’s a giant mushroom in Oregon’s Malheur National Forest with a root system that covers over 2,200 acres, making it the largest living organism in the world.';
            return fact;
            break;
        case factNumber === 5:
            fact = 'In 1929, researchers at Princeton University claimed that they had turned a living cat into a telephone.';
            return fact;
            break;
        case factNumber === 6:
            return 'Heroin was once a perfectly acceptable medicine prescribed by doctors for everything from coughs to headaches.';
            break; 
        case factNumber === 7:
            fact = 'While Pope Gregory IX was in power, he declared that cats were to be associated with devil worship and had them exterminated in droves.';
            return fact;
            break;
        case factNumber === 8:
            fact = 'Russian dictator Joseph Stalin often had photos retouched to remove people who had died or been removed from office.';
            return fact;
            break;
        case factNumber === 9:
            fact = 'Chinese women used to painfully bind their feet to make them appear smaller and more feminine.';
            return fact;
            break;
        case factNumber === 10:
            fact = 'The shortest war in history was the Anglo-Zanzibar War. It lasted just 38 minutes.';
            return fact;
            break;
        case factNumber === 11:
            fact = 'Former North Korean dictator Kim Jong-il was said to be a great lover of music and composed six operas while he was in office.';
            return fact;
            break;
        case factNumber === 12:
            fact = 'The Leaning Tower of Pisa was actually never straight to begin with. The foundation began to sink when they started on the second floor.';
            return fact;
            break; 
        case factNumber === 13:
            fact = 'Researchers believe that the famous Guanajuato Mummies’ terrible expressions are the result of the victims being buried alive.';
            return fact;
            break;
        case factNumber === 14:
            fact = 'Klerksdorp spheres are strange objects that have been dug up near Ottosdal in South Africa. The spherical objects are billions of years old and no one has been able to fully explain the markings on their sides.';
            return fact;
            break;
        case factNumber === 15:
            fact = 'Before there were alarm clocks, there were “knockers-up”, who were hired to shoot dried peas from a blow gun at people’s windows in order to wake them up in the morning.';
            return fact;
            break;
        case factNumber === 16:
            fact = 'The largest bird ever to exist had a wingspan of almost 20 feet. It lived 60 million years ago.';
            return fact;
            break;
        case factNumber === 17:
            fact = 'Russian mystic Grigori Yefimovich Rasputin reportedly survived being poisoned, shot, and stabbed numerous times before he was finally drowned in the Volga river.';
            return fact;
            break;
        case factNumber === 18:
            fact = 'Like many ancient royalty, King Tut’s parents were related. They were actually brother and sister, according to DNA taken from his mummified body. He was also disabled and probably had malaria.';
            return fact;
            break;
        case factNumber === 19:
            fact = 'Winston Churchill famously loved cigars. How much? About 10-a-day-much.';
            return fact;
            break;
        case factNumber === 20:
            fact = 'During the Great Depression, people often made clothes out of potato sacks. Seeing this, distributors made their sacks more colorful to help people remain at least somewhat fashionable.';
            return fact;
            break;
    }
}
