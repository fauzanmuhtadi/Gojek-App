import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Gopay, More, Nearby, Pay, TopUp } from '../../../assets/icon';
import { GopayFeature } from '../../../components/molecules';


class HomeGopay extends Component {
    render() {
        return(
            <View style={{marginHorizontal: 17, marginTop: 8}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5F88', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
                    <Image source={Gopay} />
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp50.375</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 10, backgroundColor: '#2C6580', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
                    <GopayFeature title='Pay' img={Pay} />
                    <GopayFeature title='Nearby' img={Nearby} />
                    <GopayFeature title='Top Up' img={TopUp} />
                    <GopayFeature title='More' img={More} />
                </View>
            </View>
        )
    }
}

export default HomeGopay;