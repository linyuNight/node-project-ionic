import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  useIonViewDidEnter, 
  IonText, 
  IonButton,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react'
import axios from 'axios'

const Tab1: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/tab3'); // 替换为你的下级页面的路由路径
  };

  const fetchData = () => {
    axios.get('http://127.0.0.1:3333/query_all_groups').then(res => {
      console.log('测试res', res.data)
      setData(res.data)
    })
  };

  useIonViewDidEnter(() => {
    fetchData()
  })

  const handlerJoinRoom = (item: any) => {
    history.push('/tab3')
  }

  const roomList = data.map((val: any) => {
    console.log('测试val', val)
    return (
      <IonItem key={val._id} onClick={handlerJoinRoom}>
        <IonLabel>{val.groupname}</IonLabel>
      </IonItem>
    )
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonText color="primary" onClick={handleButtonClick}>
          <h1>H1: The quick brown fox jumps over the lazy dog1</h1>
        </IonText>
        <IonText color="primary" onClick={() => fetchData()}>
          <h1>H1: The quick brown fox jumps over the lazy dog2</h1>
        </IonText> */}
        <IonButton>创建群</IonButton>
        <IonButton>加入群</IonButton>
        <IonList>
          {roomList}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
