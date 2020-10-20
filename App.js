/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox,
  Button,
} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
YellowBox.ignoreWarnings(['Picker has been extracted']);
export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);

  const calculate = () => {
    if (!capital) {
      console.log('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      console.log('Añade el interés del préstamo');
    } else if (!months) {
      console.log('Selecciona los meses a pagar');
    } else {
      console.log('ok');
    }
  };
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}> Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMonths={setMonths}></Form>
      </SafeAreaView>
      <View>
        <Text>Resultado</Text>
      </View>
      <View style={styles.footerView}>
        <Footer calculate={calculate}></Footer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  footerView: {
    flex: 1,
  },
});
