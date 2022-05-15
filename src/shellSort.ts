class shellSort{
    static sort(array:number[]):number[]{
        var middle:number=Math.floor(array.length/2)
        for (var gap:number=middle;gap>0;gap=Math.floor(gap/2)){
            for(var i= gap;i<array.length;i++){
                for(var i=gap;i<array.length;i++){
                    var j=i;
                    while(j-gap>=0 &&array[j]<array[j-gap]){
                        swap(array,j,j-gap);
                        j=j-gap
                    }
                }
            }
        }
        function swap(array:number[],a:number,b:number){
            array[a]=array[a]+array[b];
            array[b]=array[a]-array[b];
            array[a]=array[a]-array[b]
        }
        return array
    }
}
let array=[6,9,6,47,582,684,244,7,8,39,15,0]
shellSort.sort(array)
console.log(array)