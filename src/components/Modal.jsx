import { Fragment } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition
} from '@headlessui/react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children, title }) {
  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={onClose}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/40 transition-opacity" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            show={isOpen}
          >
            <DialogPanel
              className="
                w-full max-w-3xl        /* Wider modal for charts */
                max-h-[90vh]            /* Prevents overflowing past screen */
                overflow-y-auto          /* Scroll when large */
                bg-white rounded-xl
                shadow-2xl p-6
                relative
              "
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              {/* Title */}
              {title && (
                <Dialog.Title className="text-xl font-semibold mb-4 pr-8">
                  {title}
                </Dialog.Title>
              )}

              {/* Modal Content */}
              <div className="w-full">
                {children}
              </div>

            </DialogPanel>
          </Transition>
        </div>
      </Dialog>
    </Transition>
  );
}
