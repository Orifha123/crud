import assert from 'assert';
import countAllPaarl from '../mostPopulaCar';

describe('Test my mostPopularCar function' , function(){
   
    
    assert.deepEqual(carsForTown("Malmesbury"), [{"color":"orange","make":"Nissan","model":"Juke","reg_number":"CK 32655"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 57166"},{"color":"orange","make":"Ford","model":"Ranger","reg_number":"CK 22692"},{"color":"orange","make":"Toyota","model":"Corolla","reg_number":"CK 41166"}])
    assert.deepEqual(carsForTown('Paarl'), [{"color":"white","make":"Nissan","model":"Micra","reg_number":"CJ 16103"},{"color":"white","make":"Toyota","model":"Hilux","reg_number":"CJ 16455"},{"color":"orange","make":"Ford","model":"Fiesta","reg_number":"CJ 67577"}]);
    
    assert.deepEqual(numberOfCars('blue', 'Cape Town'), [{"color":"blue","make":"Volkswagen","model":"Jetta","reg_number":"CA 46977"},{"color":"blue","make":"Ford","model":"Ranger","reg_number":"CA 77852"}, { "color": "blue", "make": "Ford", "model": "Fiesta",  "reg_number": "CA 34015" }]);
    assert.deepEqual(numberOfCars('red', 'Paarl'),[]);
    
    assert.deepEqual(numberOfCarsPerModel('orange','Hilux','Bellville'),[{"color":"orange","make":"Toyota","model":"Hilux","reg_number":"CY 52435"}])
    assert.deepEqual(numberOfCarsPerModel('red','Fiesta','Cape Town'),[])
    
    assert.equal(mostPopularColor('Bellville'), 'white');
    
})
