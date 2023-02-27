import React from 'react';

import { View, StyleSheet } from 'react-native';

const CardContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    // add shadow
    shadowColor: '#000',
    flexDirection: 'column',
    alignItems: 'flex-start',

    height: 150,
    maxHeight: 150,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    border: '1px solid #F5F5F5',
    borderRadius: 7,
    padding: 10,
  },
});

export default CardContainer;
