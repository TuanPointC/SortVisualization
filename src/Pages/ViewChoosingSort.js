import classes from './ViewChoosingSort.module.css';
import { Link } from 'react-router-dom'
import { BubleSort } from '../Algorithm/BubleSort';
import { SelectionSort } from '../Algorithm/SelectionSort';

import { useContext } from 'react'
import StoreModule from '../store/StoreModule';
import { InsertionSort } from '../Algorithm/InsertionSort'

function ViewChoosingSort() {
    const contextModule = useContext(StoreModule)
    const handleClick = () => {
        BubleSort(contextModule);
    }
    const handleClick1 = () => {
        SelectionSort(contextModule);
    }
    const handleClick2 = () => {
        InsertionSort(contextModule);
    }
    return <div className={classes.board} >
        <h1>Choose type of sorting</h1>
        <Link to='/ViewVisual'>
            <button className={classes.buttonNext} onClick={handleClick}>
                Buble sort
            </button></Link>
        <Link to='/ViewVisual'>
            <button className={classes.buttonNext} onClick={handleClick1}>
                Selection sort
            </button></Link>
        <Link to='/ViewVisual'>
            <button className={classes.buttonNext} onClick={handleClick2}>
                Insertion sort
            </button></Link>
    </div>

}
export default ViewChoosingSort;