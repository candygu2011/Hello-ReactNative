'use strict';
var React = require('react-native');
// var REQUESTURL = 'http://c.3g.163.com/nc/article/BEE2FH9R00031GVS/full.html';
var PREFIX = 'http://c.3g.163.com/nc/article/';
var SUFFIX = '/full.html';
// var REQUESTURL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var {
	StyleSheet,
  	Text,
 	View,
 	Image,
 	ActivityIndicatorIOS,
} = React;

var NewDetail = React.createClass({

	getInitialState:function(){
		console.log('getInitialState');
		return {
			news:null,
			loaded:false,
		};
	},
	componentDidMount: function() {
		console.log('componentDidMount');
	    this.fetchData();
	  },
 	 fetchData: function() {
 	 	var item = this.props.item;
		var REQUESTURL = PREFIX + item.postid + SUFFIX;
		console.log('-----------------',REQUESTURL);
	    fetch(REQUESTURL)
	      .then((response) => response.json())
	      .then((responseData) => {
	       this.setState({
		      news: responseData, // key 是可变的item.postid
		      loaded:true,
		    });
	      })
	      .done();
	  },

	render:function(){
		// var item = this.props.item;
		if (!this.state.loaded) {
			return this.renderLoadingView();
		};
		return (
	      <View style={styles.container}>
	        <Image source={{uri:this.props.item.imgsrc}} style={styles.thumbnail}/>
	        <View>
	          <Text style={styles.contentText}>{this.props.item.digest}</Text>
	        </View>
         </View>
	    );

	},

	renderLoadingView:function() {
      return(
        <View style={styles.loading}>
          <Text>
            loading View ....
          </Text>
          <ActivityIndicatorIOS color="red"/>
        </View>
      );
    }
});

var styles = StyleSheet.create({

	title: {
		fontSize:15,
	    fontFamily:'Arial',
	    textAlign:'center',
	    paddingTop:80
	},

	loading: {
	    flex: 1,
	    flexDirection:'row',
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	    padding:10,

  },
	  thumbnail:{
	    flex: 5,
	    height:200,
	    width:300,
	    marginTop:70,
	    alignSelf: 'center',
	    backgroundColor:'red',
	  },
	   container:{
	    justifyContent: 'flex-start',
	    alignItems: 'flex-start',
	    backgroundColor: '#F5FCFF',
	  },

	  contentText:{
	  	fontSize:13,
	    fontFamily:'Arial',
	    textAlign:'center',
	    paddingLeft:10,
	  },
});

module.exports = NewDetail;