class BinarySearch{
    static search(array:number[], searchValue:number):number{
        let low:number=0
        let high:number=array.length-1
        let mid:number=0
        while(low<=high){
            mid =Math.floor((low+high)/2)
            if(array[mid]===searchValue){
                return mid
            }else if(array[mid]<searchValue){
                low= mid+1
            }else if(array[mid]>searchValue){
                high= mid-1
            }
        }
        return -1
    }
}

let array1=[2255,99,69,78,6,7]
let result=BinarySearch.search(array1,69)
console.log(result)
