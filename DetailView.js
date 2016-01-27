'use strict';
var React = require('react-native');
var DETAILURL = 'http://3g.163.com/ent/16/0127/10/BEB32NBL00031H2L.html';

var {
	StyleSheet,
  	Text,
 	View,
 	WebView,
} = React;

var DetailView = React.createClass({
	getInitialState: function() {
	    return {
	      url: DETAILURL,
	      status: 'No Page Loaded',
	      backButtonEnabled: false,
	      forwardButtonEnabled: false,
	      loading: true,
	      scalesPageToFit: true,
	    };
  },

	render:function(){
		var item = this.props.item;
	    return (
	      <View style={styles.container}>
	        <WebView style={styles.webView}
	        ref={'webview'}
	        automaticallyAdjustContentInsets={false}
	        url={item.url}/>
	      </View>
	    );
	  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  contentDe:{
  	 paddingTop:80,
  },
  webView:{
  	height: 500,
    backgroundColor: 'red',
  },
});

module.exports = DetailView;