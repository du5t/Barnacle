var React = require('react-native');
var { AppRegistry,
      StyleSheet,
      Text,
      View,
} = React;

class Card extends React.Component {
  
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{this.props.title}</Text>
        <Text style={styles.cardText}>{this.props.body}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  card: {
    backgroundColor: '#2A2D31',
    color: '#d2d2c2',
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
    borderBottomWidth: 5,
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 100,
  },
  cardTitle: {
    backgroundColor: '#4A4D51',
    color: '#d2d2c2',
    alignSelf: 'stretch',
  },
  cardText: {
    color: '#c2c2b2',
  }
});

export default Card;
