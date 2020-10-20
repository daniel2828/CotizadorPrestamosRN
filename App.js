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

YellowBox.ignoreWarnings(['Picker has been extracted']);
export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [months, setMonths] = useState(null);

  const onSubmit = () => {
    console.log('capital ->', capital);
    console.log('interes ->', interes);
    console.log('months ->', months);
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
      <View>
        <Button title="Enviar" onPress={onSubmit} />
        <Text>Footer</Text>
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
});
