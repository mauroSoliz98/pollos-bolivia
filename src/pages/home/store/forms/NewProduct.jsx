import React from 'react'
import Card from '../../../../components/Card'
import { FormInput, FormButton, FormLargeInput, FormSelect } from '../../../../components/form_components'

export const NewProduct = ({onClose}) => {
  return (
    <>
        {/* Overplay principal - Cubre toda la pantalla */}
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* Backdrop - Fondo oscuro semitransparente*/}
                <div className="fixed inset-0 bg-black opacity-50 transition-opacity" aria-hidden="true" onClick={onClose}/>
                    {/* Modal content - Contenido del modal */}
                    <Card title="Nuevo Producto" closeCard={onClose}>
                        <form className='flex flex-col gap-4'>
                          <FormInput label="Nombre del Producto" type="text" required />
                          <FormSelect label="Categoría" required>
                            <option value="">Seleccione una categoría</option>
                            <option value="1">Categoría 1</option>
                            <option value="2">Categoría 2</option>
                          </FormSelect>
                          <FormLargeInput label="Descripción" type="text" required />
                          <FormSelect label="tipo de paquete" required>
                            <option value="">Seleccione un tipo de paquete</option>
                            <option value="1">Paquete 1</option>
                            <option value="2">Paquete 2</option>
                          </FormSelect>
                          <FormButton>Guardar</FormButton>
                        </form>
                    </Card>
                
            </div>
        </div>
    </>
  )
}
