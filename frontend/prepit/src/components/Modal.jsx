import React from 'react';

const Modal = ({ children, isOpen, onClose, hideHeader, title }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40'>
      <div className='relative flex flex-col w-full max-w-md bg-white shadow-2xl rounded-xl overflow-hidden max-h-[90vh]'>
        {/* Header */}
        {!hideHeader && (
          <div className='flex items-center justify-between p-4 border-b'>
            <h3 className='text-lg font-semibold'>{title || 'Modal Title'}</h3>
            <button
              type='button'
              className='p-2 text-gray-500 hover:text-gray-800'
              onClick={onClose}
            >
              <svg
            className=''
            aria-hidden='true'
            xmlns='http"//www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1l6 6m0 0l6 6M7 7l6-6m7 7l-6 6'
            />

          </svg>
            </button>
          </div>
        )}

        {/* Content */}
        <div className='flex-1 overflow-y-auto custom-scrollbar'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
