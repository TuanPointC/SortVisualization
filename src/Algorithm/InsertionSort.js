export async function InsertionSort(contextModule) {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (let i = 0; i < contextModule.listArray.length; i++) {
        let key = contextModule.listArray[i].value;
        let j = i - 1;

        await contextModule.changeColumnChange([i])
        await sleep(1000)
        while (j >= 0 && contextModule.listArray[j].value > key) {
            await contextModule.changeorangeBackground([j+1, j])
            await sleep(800)
            contextModule.listArray[j + 1].value = contextModule.listArray[j].value;
            j = j - 1;
        }
        contextModule.listArray[j + 1].value = key;
    }
    contextModule.changeColumnChange([])
}
