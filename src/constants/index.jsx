import React from 'react'
import {RiHomeLine, 
        RiArchive2Line, 
        RiTodoLine, 
        RiMoneyDollarBoxLine, 
        RiSettings4Line, 
        RiLogoutBoxLine} from 'react-icons/ri'
import { Links } from 'react-router'

export const navbarLinks = [
    {
        title: 'Overview',
        links: [
            {
                name:'Principal',
                icon: <RiHomeLine size={17}/>,
                to: 'home'
            },
            {
                name: 'Almacen',
                icon:<RiArchive2Line size={17}/>,
                to: 'store'
            },
            {
                name: 'Menu de comidas',
                icon: <RiTodoLine size={17}/>,
                to: 'food_menu'
            },
            {
                name: 'Factura',
                icon: <RiMoneyDollarBoxLine size={17}/>,
                to: 'invoice'
            }
        ]
    },
    {
        title: 'Configuraciones',
        links: [
            {
                name: 'Configuraicion',
                icon: <RiSettings4Line size={17}/>,
                to: 'settings'
            },
            {
                name: 'Salir',
                icon: <RiLogoutBoxLine size={17}/>,
                to: 'logout'
            }
        ]
    }
]
