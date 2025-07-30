import React from 'react'
import {RiHomeLine, 
        RiArchive2Line, 
        RiTodoLine, 
        RiMoneyDollarBoxLine, 
        RiSettings4Line, 
        RiLogoutBoxLine,
        RiShoppingBagLine,
        RiDraftFill,
        RiTruckLine,
        RiFileAddLine,
        RiRestaurantLine,
        RiRestaurant2Line,
        RiHandCoinLine,
    } from 'react-icons/ri'
import { Links } from 'react-router'

export const navbarLinks = [
    {
        title: 'Overview',
        links: [
            {
                name:'Principal',
                icon: <RiHomeLine size={17}/>,
                to: 'main'
            },
            {
                name: 'Almacen',
                icon:<RiArchive2Line size={17}/>,
                to: 'store',
                options: [
                    {
                        name: 'Productos',
                        to: 'products',
                        icon: <RiShoppingBagLine size={17}/>
                    },
                    {
                        name: 'Categorias',
                        to: 'categories',
                        icon: <RiDraftFill size={17}/>
                    },
                    {
                        name: 'Proveedores',
                        to: 'providers',
                        icon: <RiTruckLine size={17}/>
                    },
                    {
                        name: 'Entradas',
                        to: 'entries',
                        icon: <RiFileAddLine size={17}/>
                    }
                ]
            },
            {
                name: 'Menu de comidas',
                icon: <RiTodoLine size={17}/>,
                to: 'food',
                options: [
                    {
                        name: 'Ingredientes',
                        to: 'ingredients',
                        icon: <RiRestaurantLine size={17}/>

                    },
                    {
                        name: 'Platos',
                        to: 'dishes',
                        icon: <RiRestaurant2Line size={17}/>
                    },
                    {
                        name: 'Categorias',
                        to: 'food-categories',
                        icon: <RiHandCoinLine size={17}/>
                    }
                ]   
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
