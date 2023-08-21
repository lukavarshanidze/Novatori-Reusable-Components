import React, { ChangeEvent, useEffect, useRef } from 'react'
import styles from './Registration.module.scss';
import { useState } from 'react';
import showPassword from '../../components/utils/images/showPassword.svg'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const RegistrationForm = () => {
    const [showPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [checked, setChecked] = useState('')
    const { t } = useTranslation();


    const userNameRef = useRef<any>(null);
    const lastNameRef = useRef<any>(null);
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const confirmPassRef = useRef<any>(null);


    const signUpOnClickHandler = (e: any) => {
        e.preventDefault();
        const userNameValue = userNameRef.current.value;
        const lastNameValue = lastNameRef.current.value;
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const confirmPassValue = confirmPassRef.current.value;

        if(passwordValue == confirmPassValue){
            // console.log(userNameValue, lastNameValue, emailValue,passwordValue ,confirmPassValue);
        }else{
            return;
        }
    }

  return (
    
    <form className={styles.form}>
        <div className={styles.sub}>
            <h1 className={styles.form_header}>{t('data.register.title')}</h1>
            <div className={styles.username__container}>
                <div className={styles.userName}>
                    <label>{t('data.register.userNameLabel')}</label>
                    <input ref={userNameRef} type='text' placeholder={t('data.register.userNamePlaceHolder')} required/>
                </div>
                <div className={styles.lastName}>
                    <label>{t('data.register.lastNameLabel')}</label>
                    <input ref={lastNameRef} type='text' placeholder={t('data.register.lastNameLabel')} required/>
                </div>
            </div>

            <div className={styles.emailAddress}>
                <label>{t('data.register.emailLabel')}</label>
                <input ref={emailRef} type='email' placeholder={t('data.register.emailPlaceHolder')} required/>
            </div>

            <div className={styles.password__container}>
                <div className={styles.password}>
                    <label>{t('data.register.passwordLabel')}</label>
                    <div className={styles.password__sub__container}>
                        <input ref={passwordRef} type={showPass ? 'text' : 'password'} placeholder={t('data.register.passPlaceHolder')} required/>
                        <img onClick={() => setShowPass(prev => !prev)} src={showPassword.src}/>
                    </div>
                </div>

                <div className={styles.confirmPassword}>
                    <label>{t('data.register.confirmPassword')}</label>
                    <div className={styles.password__sub__container}>
                        <input ref={confirmPassRef} type={showConfirmPass ? 'text' : 'password'} placeholder={t('data.register.confirmPassword')} required/>
                        <img onClick={() => setShowConfirmPass(prev => !prev)} src={showPassword.src}/>
                    </div>
                </div>
            </div>

            <div className={styles.remeberMe__container}>
                <div className={styles.checkbox}>
                    <input onChange={(e: any) => {setChecked(e.target.checked)}} type='checkbox' required/>
                    <p>{t('data.register.agree')}</p>
                </div>
                <div className={styles.forgot}>
                    <a>{t('data.register.terms')}</a>
                </div>
            </div>

            <div className={styles.login__container}>
                <div className={styles.login__button}>
                    <button onClick={signUpOnClickHandler} disabled={!checked}>{t('data.register.signUpButton')}</button>
                </div>

                <div className={styles.no__account}>
                    <p>{t('data.register.alreadyHaveAccount')}</p>
                    <Link href='/login'>{t('data.register.signIn')}</Link>
                </div>
            </div>
        </div>
    </form>
  )
}

export default RegistrationForm