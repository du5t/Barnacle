'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
// import MsgList from './com/msg-list'
// import Card from './com/msg-view/card'
// import * as HelpCards from './com/help/cards'
// import WelcomeHelp from './com/help/welcome'
var Card = require('./components/Card');

var SwitchAndroid = require('SwitchAndroid');
var ToolbarAndroid = require('ToolbarAndroid');

var Barnacle = React.createClass({
  render: function() {
    return (
      <View>
        <ToolbarAndroid
           actions={toolbarActions}
           navIcon={require('./assets/img/ic_menu_black_24dp.png')}
           // onActionSelected={this._onActionSelected}
           onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
          style={styles.toolbar}
          // subtitle={this.state.actionText}
          title="Barnacle" />
      
        <Text style={styles.instructions}>
          URL bar
        </Text>

        <Card />
        
        <Text style={styles.instructions}>
          Post input area
        </Text>
      
        <Text style={styles.instructions}>
          Posts area
          <Text style={styles.instructions}>
            A single post
            Should be clickable, navigating to its own thread
          </Text>
        </Text>
      </View>
    );
  }
});

var toolbarActions = [
  {title: 'Create', icon: require('./assets/img/ic_create_black_48dp.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Settings', icon: require('./assets/img/ic_settings_black_48dp.png'), show: 'always'},
];

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    flex: 1,
    backgroundColor: '#e9eaed',
    height: 56,
  },
});

AppRegistry.registerComponent('Barnacle', () => Barnacle);
