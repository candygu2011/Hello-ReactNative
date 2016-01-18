/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {
      dataSource:new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2,
      }),
      loaded:false,
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
          loaded:true,
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
      );
  },

  renderMovie:function(movie1) {
      return (
        <View style={styles.container}>
          <Image source = {{uri:movie1.posters.thumbnail}} style={styles.thumbnail}/>
          <View style =  {styles.rightContainer}>
            <Text style={styles.title}>{movie1.title}</Text>
            <Text style={styles.year}>{movie1.year}</Text>
          </View>
        </View>
      );
   },

  renderLoadingView:function() {
      return(
        <View style={styles.container}>
          <Text>
            loading View ....
          </Text>
        </View>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   thumbnail:{
    width: 53,
    height:81,
  },
  rightContainer:{
    flex:1,
  },
  title:{
    fontSize:15,
    fontFamily:'Arial',
    textAlign:'center',
  },
  year:{
    fontSize:10,
    textAlign:'center',
  },
  listView:{
    paddingTop:20,
    backgroundColor:'#F5FCFF',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
