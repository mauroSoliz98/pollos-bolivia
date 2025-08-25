import {useState} from 'react'
import { AddButton } from '../../../components/AddButton'
import {
  RiLoopLeftFill,
  RiDeleteBin6Line,
  RiEditLine,
  RiDownload2Line,
  RiUpload2Line
} from 'react-icons/ri'
import { MyButton } from '../../../components/MyButton'
import TitleHeader from '../../../components/TitleHeader'
import DataTable from 'react-data-table-component'
import { productos } from '../../../constants'
import { NewProduct } from './forms/NewProduct'

export const Products = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {columns, data} = productos

  return (
    <div className='flex flex-col gap-4'>
      <TitleHeader>
        <div className='flex items-center gap-2'>
          <AddButton onClick={() => setIsOpen(true)} label={"Nuevo producto"} />
          <MyButton><RiLoopLeftFill size={20} /></MyButton>
          <MyButton><RiEditLine size={20} /></MyButton>
          <MyButton><RiDeleteBin6Line size={20} /></MyButton>
        </div>
        <div className='flex items-center gap-2'>
          <MyButton>
            <div className='flex items-center gap-1'>
              <RiUpload2Line size={20} />
              <p>Importar</p>
            </div>
          </MyButton>
          <MyButton>
            <div className='flex items-center gap-1'>
              <RiDownload2Line size={20} />
              <p>Exportar</p>
            </div>
          </MyButton>
        </div>
      </TitleHeader>
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
