import { 
  IonPage,
  IonInput,
  IonButton
} from '@ionic/react';
import '@/pages/login/Login.less';
import { useState } from 'react';
import {
  loginApi
} from '@/api/index'
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, serPassword] = useState('')

  const history = useHistory();

  // 登录
  const handlerLogin = () => {
    console.log('测试login', username, password)
    loginApi({
      username: username,
      password: password
    }).then((res: any) => {
      console.log('测试post', res)
      if (res) {
        localStorage.setItem('token', res.token)

        history.replace('/tabs')
      } else if (res === false) {
        console.log('用户名或者密码错误')
      } else {
        console.log('网络错误')
      }
    })
  }

  return (
    <IonPage>
      <div className="login">
        <div className="login-box">
          <IonInput
            className="username"
            label="username" 
            value={username} 
            onIonInput={(e: any) => setUsername(e.detail.value)}></IonInput>
          <IonInput
            className="password"
            label="password"
            type="password"
            value={password}
            onIonInput={(e: any) => serPassword(e.detail.value)}></IonInput>
          <IonButton
            className="login-btn"
            onClick={handlerLogin}
          >
            Login
          </IonButton>
        </div>
      </div>      
    </IonPage>
  );
};

export default Login;
