import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { addToast } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');

  const handleToastText = (e) => {
    setMessage(e.target.value);
  };

  const handleAddToast = (e) => {
    e.preventDefault();
    addToast({ message, variant });
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleAddToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={handleToastText} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={variant === option}
                      onChange={() => setVariant(option)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
