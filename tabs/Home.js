'use strict';
var React = require('react-native');
var {
	StyleSheet,
	Text,
	View,
} = React;

var homeTab = React.creatClass({
	render:function() {
		return (
			<View style = {styles.container}>
				<View style={styles.header}>
				</View>
				<Text>
					Home Tab!
				</Text>
			</View>
		);
	}

});

var styles = StyleSheet.create({
	container:{
		flex: 1,
	    backgroundColor: '#fff'
	},
	header: {
	    height: 40,
	    background: '#ff0000'
  },
});

module.exports = homeTab;