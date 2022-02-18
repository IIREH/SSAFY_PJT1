// import { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Modal = ({ handleClose, open, onDelete }) => {
//   const ref = useRef();
  
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (open && ref.current && !ref.current.contains(e.target)) {
//         handleClose();
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [open, handleClose]);
//   return (
//     <div className={`${open ? "modal-container-custom" : "close-custom"}`}>
//       <div ref={ref} className="modal-custom">
//         <h2>프로필 상세화면 모달창 입니다! </h2>
//         <button className="button" onClick={handleClose}>
//           Close
//         </button>
//         <button>
//           <Link to="/updateUserInfo">회원정보수정</Link>
//         </button>
//         <button className="button" onClick={onDelete}>회원탈퇴</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
