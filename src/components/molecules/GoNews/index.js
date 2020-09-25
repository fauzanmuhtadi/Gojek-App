import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SepakBola } from '../../../assets/dummy';
import { WhiteLogo } from '../../../assets/logo';


const GoNews = (props) => {
    return(
        <View style={{paddingTop: 17, paddingHorizontal: 17}}>
            <View style={{position: 'relative'}}>
              <Image source={SepakBola} style={{height: 170, width: '100%', borderRadius: 6}} />
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}} />
              <View style={{height: 15, width: 60, position: 'absolute', top: 16, left: 16}}>
                <Image source={WhiteLogo} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
              </View>
            </View>
            <View style={{paddingTop: 15, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>GO-NEWS</Text>
              <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11}}>Timnas Indonesia U-23 sedang bertanding sepak bola.</Text>
              <TouchableOpacity style={{backgroundColor: '#61A756', padding: 11, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default GoNews;