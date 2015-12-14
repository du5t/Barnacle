'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;
// import MsgList from './com/msg-list'
// import Card from './com/msg-view/card'
// import * as HelpCards from './com/help/cards'
// import WelcomeHelp from './com/help/welcome'
var Card = require('./components/Card');

// TODO make better data and data layer
var data = require('./data/mockData.json');


var SwitchAndroid = require('SwitchAndroid');
var ToolbarAndroid = require('ToolbarAndroid');

var Barnacle = React.createClass({
  render: function() {

    var cards = data.map( (card) => {
      var cardTitle;
      var cardBody;
      switch (card.type) {
        case "post":
          cardTitle = "User ";
          cardBody = card.text;
          break;
        case "vote":
          cardTitle = "User dug post: ";
          cardBody = card["vote.link"];
          break;
        case "contact":
          cardTitle = "foo followed: ";
          cardBody = card.contact;
          break;
      }
      return (
        <TouchableHighlight>
          <View>
            <Card style={styles.cardList} title={cardTitle} body={cardBody} />
          </View>
        </TouchableHighlight>);
    });

    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('./assets/img/ic_menu_black_24dp.png')}
            // onActionSelected={this._onActionSelected}
            onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
            style={styles.toolbar}
            titleColor='#e2e2d2'
            // subtitle={this.state.actionText}
            title="Barnacle" />
        </View>
        {cards}
      </View>
    );
  }
});

var toolbarActions = [
  { title: 'Create', icon: require('./assets/img/ic_create_black_48dp.png'), show: 'always'},
  { title: 'Filter'},
  { title: 'Settings', icon: require('./assets/img/ic_settings_black_48dp.png'), show: 'always'},
];

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#252C2F',
  },
  cardList: {
    backgroundColor: '#2A2D31',
    color: '#d2d2c2',
    borderBottomColor: '#ffffff',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderWidth: 5,
    flexDirection: 'column',
    height: 100,
  },
  toolbar: {
    backgroundColor: '#292a2d',
    borderBottomColor: '#111',
    borderBottomWidth: 2,
    height: 56,
  },
});

AppRegistry.registerComponent('Barnacle', () => Barnacle);
