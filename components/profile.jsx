import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Replace with actual icons you're using

const ProfileComponent = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.timeText}>9:41</Text>
        <Icon name="wifi" style={styles.icon} />
        <Icon name="battery" style={[styles.icon, styles.batteryIcon]} />
      </View>

      <View style={styles.profileContainer}>
          <Image source={require('../src/assets/avatar.png')}  // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.usernameText}>KeLvin Agho</Text>
        <TouchableOpacity>
          <Icon name="pencil-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem icon="account-outline" title="Account" />
        <MenuItem icon="settings-outline" title="Settings" />
        <MenuItem icon="export" title="Export Data" />
        <MenuItem icon="logout" title="Logout" color="#E63946" />
      </View>
    </View>
  );
};

const MenuItem = ({ icon, title, color = '#6200ee' }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={icon} size={24} color={color} style={styles.menuIcon} />
      <Text style={styles.menuText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 16,
    color: '#000',
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  batteryIcon: {
    marginRight: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: 'purple',
    borderWidth: 2,
  },
  usernameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
  },
  menuContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 18,
    color: '#000',
  },
});

export default ProfileComponent;
