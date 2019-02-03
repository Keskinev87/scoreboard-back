module.exports = {
    getLevel: function(score) {
        switch(true) {
            case score <= 20: 
                return 1;
            case score <= 40:
                return 2;
            case score <= 60:
                return 3;
            case score <= 80:
                return 4;
            case score <= 100:
                return 5;
            default:
                return 0;
            }
    }
}
