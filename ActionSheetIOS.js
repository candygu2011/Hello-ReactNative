'use strict';

var React = require('react-native');
var {
  ActionSheetIOS,
  StyleSheet,
  Text,
  View,
  AppRegistry,

  Alert,
  Platform,
  TouchableHighlight,
} = React;

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Destruct',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

var UIExplorerBlock = require('./UIExplorerBlock');
var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';
// SimpleAlertExampleBlock
var ActionSheetIOS = React.createClass(
{
  render:function(){
    return (
      <View>
        <TouchableHighlight style={style.wrapper} onPress={() =>Alert.alert(
            'Alert title',
            alertMessage,
          )}>
        <View style={style.button}>
          <Text>
            Alert with message and default1 button
          </Text>
        </View>
        </TouchableHighlight>
        <TouchableHighlight style={style.wrapper} onPress={() => Alert.alert(
            'Alert title',
            alertMessage,
            [
              {text:'OK',onPress:() => console.log('OK Pressed!')},
            ]
          )}>
            <View style={style.button}>
              <Text>
                Alert with one button
              </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={style.wrapper} onPress={() => Alert.alert(
            'Alert title',
            alertMessage,
            [
              {text:'Cancel',onPress:() => console.log('Cancel Pressed!')},
              {text:'OK',onPress:() => console.log('OK Pressed!')},
            ]
          )}>
          <View style={style.button}>
            <Text>
              Alert with two buttons
            </Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
    
});

var AlertExample = React.createClass({
  static: {
    title: 'Alert',
    description: 'Alerts display a concise and informative message ' +
    'and prompt the user to make a decision.',
  },
  render: function() {
    return (
        <UIExplorerBlock title={'Alert'}>
          <HelloWorld />
        </UIExplorerBlock>
      );
  }
});

module.exports = {
  AlertExample,
  HelloWorld,
}

var ActionSheetHelloWorld = React.createClass({
  getInitialState() {
    return {
      clicked: 'none',
    };
  },

  render() {
    return (
      <View>
        <Text onPress={this.showActionSheet} style={style.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  },
/******showActionSheet********/
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }
});

var ShareHelloWorld = React.createClass({
  getInitialState() {
    return {
      text: ''
    };
  },

  render() {
    return (
      <View>
        <Text onPress={this.showShareActionSheet} style={style.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  },
/******ShareActionSheet********/
  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://code.facebook.com',
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  }
});

var style = StyleSheet.create({
  button: {
    marginBottom: 10,
    backgroundColor:'#eeeeee',
    paddingLeft:20,
  },
  wrapper:{
      borderRadius:5,
      marginBottom:5,
  },

});

// exports.title = 'ActionSheetIOS';
// exports.description = 'Interface to show iOS\' action sheets';
// exports.examples = [
//   {
//     title: 'Show Action Sheet',
//     render(): ReactElement { return <ActionSheetHelloWorld />; }
//   },
//   {
//     title: 'Show Share Action Sheet',
//     render(): ReactElement { return <ShareHelloWorld />; }
//   }
// ];

// /******AlterIOS********/
// var UIExplorerBlock = require('./UIExplorerBlock');
// var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
//                    'catalysts for change. Dynamically revolutionize.';
// var HelloWorld = React.createClass({
// 	render:function(){
// 		return (

// 		);
// 	},
// });
module.exports = ActionSheetIOS;
// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);