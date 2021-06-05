import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Card, ListItem } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#EDF3F6' }}>
          <View style={styles.container1}>
            <View style={styles.row}>
              <View style={styles.column}>
              </View>
              <View style={styles.column}>
                <Text style={styles.t}>username</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.c}>Top Quiz Categories</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Quiz')}>
             
              <Text style={styles.tb}>G.K</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Q2')}>
             
              <Text style={styles.tb}>Maths</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Q3')}>
            
              <Text style={styles.tb}>Science</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Q4')}>
             
              <Text style={styles.tb}>Sports</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Q5')}>
              
              <Text style={styles.tb}>Art</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() => this.props.navigation.navigate('Q6')}>
              
              <Text style={styles.tb}>Celebrities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF3F6',
  },
  p: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    margin: 10,
  },
  t: {
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  container1: {
    backgroundColor: '#2A2B31',
    height: '100',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  c: {
    color: 'black',
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 20,
  },
  pb: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  b: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
  },
  tb: {
    color: 'black',
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
