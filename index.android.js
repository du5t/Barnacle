'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  ToolbarAndroid,
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

var createSbot = require('scuttlebot')
  .use(require('scuttlebot/plugins/master'))
  .use(require('scuttlebot/plugins/gossip'))
  .use(require('scuttlebot/plugins/friends'))
  .use(require('scuttlebot/plugins/replicate'))
  .use(require('scuttlebot/plugins/blobs'))
  .use(require('scuttlebot/plugins/invite'))
  .use(require('scuttlebot/plugins/block'))
  .use(require('scuttlebot/plugins/logging'))
  .use(require('scuttlebot/plugins/private'))
  .use(require('scuttlebot/plugins/local'))
  .use(require('./api'));

/*
schema:
   { type: 'post', text: String, root: MsgLink, branch: MsgLink, recps: FeedLinks, mentions: Links }
   { type: 'about', about: Link, name: String, image: BlobLink }
   { type: 'contact', contact: FeedLink, following: Bool, blocking: Bool }
   { type: 'vote', vote: { link: Ref, value: -1|0|1, reason: String } }
   { type: 'pub', pub: { link: FeedRef, host: String, port: Number } }
*/

var lorem = "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! 'Now fax quiz Jack!' my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch 'Jeopardy!', Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz. Brawny gods just";

var newData = Array(5,1).map( () => {
  return schemas.post(lorem)
}).concat(data);

var Barnacle = React.createClass({
  render: function() {

    var cards = newData.map( (card) => {
      var cardTitle;
      var cardBody;
      switch (card.type) {
        case "post":
          cardTitle = "foo";
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
        <ScrollView style={styles.cardContainer} automaticallyAdjustContentInsets={false}>
          {cards}
        </ScrollView>
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
    flex: 1
  },
  cardContainer: {
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
