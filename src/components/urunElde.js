import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import Firebase from '../config/config';

export default class UrunElde extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pisirme: {
        firinTipi: '',
        yontemi: '',
        derecesi: '',
        tarihi: '',
        sogutmaSuresi: ''
      },
      ambalajlama: {
        tipi: '',
        tarihi: ''
      },
      etiketlenme: {
        tarihi: ''
      }
    };

    this.database = Firebase.database();
  }

  readUrunEldePisirme = () => {
    const ref = this.database.ref('urunElde').child('pisirme');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          pisirme: {
            derecesi: values[0],
            firinTipi: values[1],
            sogutmaSuresi: values[2],
            tarihi: values[3],
            yontemi: values[4]
          }
        })
      });
    });
  }
  
  readUrunEldeAmbalajlama = () => {
    const ref = this.database.ref('urunElde').child('ambalajlama');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          ambalajlama: {
            tarihi: values[0],
            tipi: values[1]
          }
        })
      });
    });
  }
  
  readUrunEldeEtiketlenme = () => {
    const ref = this.database.ref('urunElde').child('etiketleme');
    ref.on('value', (data) => {
      data.forEach((childData) => {
        const value = childData.val();
        const values = Object.values(value);
        this.setState({
          etiketlenme: {
            tarihi: values[0]
          }
        })
      });
    });
  }

  componentDidMount() {
    this.readUrunEldePisirme();
    this.readUrunEldeAmbalajlama();
    this.readUrunEldeEtiketlenme();
    
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#e8b61e', padding: 18}}>
          <Text>
            ---------Pişirme-----------{'\n'}
            derecesi : {this.state.pisirme.derecesi}{'\n'}
            firinTipi : {this.state.pisirme.firinTipi}{'\n'}
            sogutmaSuresi : {this.state.pisirme.sogutmaSuresi}{'\n'}
            tarihi : {this.state.pisirme.tarihi}{'\n'}
            yontemi : {this.state.pisirme.yontemi}{'\n'}
          </Text>
          <Text>
            ---------Ambalajlama-----------{'\n'}
            tipi : {this.state.ambalajlama.tipi}{'\n'}
            tarihi : {this.state.ambalajlama.tarihi}{'\n'}
          </Text>
          <Text>
            ---------Etiketleme-----------{'\n'}
            tarihi : {this.state.etiketlenme.tarihi}{'\n'}
          </Text>
        </View>
      </View>
    );
  }
}
