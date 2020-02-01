import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Firebase from '../config/config';

export default class Nakliyat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nerden: {
        nakliyatFirmaAd: '',
        yuklenmeYeri: '',
        yuklenmeTarihi: '',
        nakliyatTipi: '',
        nakilEdenKisi: ''
      },
      nereye: {
        ulasmaNoktasi: '',
        ulasmaTarihi: ''
      }
    };

    this.database = Firebase.database();
  }

  readNakliyatNerden = () => {
    const ref = this.database.ref('nakliyat').child('nerden');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          nerden: {
            nakilEdenKisi: values[0],
            nakliyatFirmaAd: values[1],
            nakliyatTipi: values[2],
            yuklenmeTarihi: values[3],
            yuklenmeYeri: values[4],
          }
        })
      });
    });
  }
  
  readNakliyatNereye = () => {
    const ref = this.database.ref('nakliyat').child('nereye');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          nereye: {
            ulasmaNoktasi: values[0],
            ulasmaTarihi: values[1]
          }
        })
      });
    });
  }

  componentDidMount() {
    this.readNakliyatNerden();
    this.readNakliyatNereye();
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e8b61e', padding: 18}}>
          <Text>
            -----------Nerden-----------{'\n'}
            nakilEdenKisi : {this.state.nerden.nakilEdenKisi}{'\n'}
            nakliyatFirmaAd : {this.state.nerden.nakliyatFirmaAd}{'\n'}
            nakliyatTipi : {this.state.nerden.nakliyatTipi}{'\n'}
            yuklenmeYeri : {this.state.nerden.yuklenmeYeri}{'\n'}
            yuklenmeTarihi : {this.state.nerden.yuklenmeTarihi}{'\n'}
          </Text>
          <Text>
            -----------Nereye-----------{'\n'}
            ulasmaNoktasi : {this.state.nereye.ulasmaNoktasi}{'\n'}
            ulasmaTarihi : {this.state.nereye.ulasmaTarihi}{'\n'}
          </Text>
        </View>
      </View>
    );
  }
}
