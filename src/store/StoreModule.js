import React, { createContext, useState } from 'react'

const StoreModule = createContext({
    listArray: [],
    columnChange: [],
    addListArray: (inputArray) => { },
    changeColumnChange: (arr) => { },
    changeIndexColumn: (id) => { },
    changeorangeBackground:(arr)=>{},
    orangeBackground:[]
})

export function StoreModuleProvider(props) {
    const [listArray, setListArray] = useState(
        [
            { value: 10, index: 0 },
            { value: 9, index: 1 },
            { value: 8, index: 2 },
            { value: 7, index: 3 },
            { value: 6, index: 4 },
            { value: 5, index: 5 },
            { value: 4, index: 6 },
            { value: 3, index: 7 },
            { value: 2, index: 8 },
            { value: 1, index: 9 },
        ]
    )
    const [columnChange, setColumnChange] = useState([])
    const [orangeBackground,setOrangeBackground] = useState([])


    const addListArray = (inputArray) => setListArray(inputArray);
    const changeColumnChange = (arr) => setColumnChange(arr)
    const changeorangeBackground =(arr)=> setOrangeBackground(arr)

    const context = {
        listArray: listArray,
        addListArray: addListArray,
        columnChange,
        changeColumnChange,
        changeorangeBackground,
        orangeBackground
    }
    return <StoreModule.Provider value={context}>
        {props.children}
    </StoreModule.Provider>
}

export default StoreModule;