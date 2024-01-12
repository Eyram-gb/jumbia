import React from 'react'
import { Modal } from './Modal'
import { ProductDetailModalProps } from './types'

const ProductDetailModal = ({ openProductDetailModal, SetOpenProductDetailModal }: ProductDetailModalProps) => {
function closeModal(){
SetOpenProductDetailModal(false);
}

  return (
      <Modal openModal={openProductDetailModal} closeModal={() => closeModal()}>
        <div className='w-[50vw] h-[50vh] bg-white'>we ae live eeey</div>
      </Modal>
  )
}

export default ProductDetailModal