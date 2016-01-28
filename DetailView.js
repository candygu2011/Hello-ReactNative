'use strict';
var React = require('react-native');
var DETAILURL = 'http://3g.163.com/ent/16/0127/10/BEB32NBL00031H2L.html';
// http://c.3g.163.com/nc/article/BEE5GETC00031H2L/full.html

var {
	StyleSheet,
  	Text,
 	View,
 	WebView,
 	ActivityIndicatorIOS,
} = React;

var DetailView = React.createClass({
	getInitialState: function() {
	    return {
	      url: DETAILURL,
	      loaded:false,
	      scalesPageToFit: true,
	    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData:function(){
  	var item = this.props.item;
  	fetch(item.url)
  		// .then((response) => response.xml())
  		.then((responseData) => {
  			this.setState({
  			loaded:true,
  			});
  		})
  		.done();
  },

	render:function(){
		var item = this.props.item;
		if (!this.state.loaded) {
			return this.renderLoadingView();
		};
	    return (
	      <View style={styles.container}>
	        <WebView style={styles.webView}
	        ref={'webview'}
	        automaticallyAdjustContentInsets={false}
	        url={'http://c.3g.163.com/nc/article/BEE2FH9R00031GVS/full.html'}/>
	      </View>
	    );
	  },
	   renderLoadingView:function() {
      return(
        <View style={styles.container}>
          <Text>
            loading View ....
          </Text>
          <ActivityIndicatorIOS color="red"/>
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
    backgroundColor: 'white',
  },
});

module.exports = DetailView;