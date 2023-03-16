import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const BaseLayout = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: '#fff', height: '100%' }}
    >
      <ScrollView style={{ flex: 1 }} bounces={false}>
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          {children}
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BaseLayout;
