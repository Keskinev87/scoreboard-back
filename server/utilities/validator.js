module.exports = {
    validateName: function(name) {
        let nameMaxChar = 80;
        let nameRegex = /^[a-z\d\s]+$/i;
        let reg = new RegExp(nameRegex)

        if(name.length > nameMaxChar)
            return false;
        else if(!reg.test(name))
            return false;
        else
            return true;
    },
    validateScore: function(score) {
        let scoreRegex = /^[0-9]*$/;
        let reg = new RegExp(scoreRegex);

        if(!reg.test(score))
            return false;
        else if(score > 100)
            return false;
        else 
            return true;
    },
    validateCountry: function(country) {
        let countryMaxChar = 50;
        let countryRegex = /^[a-z\d\s]+$/i;
        let reg = new RegExp(countryRegex);

        if(country.length > countryMaxChar)
            return false;
        else if(!reg.test(country))
            return false;
        else
            return true;
    },
    validateDate: function(date) {
        let dateRegex = /\d{4}-[0-1]\d-[0-3]\d\)?/gm;
        let reg = new RegExp(dateRegex);
        
        if(!reg.test(date))
            return false;
        else
            return true
    }
}
