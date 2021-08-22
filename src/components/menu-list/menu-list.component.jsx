import React, {useState} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './menu-list.style.scss'
import { ELEMENTS } from './menu-list.data'




const MenuList = () => {
    const [itemElements, setTitleArray] = useState(ELEMENTS);
    return(
        <div className='menu-list'>
            {itemElements.map(({id, ...otherElementProps}) => 
                            <MenuItem key={id} {...otherElementProps} /> )}
        </div>
    )
}

export default MenuList
