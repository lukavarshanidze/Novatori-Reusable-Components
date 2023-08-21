'use client'
import React from 'react'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import image from '../components/utils/images/headphones.png';
import styles from './registration.module.scss';

const Register = () => {
  return (
    <div className={styles.container}>
        <img src={image.src} alt="Common Picture" />
            <div className={styles.rightContent}>
                <RegistrationForm />
        </div>
    </div>
  )
}

export default Register