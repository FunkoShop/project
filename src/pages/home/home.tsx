import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';

import './home.css';

const home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>Hot Tracks</IonLabel>
          </IonListHeader>
          <IonItem button>
            <IonThumbnail slot="start">
            </IonThumbnail>
            <IonLabel>
              <h2>hola </h2>
              <p>kalu</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default home;
