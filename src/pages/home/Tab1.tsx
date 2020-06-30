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
  IonItemGroup,
  IonItemDivider
} from '@ionic/react';

import ExploreContainer from '../../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
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

export default Tab1;
