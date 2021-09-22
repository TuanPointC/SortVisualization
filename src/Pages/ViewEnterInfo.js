import classes from './ViewEnterInfo.module.css'
import React, { useRef, useContext, useState } from 'react'
import StoreModule from '../store/StoreModule';
import ListColumn from '../Component/ListColumn';
import { Link } from 'react-router-dom'
function ViewEnterInfo() {
    const inputNumber = useRef();
    const contextModule = useContext(StoreModule)
    const [maxInput, setMaxInput] = useState(15)

    const handleClick = () => {
        let larray = inputNumber.current.value.replace(/\D/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
        larray = larray.map(x => +x)
        setMaxInput(Math.max(...larray))

        //create list array
        let listValueAndIndex = []
        larray.map((v, i) => listValueAndIndex.push({ value: v, index: i }))
        contextModule.addListArray(listValueAndIndex)
    }

    return <div className={classes.enteringInfor}>
        <ListColumn maxInput={maxInput} />

        <div className={classes.manual}>
            <input type="text"
                className={classes.input}
                ref={inputNumber}
                placeholder="Enter new array"
            />
            <button
                className={classes.buttonAdd}
                onClick={handleClick}
            >Add</button>
            <Link to='/ViewChoosingSort'>
                <button className={classes.buttonNext}>
                    Next
                </button></Link>
        </div>

    </div>
}

export default ViewEnterInfo;