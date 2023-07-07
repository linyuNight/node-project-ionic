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
import '@/pages/home/diary/Diary.less';
import { useState } from 'react';
import { queryAllGroups } from '@/api/index'
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setGroups, setRoomLoading } from '@/store/globalSlice';

const Diary: React.FC = () => {
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      username: '123',
      message: '666'
    }
  ])

  const handleGroupsChange = (groups: any) => {
    dispatch(setGroups(groups));
  };

  const handleRoomLoadingChange = (roomLoading: any) => {
    dispatch(setRoomLoading(roomLoading));
  };

  const messageList = messages.map((item: any, index: any) => {
    // console.log('测试val', val)
    return (
      <IonItem key={index}>
        <div>{item.username}</div>
        <div>{item.message}</div>
      </IonItem>
    )
  })

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {messageList}
        </IonList>
        {/* <IonButton>创建群</IonButton>
        <IonButton>加入群</IonButton>
        <IonList>
          {roomList}
        </IonList> */}
      </IonContent>      
    </IonPage>
  );
};

export default Diary;
