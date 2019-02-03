module.exports = { 
    sort: function(arr, sortCriteria, sortType) {
        console.log(sortCriteria, sortType)
        if(sortCriteria == 'name' || sortCriteria == 'country') {
            arr.sort(function(a, b){
                if (a[sortCriteria] < b[sortCriteria])
                    return -1;
                if (a[sortCriteria] > b[sortCriteria])
                    return 1;
                return 0;
            });

            if(sortType == 'descending') {
                return arr.reverse();
            } else {
                return arr;
            }
            
        } else if(sortCriteria == "score" || sortCriteria == "dateInMiliSeconds") {
            if(sortType == 'descending') {
                return arr.sort(function(a, b){
                    return b[sortCriteria] - a[sortCriteria];
                })
            } else {
                return arr.sort(function(a, b){
                    return a[sortCriteria] - b[sortCriteria];
                })
            }
        } else {
            return arr.sort(function(a, b){
                if(b.score == a.score) {
                    return a.dateInMiliSeconds - b.dateInMiliSeconds
                }
                return b.score - a.score;
            })
        }
        
        
    }
}