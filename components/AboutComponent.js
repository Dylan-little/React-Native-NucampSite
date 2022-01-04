import React, {Component} from "react";
import { Card } from "react-native-elements";
import { ScrollView, Text } from "react-native";
import { PARTNERS } from '../shared/partners';

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: 'About us'
    }

    render() {
        const renderPartners = ({item}) => {
            return(
                <ListItem 
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={'./images/bootstrap-logo.png'}
                />
            )
        }
        return(
            <ScrollView>
                    <Mission />
                    <Card title="Community Partners">
                        <FlatList 
                            data={this.state.partners}
                            keyExtractor={item => item.id.toString()}
                            renderItem={renderPartners}
                        />
                    </Card>
            </ScrollView>
        )
    }
}

function Mission(props) {
    return(
        <Card title="Our Mission">
            <Text style={{margin: 10}}>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    )
}

export default About;