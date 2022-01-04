import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                    <Card wrapperStyle={{margin: 20}} title="Contact Information">
                        <Text>1 Nucamp Way</Text>
                        <Text>Seattle, WA 98001</Text>
                        <Text style={{paddingBottom: 10}} wrapperStyle={{margin: 10}}>U.S.A.</Text>
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                    </Card>
            </ScrollView>
        )
    }
}

export default Contact;