import React from 'react';
import { 
  View,
  Text, 
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Hammadde from './hammadde';
import UrunElde from './urunElde';
import Nakliyat from './nakliyat';
import GenelBilgi from './genelBilgi';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      compId: null
    }
  }

  handleHammadde = () => {
    this.setState({
      compId: 0
    });
  }

  handleUrunElde = () => {
    this.setState({
      compId: 1
    });
  }

  handleNakliyat = () => {
    this.setState({
      compId: 2
    });
  }

  handleGenelBilgi = () => {
    this.setState({
      compId: 3
    });
  }

  handleComponents = () => {
    switch (this.state.compId) {
      case 0:
        return <Hammadde />
      case 1:
        return <UrunElde />
      case 2:
        return <Nakliyat />
      case 3:
        return <GenelBilgi />
      default:
        return null;
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#e8b61e'}}>
        <View style={{flex: 1, backgroundColor: 'orange'}}>
          <View> 
            <Text style={{color: '#47453d', textAlign: 'center', fontSize: 30, margin: 20}}>
              TEDARİK ZİNCİRİ
            </Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', margin: 20, marginTop: 10}}>
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={this.handleHammadde}>
                <Text style={{fontWeight: 'bold'}}>HAMMADDE</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={this.handleUrunElde}>
                <Text style={{fontWeight: 'bold'}}>ÜRÜN ELDE</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={this.handleNakliyat}>
                <Text style={{fontWeight: 'bold'}}>NAKLİYAT</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={this.handleGenelBilgi}>
                <Text style={{fontWeight: 'bold'}}>GENEL BİLGİ</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {this.handleComponents()}
          </View>
        </View>
      </ScrollView>
    );
  }
}