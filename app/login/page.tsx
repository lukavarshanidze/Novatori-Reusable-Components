'use client'
import styles from './Login.module.scss';
import image from '../components/utils/images/headphones.png';
import { LoginForm } from './LoginForm/LoginForm';

const Login = () => {
    

    
return (
    <div className={styles.container}>
        <img src={image.src} alt="Common Picture" />
        <div className={styles.rightContent}>
          <LoginForm />
        </div>
    </div>
  )
}

export default Login