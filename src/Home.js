import React, { Component, } from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import { Header, Card, List, ListItem, Button } from 'react-native-elements';

class HomeScreen extends React.Component {

  constructor(props : any) {
    super(props);
  }

  renderHeader = () => {
    return
  };

  render() {
    let styles =  this.props.styles;
    let news = this.props.news;

    return (
      <View>
        <Header centerComponent={{ text: 'HOME', style: { color: '#000' } }}/>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={news}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Card
                title={item.name}
                image={{uri: item.hero}}>
                <Text style={{marginBottom: 10}}>
                  {item.title}
                </Text>
                <Button
                  icon={{name: 'code'}}
                  backgroundColor={item.theme}
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='READ MORE' />
              </Card>
            )}
          />
        </List>
      </View>
    );
  }
}

export default HomeScreen;
