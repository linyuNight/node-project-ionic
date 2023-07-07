import { 
  IonPage,
  IonInput,
  IonButton
} from '@ionic/react';
import '@/pages/home/setting/Setting.less';
import { useHistory } from 'react-router-dom'

const Setting: React.FC = () => {
  const history = useHistory();

  const logout = () => {
    console.log(123123)
    localStorage.removeItem('token')
  
    // globalStore.user = {}
  
    history.replace('/login')
    // history.goBack()
  }

  return (
    <IonPage>
      <IonButton onClick={logout}>Logout</IonButton>
    </IonPage>
  );
};

export default Setting;
