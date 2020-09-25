import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { GoBanner, GoInfo, GoNews, SearchFeature } from './src/components/molecules';
import { HomeGopay, HomeMainFeatures, NavBar, ScrollableProducts } from './src/containers/organisms';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <SearchFeature />
          <HomeGopay />
          <HomeMainFeatures />
          <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>
          <GoNews />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}
 
export default App;