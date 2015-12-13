var React = require('react-native');
var { AppRegistry, StyleSheet,
      Text } = React;

class Card extends React.Component {
  render() {
    return(
        <Text style={styles.card}>
        Foo
      </Text>)
  } 
}

var styles = StyleSheet.create({
  card: {
    flex: 1
  }
});

AppRegistry.registerComponent('Card', () => Card);
export default Card;
