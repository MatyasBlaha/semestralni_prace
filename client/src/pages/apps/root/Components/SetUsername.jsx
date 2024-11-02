import { useContext, useState } from "react";
import { UserContext } from "../../../../store/user-context.jsx";
import useModal from "../../../../hooks/useModal.jsx"; // Import the custom hook
import Modal from '../../../../Components/UI/Modal.jsx';

export default function SetUsername() {
    const { user, setUsername } = useContext(UserContext);
    const [inputValue, setInputValue] = useState('');
    const { isOpen: modalIsOpen, openModal, closeModal } = useModal();

    function handleSubmit(event) {
        event.preventDefault();
        setUsername(inputValue);
        setInputValue('');
        openModal();
    }

    return (
        <>
            {localStorage.getItem('username') === null && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">Set username</button>
                </form>
            )}
            <Modal open={modalIsOpen} onClose={closeModal}>
                <p>Name changed</p>
            </Modal>
        </>
    );
}
