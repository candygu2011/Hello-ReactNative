'use strict';
var React = require('react-native');
var REQUESTURL = 'http://c.3g.163.com/nc/article/BEE2FH9R00031GVS/full.html';
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
		var keyStr = this.props.item.postid;
		return {
			news:null,
			loaded:false,
		};
	},
	componentDidMount: function() {
	    this.fetchData();
	  },
 	 fetchData: function() {
	    fetch(REQUESTURL)
	      .then((response) => response.json())
	      .then((responseData) => {
	      	console.log('parsed json', news);
	       this.setState({
		      news: responseData.BEE2FH9R00031GVS,
		      loaded:true,
		    });
	      })
	      .done();
	  },

	render:function(){
		if (!this.state.loaded) {
			return this.renderLoadingView();
		};
		return (
	      <View style={styles.container}>
	        <Image source={{uri:this.props.item}} style={styles.thumbnail}/>
	        <View>
	          <Text>{news.body}</Text>
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
});

module.exports = NewDetail;