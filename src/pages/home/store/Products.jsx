import {useState} from 'react'
import ContentHeader from '../../../components/content_header'
import DataTable from 'react-data-table-component'
import { productos } from '../../../constants'
import { NewProduct } from './forms/NewProduct'

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {columns, data} = productos

  return (
    <div className='flex flex-col gap-4'>
      <ContentHeader 
        labelTitle={"Productos"} 
        labelButtonNew={"Nuevo Producto"} 
        onAdd={() => setIsOpen(true)} 
      />
      {isOpen && <NewProduct onClose={() => setIsOpen(false)} /> }
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        highlightOnHover
        pointerOnHover
        responsive
      />
    </div>
  )
}
