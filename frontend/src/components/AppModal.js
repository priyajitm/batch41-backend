import Modal from 'react-modal';

const AppModal = ({showModal, handleCloseModal, title}) => {
      
    return (
          <Modal 
             isOpen={showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={handleCloseModal}
            className="modal"
          >
            <p>{title}</p>
          </Modal>
      );
}

export default AppModal;