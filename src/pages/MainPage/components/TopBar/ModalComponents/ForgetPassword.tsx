import { useEffect, useState, useContext } from 'react';
import { generateOTP, resetPassword } from '../../../../../apis/authentication';
import Modal from '../../Modal/Modal';
import styles from './ModalContentStyles.module.css';
import { ModalTriggersType } from '../types';
import PrimaryButton from '../../Buttons/PrimaryButton';
import { ModalContext } from '../context';
import { UserContext } from '../../../context';

const ForgetPassword = ({
  Modalname,
  modalType,
}: {
  Modalname: string;
  modalType: string;
}) => {
  const { modalTriggers, setModalTriggers, email } = useContext(ModalContext);
  const { setIsLoggedIn, setEmail } = useContext(UserContext);

  const [otp, setOTP] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (
      modalTriggers[Modalname as keyof ModalTriggersType] ||
      modalType === 'forgetPassword'
    ) {
      generateOTP(email, setModalTriggers, modalTriggers, 'Forget Password');
    } else {
      setOTP('');
    }
  }, [modalType]);

  return (
    <>
      {modalTriggers[Modalname as keyof ModalTriggersType] && (
        <Modal
          modalTriggers={modalTriggers}
          setModalTriggers={setModalTriggers}
          Modalname={Modalname}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalTitle}>Forget Password</div>
            <p className={styles.emailLabel}>{email}</p>

            <div className={styles.modalInputContainer}>
              <div className={styles.modalInputLabel}>
                Enter OTP<span>*</span>
              </div>
              <input
                placeholder="Enter OTP"
                onChange={(e) => {
                  setOTP(e.target.value);
                }}
                className={styles.modalInput}
                type="text"
              />
            </div>

            <div className={styles.modalInputContainer}>
              <div className={styles.modalInputLabel}>
                Enter Password<span>*</span>
              </div>
              <input
                placeholder="Enter your new Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.modalInput}
                type="password"
              />
            </div>

            <div className={styles.modalButtonContainer}>
              <PrimaryButton
                onClick={() => {
                  resetPassword(
                    email,
                    otp,
                    password,
                    setModalTriggers,
                    modalTriggers,
                    setIsLoggedIn,
                    setEmail,
                  );
                }}
                buttonText="Reset Password"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ForgetPassword;