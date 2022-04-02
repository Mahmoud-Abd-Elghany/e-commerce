import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './menu-list.style.scss'
import { useSelector } from 'react-redux'


const MenuList = () => {
    const menuListData= useSelector(state => state.menulist);
    return(
        <div className='menu-list'>
            {menuListData.map(({id, ...otherElementProps}) => 
                            <MenuItem key={id} {...otherElementProps} /> )}
        </div>
    )
}

export default MenuList
