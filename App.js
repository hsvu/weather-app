import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Card } from 'react-native-paper';
import { FontAwesome5, Feather } from '@expo/vector-icons'; 
import ToggleSwitch from './components/ToggleSwitch';
import Weather from './components/Weather';

const HomeRoute = () => {
  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
};

const SettingsRoute = () => {
  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <Card>
          <Card.Content>        
            <Card.Title
              title="Umbrella Reminder"
              subtitle="Send notifications to your phone if you need an umbrella for the day"
              subtitleNumberOfLines={5}
              left={(props) => <FontAwesome5 name="umbrella" size={24} color="black" /> }
              right={(props) => <ToggleSwitch />}
            />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>        
            <Card.Title
              title="Sunscreen Reminder"
              subtitle="Send notifications to your phone if you need to put sunscreen on for the day"
              subtitleNumberOfLines={5}
              left={(props) => <Feather name="sun" size={24} color="black" /> }
              right={(props) => <ToggleSwitch />}
            />
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const BottomNav = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#696969' },
    { key: 'settings', title: 'Settings', icon: (props) => <Feather {...props} name='settings' /> , color: '#696969' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    settings: SettingsRoute,
  });

  return (
    <BottomNavigation
      shifting={true}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  settings: {
    paddingTop: '10%',
  }
});

export default BottomNav;