import { Dialog, Transition } from '@headlessui/react';
import { ModalProps } from './types';
import React from 'react';

export const Modal = ({
    openModal,
    closeModal,
    children,
    initialFocus,
}: ModalProps) => {
    return (
        <>
            <Transition appear show={openModal} as={React.Fragment}>
                <Dialog
                    as='div'
                    initialFocus={initialFocus}
                    className='relative z-30'
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={React.Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-75' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-5'>
                            <Transition.Child
                                as={React.Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel className='w-full transform transition-all'>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
