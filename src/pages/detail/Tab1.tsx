import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, IonText } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import axios from 'axios'

const Tab1: React.FC = () => {
  // const [data, setData] = useState<any>();

  const fetchData = () => {
    axios.get('http://127.0.0.1:3333/aaa').then(res => {
      console.log('测试res', res)
    })
  };

  useIonViewDidEnter(() => {
    fetchData()
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonText color="primary" onClick={() => fetchData()}>
          <h1>Detail</h1>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
