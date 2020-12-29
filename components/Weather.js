import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { API_KEY } from '../utils/WeatherAPIKey';
import WeatherPage from './WeatherPage';

export default class Weather extends React.Component {

  state = {
    isLoading: true,
    temperature: 0,
    temperatureFeelsLike: 0,
    temperatureMin: 0,
    temperatureMax: 0,
    weatherCondition: null,
    description: null,
    location: null,
    error: null
  };

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      _error => {
        this.setState({
          error: `Error getting weather conditions in your area. 
                  Please make sure your internet is on 
                  and that this app has permission to access your current location.`
        });
      }
    );
  };

  fetchWeather(lat, lon) {
    fetch (`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        temperatureFeelsLike: json.main.feels_like,
        temperatureMin: json.main.temp_min,
        temperatureMax: json.main.temp_max,
        weatherCondition: json.weather[0].main,
        description: json.weather[0].description,
        location: json.name,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading, temperature, temperatureFeelsLike, temperatureMax, temperatureMin, 
      weatherCondition, description, location } = this.state;
    return (
      <View style={styles.container}>
        { isLoading ? (
          <ActivityIndicator animating={true} color={Colors.red800} />
        ) : (
          <WeatherPage temperature={temperature} 
                  temperatureFeelsLike={temperatureFeelsLike}
                  temperatureMin={temperatureMin}
                  temperatureMax={temperatureMax}
                  weatherCondition={weatherCondition}
                  description={description}
                  location={location} />
        ) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
