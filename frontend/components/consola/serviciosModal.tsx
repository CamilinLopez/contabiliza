import React, { useState, useRef, useEffect } from 'react';

interface ServiciosModalProps {
  onClose: () => void;
}

const ServiciosModal: React.FC<ServiciosModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleButtonClick = (event: MouseEvent) => {
      if (isOpen && modalRef.current && buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const modalHeight = modalRef.current.clientHeight;
        const modalWidth = modalRef.current.clientWidth;
        const top = buttonRect.bottom + window.scrollY;
        const left = buttonRect.left + window.scrollX - modalWidth / 2 + buttonRect.width / 2;

        modalRef.current.style.top = `${top}px`;
        modalRef.current.style.left = `${left}px`;
      }
    };

    document.addEventListener('click', handleButtonClick);

    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className="modal-container" style={{ display: isOpen ? 'block' : 'none', position: 'absolute', zIndex: 999 }}>
      <div className="modal" ref={modalRef} style={{ backgroundColor: '#232f3e', padding: '22px', margin:'18px', borderRadius: '0px', color: 'white', position: 'absolute', right:'-110px'}}>
  
        <ul>
        <ul>
          <li><a href="consola/crear_empresa" onClick={handleClose} style={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'orange'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Crear Empresa </a></li>
          <br></br>
          <li><a href="" onClick={handleClose} style={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'orange'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Servicio 2</a></li>
          <br></br>
          <li><a href="" onClick={handleClose} style={{ cursor: 'pointer', color: 'white', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = 'orange'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Servicio 3 </a></li>
        </ul>
        </ul>
      </div>
    </div>
  );
}

export default ServiciosModal;
