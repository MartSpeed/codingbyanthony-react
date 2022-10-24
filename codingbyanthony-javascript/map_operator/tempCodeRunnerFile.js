const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1
    }else{
        return -1
    }
})
console.log(sortedCompanies)