import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Linking
} from 'react-native';

class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        Linking.addEventListener('url', this._handleOpenURL);
      }
      componentWillUnmount() {
        Linking.removeEventListener('url', this._handleOpenURL);
      }
      _handleOpenURL(event) {
        console.log(event.url);
      }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Button 
                    title={'hello'}
                    onPress={() => Linking.openURL("intellipay://terminal/paymentoptions").catch((err) => console.error('An error occurred', err))}
                />
            </View>
        )
    }
}

export default HomeScreen;