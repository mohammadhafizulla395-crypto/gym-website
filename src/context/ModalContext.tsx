import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface ModalState {
  isOpen: boolean;
  type: string;
  data: Record<string, string>;
}

interface ModalContextType {
  modal: ModalState;
  openModal: (type: string, data?: Record<string, string>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: '',
    data: {},
  });

  const openModal = useCallback((type: string, data: Record<string, string> = {}) => {
    setModal({ isOpen: true, type, data });
  }, []);

  const closeModal = useCallback(() => {
    setModal({ isOpen: false, type: '', data: {} });
  }, []);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
