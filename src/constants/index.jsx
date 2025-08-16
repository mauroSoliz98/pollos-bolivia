import React from 'react'
import {
    RiHomeLine,
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
import { data, Links } from 'react-router'

export const navbarLinks = [
    {
        title: 'Overview',
        links: [
            {
                name: 'Principal',
                icon: <RiHomeLine size={17} />,
                to: 'main'
            },
            {
                name: 'Almacen',
                icon: <RiArchive2Line size={17} />,
                to: 'store',
                options: [
                    {
                        name: 'Productos',
                        to: 'store/products',
                        icon: <RiShoppingBagLine size={17} />
                    },
                    {
                        name: 'Categorias',
                        to: 'store/categories',
                        icon: <RiDraftFill size={17} />
                    },
                    {
                        name: 'Proveedores',
                        to: 'store/suppliers',
                        icon: <RiTruckLine size={17} />
                    },
                    {
                        name: 'Entradas',
                        to: 'store/entries',
                        icon: <RiFileAddLine size={17} />
                    }
                ]
            },
            {
                name: 'Menu de comidas',
                icon: <RiTodoLine size={17} />,
                to: 'food',
                options: [
                    {
                        name: 'Ingredientes',
                        to: 'food/ingredients',
                        icon: <RiRestaurantLine size={17} />

                    },
                    {
                        name: 'Platos',
                        to: 'food/dishes',
                        icon: <RiRestaurant2Line size={17} />
                    },
                    {
                        name: 'Categorias',
                        to: 'food/categories',
                        icon: <RiHandCoinLine size={17} />
                    }
                ]
            },
            {
                name: 'Factura',
                icon: <RiMoneyDollarBoxLine size={17} />,
                to: 'invoice'
            }
        ]
    },
    {
        title: 'Configuraciones',
        links: [
            {
                name: 'Configuraicion',
                icon: <RiSettings4Line size={17} />,
                to: 'settings'
            },
            {
                name: 'Salir',
                icon: <RiLogoutBoxLine size={17} />,
                to: 'logout'
            }
        ]
    }
]

export const productos = {
    columns: [
        { name: 'ID', selector: row => row.id },
        { name: 'Nombre', selector: row => row.name },
        { name: 'Descripcion', selector: row => row.description },
        { name: 'Categoria', selector: row => row.product_type_id },
        { name: 'Tipo de paquete', selector: row => row.packaging_type }
    ],
    data: [
        {
            "id": 1001,
            "name": "Arroz Premium",
            "product_type_id": 2001,
            "description": "Arroz blanco de grano largo, ideal para consumo diario.",
            "packaging_type": "saco"
        },
        {
            "id": 1002,
            "name": "Azúcar Morena",
            "product_type_id": 2002,
            "description": "Azúcar morena natural sin refinar, con alto contenido de melaza.",
            "packaging_type": "bolsa"
        },
        {
            "id": 1003,
            "name": "Aceite de Girasol",
            "product_type_id": 2003,
            "description": "Aceite vegetal 100% puro, extraído de semillas de girasol.",
            "packaging_type": "botella"
        },
        {
            "id": 1004,
            "name": "Harina de Trigo",
            "product_type_id": 2001,
            "description": "Harina refinada de trigo para panificación y repostería.",
            "packaging_type": "saco"
        },
        {
            "id": 1005,
            "name": "Leche Entera en Polvo",
            "product_type_id": 2004,
            "description": "Leche en polvo entera, enriquecida con vitaminas y minerales.",
            "packaging_type": "bolsa"
        },
        {
            "id": 1006,
            "name": "Café Molido",
            "product_type_id": 2005,
            "description": "Café tostado y molido, aroma intenso y sabor equilibrado.",
            "packaging_type": "bolsa"
        },
        {
            "id": 1007,
            "name": "Lentejas Verdes",
            "product_type_id": 2001,
            "description": "Lentejas verdes seleccionadas, ideales para guisos y sopas.",
            "packaging_type": "saco"
        },
        {
            "id": 1008,
            "name": "Sal Yodada",
            "product_type_id": 2002,
            "description": "Sal refinada con yodo, recomendada para el consumo humano.",
            "packaging_type": "bolsa"
        }
    ]
}

