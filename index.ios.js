/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//IMPORTANT the flux cycle: View -> Action Creator -> Dispatcher -> Store -> View
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
//2.- Add the Actions Creators to the View
import { increment, decrement, zero } from './src/actions'
import TallyStore from './src/TallyStore';

export default class Countly extends Component {
  constructor(props) {
    super(props); 3
    this.state = {
      tally: TallyStore.getTally()
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    TallyStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    TallyStore.removeChangeListener(this.updateState);
  }

  updateState() {
    this.setState({
      tally: TallyStore.getTally()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>
          Countly
        </Text>
        <Text style={styles.tally}>
          Tally: {this.state.tally.count}
        </Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={zero}>
          <Text style={styles.buttonText}>
            0
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  tally: {
    fontSize: 25,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

AppRegistry.registerComponent('Countly', () => Countly);
