import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { GoFoodBanka, GoFoodGM, GoFoodKFC, GoFoodOrins, GoFoodPakBoss } from '../../../assets/dummy';
import { GoFoodLogo } from '../../../assets/logo';
import { ScrollableItem } from '../../../components/molecules';


class ScrollableProducts extends Component {
    render() {
        return(
            <View>
                <View style={{height: 15, width: 60, marginLeft: 16}}>
                    <Image source={GoFoodLogo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>Nearby Restaurants</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>See All</Text>
                </View>
                <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
                    <ScrollableItem title='KFC AEON Mall' img={GoFoodKFC} />
                    <ScrollableItem title='Bakmi GM' img={GoFoodGM} />
                    <ScrollableItem title='Martabak Orins' img={GoFoodOrins} />
                    <ScrollableItem title='Martabak Banka' img={GoFoodBanka} />
                    <ScrollableItem title='Ayam Pak Boss' img={GoFoodPakBoss} />
                </ScrollView>
                <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16, marginBottom: 25}} />
            </View>
        )
    }
}

export default ScrollableProducts;