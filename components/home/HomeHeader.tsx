import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon } from '@rneui/themed';

interface HomeHeaderProps {
  onSettingsClick?: () => void;
}

const HomeHeader = ({ onSettingsClick }: HomeHeaderProps) => {
  const userName = 'Abraham';
  return (
    <>
      <View style={styles.header}>
        <Icon name="settings" size={30} onPress={onSettingsClick} />
      </View>

      <Text style={styles.title}>Bienvenido, </Text>
      <Text style={styles.title}>{userName}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    // should be full width and send icon to the right
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#064789',
  },
});

HomeHeader.defaultProps = {
  onSettingsClick: () => {},
};

export default HomeHeader;
