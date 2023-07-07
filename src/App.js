import { useRef } from "react";
import Modal from "./components/Modal";
import avatar from "./images/profile1.jpg";
import "./App.css";

function App() {
  const modalRef = useRef();

  return (
    <div className="container">
      <button className="btn-primary" onClick={() => modalRef.current.open()}>
        Accept friend
      </button>
      <Modal className="flex-container" ref={modalRef}>
        <div className="body-top">
          <div className="profile-container">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="profile-text">
            <h3 className="name">Catherin Romanov</h3>
            <span className="online">online</span>
          </div>
        </div>
        <div className="body-bottom">
          <h3 className="title">Inbox messages</h3>
          <p className="text">
            Hi Lucas, I hope we can be friends and chat sometime...
          </p>
          <button>Accept Invite</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
