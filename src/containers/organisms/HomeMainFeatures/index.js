import React, { Component } from 'react';
import { View } from 'react-native';
import { GoBluebird, GoCar, GoDeals, GoFood, GoMore, GoPulsa, GoRide, GoSend } from '../../../assets/icon';
import { MainFeature } from '../../../components/molecules';


class HomeMainFeatures extends Component {
    render() {
        return(
            <View style={{marginTop: 18}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
                    <MainFeature title='GO-RIDE' img={GoRide} />
                    <MainFeature title='GO-CAR' img={GoCar} />
                    <MainFeature title='GO-BLUEBIRD' img={GoBluebird} />
                    <MainFeature title='GO-SEND' img={GoSend} />
                    <MainFeature title='GO-DEALS' img={GoDeals} />
                    <MainFeature title='GO-PULSA' img={GoPulsa} />
                    <MainFeature title='GO-FOOD' img={GoFood} />
                    <MainFeature title='MORE' img={GoMore} />
                </View>
            </View>
        )
    }
}

export default HomeMainFeatures;