export async function BubleSort(contextModule) {
    //const contextModule = useContext(StoreModule)
    var copylist = []
    contextModule.listArray.map(e => copylist.push(e.value))

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    var indexIsdone=[]
    for (let i = 0; i < copylist.length; i++) {
        for (var j = 0; j < copylist.length - 1; j++) {
            contextModule.changeColumnChange([j, j + 1])
            await sleep(500)
            if (copylist[j] > copylist[j + 1]) {

                let k = copylist[j];
                copylist[j] = copylist[j + 1];
                copylist[j + 1] = k;


                for (let m = 0; m < copylist.length; m++) {
                    if (contextModule.listArray[m].value === copylist[j]) {
                        contextModule.listArray[m].index = j
                        break;
                    }
                }
                for (let m = 0; m < copylist.length; m++) {
                    if (contextModule.listArray[m].value === copylist[j + 1]) {
                        contextModule.listArray[m].index = j + 1
                        break
                    }
                }


            }
            await sleep(200)
        }
        indexIsdone.push(copylist.length-i-1)
        contextModule.changeorangeBackground(indexIsdone)
    }
    contextModule.changeColumnChange([])
}
