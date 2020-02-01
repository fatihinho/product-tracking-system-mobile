import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Firebase from '../config/config';

export default class GenelBilgi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bilgiler: {
        marka: '',
        sonKullanmaTarihi: '',
        barkodNo: ''
      }
    };

    this.database = Firebase.database();
  }

  readGenelBilgiler = () => {
    const ref = this.database.ref('genelBilgi').child('genelBilgiler');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          bilgiler: {
            barkodNo: values[0],
            marka: values[1],
            sonKullanmaTarihi: values[2]
          }
        })
      });
    });
  }

  componentDidMount() {
    this.readGenelBilgiler();
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e8b61e', padding: 18}}>
          <Text>
            -----------Bilgiler-----------{'\n'}
            marka : {this.state.bilgiler.marka}{'\n'}
            barkodNo : {this.state.bilgiler.barkodNo}{'\n'}
            sonKullanmaTarihi : {this.state.bilgiler.sonKullanmaTarihi}{'\n'}
          </Text>
        </View>
      </View>
    );
  }
}
