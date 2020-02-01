import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Firebase from '../config/config';

export default class Hammadde extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bugday: {
        hasatTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      seker: {
        uretimTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      yag: {
        hasatTarihi: '',
        fabrikadaUretimTarihi: ''
      },
      kabartmaTozu: {
        uretimTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      sut: {
        sagilmaTarihi: '',
        hazirlanmaTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
      yumurta: {
        toplanmaTarihi: '',
        paketlenmeTarihi: '',
        fabrikayaGirisTarihi: '',
        fabrikadaKullanimTarihi: ''
      },
    };

    this.database = Firebase.database();
  }

  readHammaddeBugday = () => {
    const ref = this.database.ref('hammadde').child('bugday');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          bugday: {
            hasatTarihi: values[2],
            fabrikayaGirisTarihi: values[1],
            fabrikadaKullanimTarihi: values[0]
          }
        })
      });
    });
  }

  readHammaddeKabartmaTozu = () => {
    const ref = this.database.ref('hammadde').child('kabartmaTozu');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          kabartmaTozu: {
            fabrikadaKullanimTarihi: values[0],
            fabrikayaGirisTarihi: values[1],
            uretimTarihi: values[2]
          }
        })
      });
    });
  }
  
  readHammaddeSeker = () => {
    const ref = this.database.ref('hammadde').child('seker');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          seker: {
            fabrikadaKullanimTarihi: values[0],
            fabrikayaGirisTarihi: values[1],
            uretimTarihi: values[2]
          }
        })
      });
    });
  }

  readHammaddeSut = () => {
    const ref = this.database.ref('hammadde').child('sut');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          sut: {
            fabrikadaKullanimTarihi: values[0],
            fabrikayaGirisTarihi: values[1],
            hazirlanmaTarihi: values[2],
            sagilmaTarihi: values[3]
          }
        })
      });
    });
  }
  
  readHammaddeYag = () => {
    const ref = this.database.ref('hammadde').child('yag');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          yag: {
            fabrikadaUretimTarihi: values[0],
            hasatTarihi: values[1]
          }
        })
      });
    });
  }

  readHammaddeYumurta = () => {
    const ref = this.database.ref('hammadde').child('yumurta');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          yumurta: {
            fabrikayaGirisTarihi: values[0],
            fabrikadaKullanimTarihi: values[1],
            paketlenmeTarihi: values[2],
            toplanmaTarihi: values[3]
          }
        })
      });
    });
  }

  componentDidMount() {
    this.readHammaddeBugday();
    this.readHammaddeKabartmaTozu();
    this.readHammaddeSeker();
    this.readHammaddeSut();
    this.readHammaddeYag();
    this.readHammaddeYumurta();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e8b61e', padding: 18}}>
          <Text>
            ---------Buğday-----------{'\n'}
            hasatTarihi : {this.state.bugday.hasatTarihi}{'\n'}
            fabrikayaGirisTarihi : {this.state.bugday.fabrikayaGirisTarihi}{'\n'}
            fabrikadaKullanimTarihi : {this.state.bugday.fabrikadaKullanimTarihi}{'\n'}
          </Text>
          <Text>
            ---------Kabartma Tozu----------- {'\n'}
            uretimTarihi : {this.state.kabartmaTozu.uretimTarihi}{'\n'}
            fabrikayaGirisTarihi : {this.state.kabartmaTozu.fabrikayaGirisTarihi}{'\n'}
            fabrikadaKullanimTarihi : {this.state.kabartmaTozu.fabrikadaKullanimTarihi}{'\n'}
          </Text>
          <Text>
            ---------Şeker----------- {'\n'}
            uretimTarihi : {this.state.seker.uretimTarihi}{'\n'}
            fabrikayaGirisTarihi : {this.state.seker.fabrikayaGirisTarihi}{'\n'}
            fabrikadaKullanimTarihi : {this.state.seker.fabrikadaKullanimTarihi}{'\n'}
          </Text>
          <Text>
            ---------Süt----------- {'\n'}
            sagilmaTarihi : {this.state.sut.sagilmaTarihi}{'\n'}
            hazirlanmaTarihi : {this.state.sut.hazirlanmaTarihi}{'\n'}
            fabrikayaGirisTarihi : {this.state.sut.fabrikayaGirisTarihi}{'\n'}
            fabrikadaKullanimTarihi : {this.state.sut.fabrikadaKullanimTarihi}{'\n'}
          </Text>
          <Text>
            ---------Yağ----------- {'\n'}
            hasatTarihi : {this.state.yag.hasatTarihi}{'\n'}
            fabrikadaUretimTarihi : {this.state.yag.fabrikadaUretimTarihi}{'\n'}
          </Text>
          <Text>
            ---------Yumurta----------- {'\n'}
            toplanmaTarihi : {this.state.yumurta.toplanmaTarihi}{'\n'}
            paketlenmeTarihi : {this.state.yumurta.paketlenmeTarihi}{'\n'}
            fabrikayaGirisTarihi : {this.state.yumurta.fabrikayaGirisTarihi}{'\n'}
            fabrikadaKullanimTarihi : {this.state.yumurta.fabrikadaKullanimTarihi}{'\n'}
          </Text>
        </View>
      </View>
    );
  }
}
