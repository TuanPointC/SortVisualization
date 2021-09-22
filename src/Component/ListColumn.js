import Column from '../Component/Column';
import React, { useContext } from 'react'
import StoreModule from '../store/StoreModule';
import classes from './ListColumn.module.css'
function ListColumn(props) {
    const contextModule = useContext(StoreModule)
    const listCl = React.useRef()
    const style = {
        width: `${contextModule.listArray.length*50+(contextModule.listArray.length)*10}px`
    }

    return <div className={classes.listColumn} ref={listCl} style={style}>
        {contextModule.listArray.map((e, index) =>
            <Column key={index}
                properties={e}
                height={Math.round(350 / props.maxInput * e.value)}

            />)
        }
    </div>
}

export default ListColumn;