/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
import ResultCalculation from './src/components/ResultCalculation';

YellowBox.ignoreWarnings(['Picker has been extracted']);
export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setinterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);

  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (capital && interest && months) {
      calculate();
    } else {
      reset();
    }
  }, [capital, interest, months]);
  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage('Añade el interés del préstamo');
    } else if (!months) {
      setErrorMessage('Selecciona los meses a pagar');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}> Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setinterest={setinterest}
          setMonths={setMonths}></Form>
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}></ResultCalculation>
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
