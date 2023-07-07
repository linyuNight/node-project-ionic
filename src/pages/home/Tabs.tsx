import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react'
// import Tab1 from '@/pages/Tab1';
// import Tab2 from '@/pages/Tab2';
// import Tab3 from '@/pages/Tab3';
// import Tab4 from '@/pages/Tab4';
import Diary from '@/pages/home/diary/Diary'
import Tools from '@/pages/home/tools/Tools'
import CloudData from '@/pages/home/cloud_data/CloudData.tsx'
import Manager from '@/pages/home/manager/Manager'
import Setting from '@/pages/home/setting/Setting'
import { chatbubbles, hammer, cloud, happy, settings } from 'ionicons/icons';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/diary">
          <Diary />
        </Route>
        <Route exact path="/tabs/tools">
          <Tools />
        </Route>
        <Route exact path="/tabs/cloud_data">
          <CloudData />
        </Route>
        <Route exact path="/tabs/manager">
          <Manager />
        </Route>
        <Route exact path="/tabs/setting">
          <Setting />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/diary" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="diary" href="/tabs/diary">
          <IonIcon icon={chatbubbles} />
          <IonLabel>Daily</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tools" href="/tabs/tools">
          <IonIcon aria-hidden="true" icon={hammer} />
          <IonLabel>Tools</IonLabel>
        </IonTabButton>
        <IonTabButton tab="cloudData" href="/tabs/cloud_data">
          <IonIcon aria-hidden="true" icon={cloud} />
          <IonLabel>Clound</IonLabel>
        </IonTabButton>
        <IonTabButton tab="manager" href="/tabs/manager">
          <IonIcon aria-hidden="true" icon={happy} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
        <IonTabButton tab="setting" href="/tabs/setting">
          <IonIcon aria-hidden="true" icon={settings} />
          <IonLabel>Setting</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Tabs