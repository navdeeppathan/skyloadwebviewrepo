import {View, Text} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const WebViewSample = () => {
  return (
    <WebView
      source={{uri: 'https://dingg.app/booking/the-stylo-park-street'}}
    />
  );
};

export default WebViewSample;
