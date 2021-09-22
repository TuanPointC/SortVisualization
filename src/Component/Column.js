import classes from './Column.module.css'
import StoreModule from '../store/StoreModule';
import { useContext } from 'react'
function Column(props) {
    const contextModule = useContext(StoreModule)

    let bg = {
        height: `${props.height}px`,
        left: `${props.properties.index * 60}px`,
        backgroundColor: contextModule.orangeBackground.includes(props.properties.index)?'orange' : contextModule.columnChange.includes(props.properties.index) ? 'green':'',
    }

    return <div className={classes.column}
        style={bg}
    >
        {props.properties.value}
    </div>
}

export default Column;