import styles from './LoginForm.module.scss';
import { useRef, useState } from 'react';
import showPassword from '../../components/utils/images/showPassword.svg'
import gmail from '../../components/utils/images/gmail.png'
import facebook from '../../components/utils/images/facebook.svg'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';



export const LoginForm = () => {
    const [showPass, setShowPass] = useState(false)
    const [rememberUser, setRememberUser] = useState(false);
    const userNameRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    const signUpOnClickHandler = (e: any) => {
        e.preventDefault();
        const userNameValue = userNameRef.current.value;
        const passwordValue = passwordRef.current.value;
        if(!userNameValue || !passwordValue){
            return
        }else{
            // Logic
        }
    }

    const { t }: any = useTranslation();

  return (
    <div className={styles.form}>
        <div className={styles.sub}>
            <h1 className={styles.form_header}>{ t('data.login.title')}</h1>
            <div className={styles.username__container}>
                <label>{t('data.login.userLabel')}</label>
                <input ref={userNameRef} type='text' placeholder='Enter your username'/>
            </div>
            <div className={styles.password__container}>
                <label>{t('data.login.passwordLabel')}</label>
                <div className={styles.password__sub__container}>
                    <input ref={passwordRef} type={showPass ? 'text' : 'password'} placeholder='Enter your Password'/>
                    <img onClick={() => setShowPass(prev => !prev)} src={showPassword.src}/>
                </div>
            </div>
            <div className={styles.remeberMe__container}>
                <div onClick={() => setRememberUser(prev => !prev)} className={styles.checkbox}>
                    <input onChange={() => {}} checked={rememberUser} type='checkbox'/>
                    <p>{t('data.login.rememberMe')}</p>
                </div>
                <div className={styles.forgot}>
                    <a>{t('data.login.forgotPass')}</a>
                </div>
            </div>

            <div className={styles.login__container}>
                <div className={styles.login__button}>
                    <button onClick={signUpOnClickHandler}>{t('data.login.loginButton')}</button>
                </div>

                <div className={styles.signin__with__media}>
                    <img src={gmail.src}/>
                    <p>{t('data.login.gmailLogin')}</p>
                </div>

                <div className={styles.signin__with__media}>
                    <img src={facebook.src}/>
                    <p>{t('data.login.facebookLogin')}</p>
                </div>

                <div className={styles.no__account}>
                    <p>{t('data.login.noAccount')}</p>
                    <Link href='/register'>{t('data.login.placeHolder')}</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
