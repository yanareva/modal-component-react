import {useEffect} from "react";
import './Modal.css'

function Modal({ setOpenModal,isOpen }) {
    const closeModal = () => {
        setOpenModal(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.classList.contains('modalBackground')) {
                closeModal();
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    return (
        // <CSSTransition
        //     in={isOpen}
        //     timeout={300}
        //     classNames="modal"
        //     unmountOnExit
        //     onExited={closeModal}
        // >

        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={closeModal}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}
export default Modal;
