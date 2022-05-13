class binarySearch{
    static search(arrays: number[],searchValue:number):number{
        let low =0;
        let high=arrays.length -1;
        let mid =0;
        while(low<=high){
            mid=Math.floor((low+high)/2);
            if(arrays[mid]===searchValue){
                return mid;
            }else if(arrays[mid] < searchValue){
                low=mid+1;
            }else if(arrays[mid] > searchValue){
                high=mid-1;
            }
        
        }
        return -1;
    }
}

let binary= [0,2,3,4,5,6,7,9,12]
console.log(binarySearch.search(binary,9))
