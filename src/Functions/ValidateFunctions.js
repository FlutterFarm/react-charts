const ValidateFunctions = {
    validateField: function(e, name, checking,checkbox){
        console.log(checkbox);
        if (checkbox === true) {
            return true;
          } else {
            return false;
          }        
    }
}

export default ValidateFunctions;
