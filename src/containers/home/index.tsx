import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Layout, Text, Avatar} from '@ui-kitten/components';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
    render() {

        const { result, errorMsg, valorEtanol, valorGasolina, calculate, clear, changedValEtanol, changedValGasolina } = this.props.homeStore;

        return (<>
            <Layout style={styles.body}>
              <Avatar style={styles.avatar} source={require('../../images/fuel_128.png')}/>
            </Layout>

            <Layout style={styles.div_msg}>
              <Text style={styles.msg_ok} status='primary'>{result}</Text>
            </Layout>

            <Layout style={styles.containerInputs}>
              <Input style={styles.input} status='success' placeholder='R$ Etanol' keyboardType={'numeric'} value={valorEtanol} onChangeText={(valorEtanol) => changedValEtanol(valorEtanol)}/>
              <Input style={styles.input} status='danger' placeholder='R$ Gasolina' keyboardType={'numeric'} value={valorGasolina} onChangeText={(valorGasolina) => changedValGasolina(valorGasolina)}/>       
            </Layout>

            <Layout style={styles.div_msg}>
            <Text style={styles.msg_error} status='danger'>{errorMsg}</Text>
            </Layout>

            <Layout style={styles.div_btn}>
              <Button style={styles.btn} appearance='outline' status='success'  onPress={() => calculate()}>Calcular</Button>
              <Button style={styles.btn} appearance='outline' status='success' onPress={() => clear()}>Limpar</Button>
            </Layout>            
        </>);
    }
}

const styles = StyleSheet.create({
    div_btn: {
    height: 150,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#2b7cd7',
    justifyContent: 'center',
  },

  avatar: {
    margin: 5,
  },

  div_msg: {
    height: 80,
    backgroundColor: '#2b7cd7',  
    flexDirection: 'row',
    justifyContent: 'center',
  },

  containerInputs: {
    height: 100,
    backgroundColor: '#2b7cd7',  
    flexDirection: 'row',
    justifyContent: 'center'
  },

  btn: {
    margin: 5,
    width: 95,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },

  input: {
    margin: 5,
    width: 150,
    borderColor: '#000',
    backgroundColor: '#000',
  },

  msg_ok: {
    color: '#fff',
    margin: 10,
  },

  msg_error: {
    color: 'red',
    margin: 10,
  },
  
  body: {
    height: 110,
    backgroundColor: '#2b7cd7',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 30,
  },  
});