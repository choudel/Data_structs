class InsertSort{
    static sort(arrays:number[]){
        for (let index = 0; index < arrays.length; index++) {
            const insertElement = arrays[index];
            let insertPosition= index;
            for (let j = insertPosition-1; j >= 0; j--) {
                if(insertElement<arrays[j]){
                    arrays[j+1]=arrays[j]
                    insertPosition--;
                }
                
            }  
            arrays[insertPosition]=insertElement;          
        }

    }
}
let test4: number[] = [25, 96, 87, 47, 69, 7, 64];
console.log(`before: [ ${test4} ] =>`);
InsertSort.sort(test4);
console.log(`after_: [ ${test4} ]`);