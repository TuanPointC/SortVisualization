export async function SelectionSort(contextModule) {
    var copylist = []
    contextModule.listArray.map(e => copylist.push(e.value))

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    var indexIsdone=[]
    for (let i = 0; i < copylist.length; i++) {
        for (let j = i+1; j < copylist.length; j++) {
            contextModule.changeColumnChange([i, j])
            await sleep(1000)
            if (copylist[i] > copylist[j]) {

                let k = copylist[i];
                copylist[i] = copylist[j];
                copylist[j] = k;


                for (let m = 0; m < copylist.length; m++) {
                    if (contextModule.listArray[m].value === copylist[i]) {
                        contextModule.listArray[m].index = i
                        break;
                    }
                }
                for (let m = 0; m < copylist.length; m++) {
                    if (contextModule.listArray[m].value === copylist[j]) {
                        contextModule.listArray[m].index = j
                        break
                    }
                }


            }
            await sleep(200)
        }
        indexIsdone.push(i)
        contextModule.changeorangeBackground(indexIsdone)
    }
    contextModule.changeColumnChange([])
}
