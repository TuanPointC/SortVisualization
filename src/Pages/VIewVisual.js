import classes from './ViewVisual.module.css'
import React, { useState,useContext } from 'react'
import ListColumn from '../Component/ListColumn';
import StoreModule from '../store/StoreModule';
//import { Link } from 'react-router-dom'
function ViewVisual() {
    const contextModule = useContext(StoreModule)
    var copylist = []
    contextModule.listArray.map(e => copylist.push(e.value))

    const [maxInput,] = useState(Math.max(...copylist))

    return <div className={classes.view}>
        <ListColumn maxInput={maxInput} />

    </div>
}

export default ViewVisual;