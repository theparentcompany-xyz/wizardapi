import { ModalTriggersType } from '../types';
import styles from './ModalContentStyles.module.css';
import PrimaryButton from '../../Buttons/PrimaryButton';
import Modal from '../../Modal/Modal';
import { preRegister, validateEmail } from '../../../../../apis/authentication';
import BinaryPopup from './BinaryPopup/BinaryPopup';

import { useContext } from 'react';
import { ModalContext } from '../context';

const ValidateEmail = ({ Modalname }: { Modalname: string }) => {
  const { modalTriggers, setModalTriggers, email, setEmail } =
    useContext(ModalContext);

  return (
    <>
      {modalTriggers.showBinaryPopup && (
        <BinaryPopup
          onClick={() => {
            preRegister(email, setModalTriggers, modalTriggers);
          }}
          content={
            "It looks like you haven't registered with us, Register Now with a single click."
          }
          buttonText={'Register Now'}
          Modalname={'showBinaryPopup'}
        />
      )}
      {modalTriggers && modalTriggers[Modalname as keyof ModalTriggersType] && (
        <Modal
          modalTriggers={modalTriggers}
          setModalTriggers={setModalTriggers}
          Modalname={Modalname}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Login</div>
            <div className={styles.modalInputContainer}>
              <div className={styles.modalInputLabel}>
                Email Address<span>*</span>
              </div>
              <input
                value={email}
                placeholder="Enter your email address"
                onChange={(e) => setEmail && setEmail(e.target.value)}
                className={styles.modalInput}
                type="text"
              />
            </div>
            <div className={styles.modalButtonContainer}>
              <PrimaryButton
                buttonText="Login/SignUp"
                onClick={() => {
                  validateEmail(email, setModalTriggers, modalTriggers);
                }}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ValidateEmail;
