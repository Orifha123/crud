function mostPopularCar(cars) {
    const allCars = {};
    for (let i = 0; i < cars.length; i++) {
      let carList = cars[i];
      allCars[carList.make] = 0;
    }
    for (let i = 0; i < cars.length; i++) {
      let carList = cars[i];
      allCars[carList.make]++;
    }
    let counter = 0;
    let mostPopularCar = '';
    for (const car in allCars) {
      const currentMake = allCars[car];
      if (currentMake > counter) {
        counter = currentMake;
        mostPopularCar = car;
      }
    }
    return mostPopularCar;
  }
  
  function nissansFromCK(cars) {
    let counter = 0;
    const nissanMake = cars.filter(car => car.make === 'Nissan');
    for (let i = 0; i < nissanMake.length; i++) {
      if (nissanMake[i].reg_number.startsWith('CK')) {
        counter++;
      }
    }
    return counter;
  }
  
  function mostBlueCars(cars) {
    const regNumber = {};
    const blueCars = cars.filter(car => car.color === 'blue');
    for (let i = 0; i < blueCars.length; i++) {
      let car = blueCars[i];
      let regNo = car.reg_number;
      let regId = regNo.substring(0, 2);
      if (regNumber[regId] === undefined) {
        regNumber[regId] = 0;
      }
      regNumber[regId]++;
    }
    let mostBlueCars = '';
    let counter = 0;
    for (let key in regNumber) {
      const NumberOfCity = regNumber[key];
      if (NumberOfCity >= counter) {
        counter = NumberOfCity;
        mostBlueCars = key;
      }
    }
    return mostBlueCars;
  }
  
  function fewestOrangeCars(cars) {
    const regNumber = {};
    const orangeCars = cars.filter(car => car.color === 'orange');
    for (let i = 0; i < orangeCars.length; i++) {
      let car = orangeCars[i];
      let regNo = car.reg_number;
      let regId = regNo.substring(0, 2);
      if (regNumber[regId] === undefined) {
        regNumber[regId] = 0;
      }
      regNumber[regId]++;
    }
    let fewestOrangeCars = '';
    let counter = Infinity;
    for (let key in regNumber) {
      const keysPerCity = regNumber[key];
      if (keysPerCity < counter) {
        counter = keysPerCity;
        fewestOrangeCars = key;
      }
    }
    return fewestOrangeCars;
  }
  
  function mostPopularModel(cars) {
    const models = {};
    for (let i = 0; i < cars.length; i++) {
      let car = cars[i];
      let modelType = car.model;
      if (models[modelType] === undefined) {
        models[modelType] = 0;
      }
      models[modelType]++;
    }
    let mostPopular = '';
    let counter = 0;
    for (let mdl in models) {
      const noPerModel = models[mdl];
      if (noPerModel > counter) {
        mostPopular = mdl;
        counter = noPerModel;
      }
    }
    return mostPopular;
  }
  
  function mostPopularCL(cars) {
    const models = {};
    const fromCL = cars.filter(car => car.reg_number.startsWith('CL'));
    for (let i = 0; i < fromCL.length; i++) {
      let car = fromCL[i];
      let modelType = car.model;
      if (models[modelType] === undefined) {
        models[modelType] = 0;
      }
      models[modelType]++;
    }
    let mostAtCL = '';
    let counter = 0;
    for (let mdl in models) {
      const noPerModel = models[mdl];
      if (noPerModel > counter) {
        mostAtCL = mdl;
        counter = noPerModel;
      }
    }
    return mostAtCL;
  }
  
  function leastPopularCF(cars) {
    const models = {};
    const fromCF = cars.filter(car => car.reg_number.startsWith('CF'));
    for (let i = 0; i < fromCF.length; i++) {
      let car = fromCF[i];
      let modelType = car.model;
      if (models[modelType] === undefined) {
        models[modelType] = 0;
      }
      models[modelType]++;
    }
    let mostAtCF = '';
    let counter = Infinity;
    for (let mdl in models) {
      const noPerModel = models[mdl];
      if (noPerModel <= counter) {
        mostAtCF = mdl;
        counter = noPerModel;
      }
    }
    return mostAtCF;
  }
  
  function carsForTown(town) {
    function nameReg(reg) {
      switch (reg) {
        case 'CJ':
          return "Paarl";
        case 'CY':
          return "Bellville";
        case 'CL':
          return "Stellenbosch";
        case 'CK':
          return "Malmesbury";
        case 'CA':
          return "Cape Town";
        case 'CF':
          return "Kuilsriver";
      }
    }
    let townCars = [];
    for (let i = 0; i < cars.length; i++) {
      let reg = cars[i].reg_number.substring(0, 2);
      let name = nameReg(reg);
      if (name == town) {
        townCars.push(cars[i]);
      }
    }
    return townCars;
  }
  
  function numberOfCars(color, town) {
    function nameReg(reg) {
      switch (reg) {
        case 'CJ':
          return "Paarl";
        case 'CY':
          return "Bellville";
        case 'CL':
          return "Stellenbosch";
        case 'CK':
          return "Malmesbury";
        case 'CA':
          return "Cape Town";
        case 'CF':
          return "Kuilsriver";
      }
    }
    let townCarsOfColor = [];
    for (let i = 0; i < cars.length; i++) {
      let col = cars[i].color;
      let reg = cars[i].reg_number.substring(0, 2);
      let name = nameReg(reg);
      if (name == town && color == col) {
        townCarsOfColor.push(cars[i]);
      }
    }
    return townCarsOfColor;
  }
  
  function numberOfCarsPerModel(color, model, town) {
    function townName(reg) {
      switch (reg) {
        case 'CJ':
          return "Paarl";
        case 'CY':
          return "Bellville";
        case 'CL':
          return "Stellenbosch";
        case 'CK':
          return "Malmesbury";
        case 'CA':
          return "Cape Town";
        case 'CF':
          return "Kuilsriver";
      }
    }
    let townCars = [];
    for (let i = 0; i < cars.length; i++) {
      let col = cars[i].color;
      let reg = cars[i].reg_number.substring(0, 2);
      let mod = cars[i].model;
      let name = townName(reg);
      if (name == town && color == col && mod == model) {
        townCars.push(cars[i]);
      }
    }
    return townCars;
  }
  
  function mostPopularColor(town) {
    function nameReg(reg) {
      switch (reg) {
        case 'CJ':
          return "Paarl";
        case 'CY':
          return "Bellville";
        case 'CL':
          return "Stellenbosch";
        case 'CK':
          return "Malmesbury";
        case 'CA':
          return "Cape Town";
        case 'CF':
          return "Kuilsriver";
      }
    }
    let townCars = [];
    for (let i = 0; i < cars.length; i++) {
      let reg = cars[i].reg_number.substring(0, 2);
      let name = nameReg(reg);
      if (name == town) {
        townCars.push(cars[i]);
      }
    }
    const colorMap = {};
    for (let i = 0; i < townCars.length; i++) {
      let current = townCars[i];
      if (colorMap[current.color] === undefined) {
        colorMap[current.color] = 0;
      }
      colorMap[current.color]++;
    }
    let popularColor = '';
    let counter = 0;
    for (let most in colorMap) {
      let currentColor = colorMap[most];
      if (currentColor > counter) {
        counter = currentColor;
        popularColor = most;
      }
    }
    return popularColor;
  }
   
  console.log