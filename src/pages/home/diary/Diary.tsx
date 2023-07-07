import { Redirect, Route, useHistory } from 'react-router-dom';
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
  IonList,
  IonRouterOutlet
} from '@ionic/react';
import '@/pages/home/diary/Diary.less';
import { useState } from 'react';
import { queryAllGroups } from '@/api/index'
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setGroups, setRoomLoading } from '@/store/globalSlice';
import Room from '@/pages/home/diary/Room'

const Diary: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [groups, setTheGroups] = useState([])

  const handleGroupsChange = (groups: any) => {
    dispatch(setGroups(groups));
  };

  const handleRoomLoadingChange = (roomLoading: any) => {
    dispatch(setRoomLoading(roomLoading));
  };

  // 查看所有群
  const handlerQueryAllGroups = () => {
    handleRoomLoadingChange(true)

    queryAllGroups().then((res: any) => {
      let grouplist = JSON.parse(JSON.stringify(res)).map((val: any) => {
        return {
          id: val._id,
          groupname: val.groupname,
          creator: val.creator
        }
      })

      setTheGroups(grouplist)

      handleGroupsChange(groups)
    }).catch((err: any) => {
      console.log(err)
    }).finally(() => {
      handleRoomLoadingChange(false)
    })
  }

  useIonViewDidEnter(() => {
    handlerQueryAllGroups()
  })

  const handlerJoinRoom = (item: any) => {
    history.push('/tabs/diary/room')
  }

  const roomList = groups.map((item: any) => {
    return (
      <IonItem key={item.id} onClick={handlerJoinRoom}>
        <IonLabel>{item.groupname}</IonLabel>
      </IonItem>
    )
  })

  console.log('zzzz', roomList)

  const DiaryHome = () => {
    return (
      <IonPage>
        <IonContent>
          <IonButton>创建群</IonButton>
          <IonButton>加入群</IonButton>
          <IonList>
            {roomList}
          </IonList>
        </IonContent>      
      </IonPage>
    )
  }

  return (
    <IonRouterOutlet>
      <Route exact path="/tabs/diary">
        <DiaryHome />
      </Route>
      <Route exact path="/tabs/diary/room">
        <Room />
      </Route>
    </IonRouterOutlet>
    
  );
};

export default Diary;
