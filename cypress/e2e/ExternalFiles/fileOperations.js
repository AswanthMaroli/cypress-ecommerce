


function readDataFromFile(filename) {
    return cy.readFile(filename);
  }
  

  function writeDataToFile(filename, data) {
    return cy.writeFile(filename, data);
  }
  
  
  function clearDataInFile(filename) {
    return cy.writeFile(filename, []);
  }
  
  
  export default {
    readDataFromFile,
    writeDataToFile,
    clearDataInFile,
  };
  