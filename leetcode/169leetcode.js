let nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    let obj = {};
    for ( let i = 0; i < nums.length; i++){
        if(obj[nums[i]] == undefined){
            obj[nums[i]] = 1
        }
        else{
            obj[nums[i]]++;
        }
    }
    let objKeys = Object.keys(obj);
    console.log(objKeys)
    for ( let i = 0; i < objKeys.length; i++){
        if(obj[objKeys[i]] > nums.length / 2){
            return (objKeys[i])
        }
    }
};

let output = majorityElement(nums)  ;
console.log(output)