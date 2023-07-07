// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  useIonViewDidEnter,
} from '@ionic/react';
// import { usePhotoGallery } from '../hooks/usePhotoGallery';
import axios from 'axios'

const Tab2: React.FC = () => {
  // const { takePhoto } = usePhotoGallery();

  const takePhoto = () => {

  }

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
        {/* <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar> */}
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 25 page" /> */}
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
