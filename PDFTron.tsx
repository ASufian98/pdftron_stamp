import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {Platform} from 'react-native';

import {DocumentView, RNPdftron} from 'react-native-pdftron';
import {
  HomeNavigatorParams,
  RootNavigatorParams,
} from './src/types/navigator.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = CompositeScreenProps<
  BottomTabScreenProps<HomeNavigatorParams, 'PDFTron'>,
  NativeStackScreenProps<RootNavigatorParams>
>;
const PDFTron: React.FC<Props> = ({navigation, route}) => {
  //Access your parameters here
  const rubberStamp = route.params?.stampUrl;
  const signature = route.params?.signatureUrl;
  RNPdftron.initialize('Insert commercial license key here after purchase');
  RNPdftron.enableJavaScript(true);

  const onLeadingNavButtonPressed = () => {
    if (Platform.OS === 'ios') {
      navigation.goBack();
    } else {
      navigation.goBack();
    }
  };

  const path = route.params?.pdfUrl;

  return (
    <DocumentView
      // fontSize={fontSize_var}
      signatureUrl={signature}
      signatureArrayUrl={[
        'https://i.imgur.com/LjOrpfA.jpeg',
        'https://i.imgur.com/fZPC7zh.jpeg',
      ]}
      rubberStampUrl={rubberStamp}
      document={path}
      showLeadingNavButton={true}
      leadingNavButtonIcon={
        Platform.OS === 'ios'
          ? 'ic_close_black_24px.png'
          : 'ic_arrow_back_white_24dp'
      }
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
    />
  );
};
export default PDFTron;
