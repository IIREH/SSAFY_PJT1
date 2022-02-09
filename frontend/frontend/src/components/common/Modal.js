import { useEffect, useRef } from "react";

const Modal = ({ handleClose, open, onDelete }) => {
  const ref = useRef();
  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, handleClose]);
  return (
    <div className={`${open ? "modal-container" : "close"}`}>
      <div ref={ref} className="modal">
        <h2>프로필 상세화면 모달창 입니다 ! 쿠키모양을 누르면 모달창이 떠요 !</h2>
        <button className="button" onClick={handleClose}>
          Close
        </button>
        <button className="button" onClick={onDelete}> 회원탈퇴</button>
      </div>
    </div>
  );
};

export default Modal;
