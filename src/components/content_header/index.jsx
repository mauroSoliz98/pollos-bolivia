import React from 'react'
import TitleHeader from './TitleHeader'
import { AddButton } from '../AddButton'
import { MyButton } from '../MyButton'
import {
  RiLoopLeftFill,
  RiDeleteBin6Line,
  RiEditLine,
  RiDownload2Line,
  RiUpload2Line
} from 'react-icons/ri'

const ContentHeader = ({labelTitle,labelButtonNew, onAdd}) => {
    return (
        <TitleHeader title={labelTitle}>
            <div className='flex items-center gap-2'>
                <AddButton onClick={onAdd} label={labelButtonNew} />
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
    )
}

export default ContentHeader