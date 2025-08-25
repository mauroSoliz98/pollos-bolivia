import { useState } from 'react'
import ContentHeader from '../../../components/content_header'

export const Categories = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex flex-col gap-4'>
      <ContentHeader 
        labelTitle={"Categorías"} 
        labelButtonNew={"Nueva categoría"} 
        onAdd={() => setIsOpen(true)}
      />
    </div>
  )
}
