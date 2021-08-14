import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './menu-list.style.scss'


const titleArray = ['Hats', 'Jackets', 'Sneakers', 'Men', 'Women'];

const MenuList = () => (
    <div className='menu-list'>
        {titleArray.map(title => <MenuItem title = {title.toUpperCase()}/>)}
    </div>
)

export default MenuList
