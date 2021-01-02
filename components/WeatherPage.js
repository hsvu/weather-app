import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { weatherConditions } from '../utils/weatherConditions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { umbrellaSwitch, sunscreenSwitch } from './ToggleSwitch';
import PropTypes from 'prop-types';

const TextStyled = ({ style, info, weatherCondition }) => {
  if (typeof info == 'number') {
    return (
      <Text style={[
        style,
        { color: weatherConditions[weatherCondition].textColor}
      ]} >
        {info}&deg;C
      </Text>
    );
  } else {
    return (
      <Text style={[
        style,
        { color: weatherConditions[weatherCondition].textColor}
      ]} >
        {info}
      </Text>
    );
  }
}

const WeatherPage = ({ temperature, temperatureFeelsLike, temperatureMax, temperatureMin, weatherCondition, description, location }) => {
  return (
    <View
        style={[
          styles.container,
          { backgroundColor: weatherConditions[weatherCondition].color }
        ]}
      >
      <View style={[
        styles.innerContainer,
        { backgroundColor: weatherConditions[weatherCondition].color }
      ]}>
        <View style={styles.icons}>
          <TextStyled style={styles.temperature} info={temperature} weatherCondition={weatherCondition} />
          <MaterialCommunityIcons
            style={styles.materialIcon}
            size={72}
            name={weatherConditions[weatherCondition].icon}
            color={weatherConditions[weatherCondition].textColor}
          />
        </View>
        {/* <Text>{umbrellaSwitch}</Text>
        <Text>{sunscreenSwitch}</Text> */}
        <TextStyled style={styles.location} info={location} weatherCondition={weatherCondition} />
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell><TextStyled style={styles.data} info='Weather' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={weatherCondition} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><TextStyled style={styles.data} info='Description' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={description} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><TextStyled style={styles.data} info='Current Temp' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={temperature} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><TextStyled style={styles.data} info='Feels Like' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={temperatureFeelsLike} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><TextStyled style={styles.data} info='Minimum Temp' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={temperatureMin} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>
            <TextStyled style={styles.data} info='Maximum Temp' weatherCondition={weatherCondition} /></DataTable.Cell>
            <DataTable.Cell numeric><TextStyled style={styles.data} info={temperatureMax} weatherCondition={weatherCondition} /></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    margin: 30,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  temperature: {
    flex: 2,
    fontSize: 50,
    textAlign: 'center',
  },
  materialIcon: {
    flex: 1,
    textAlign: 'center',
  },
  location: {
    fontSize: 40,
    textAlign: 'center',
  },
  data: {
    fontSize: 15,
  },

});

export default WeatherPage;