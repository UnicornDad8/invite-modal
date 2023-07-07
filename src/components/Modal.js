import { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css";

const Modal = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setVisible(true),
      close: () => setVisible(false),
    };
  });

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { delay: 0.8 } }}
            onClick={() => setVisible(false)}
            className="blur"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.8 } }}
            exit={{ scale: 0, transition: { delay: 0.8 } }}
            className="modal-box"
          >
            <div className="header">
              <h3>Accept Friend Invite</h3>
              <div className="icon" onClick={() => setVisible(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            <div
              className="modal-body"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.8, duration: 0.8 },
              }}
              exit={{ y: 100, opacity: 0, transition: { duration: 0.8 } }}
            >
              {props.children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
export default Modal;
