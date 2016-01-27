/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var REQUEST_URL = 'http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html';

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
} = React;
var DetailView = require('./DetailView');
var MovieList = React.createClass({
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
          dataSource:this.state.dataSource.cloneWithRows(responseData.T1348648517839),
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
        style={styles.listView} />
      );
  },

  renderMovie:function(item) {
      return (
        <TouchableHighlight  onPress={() => this._pressRow(item)}>
        <View>
           <View style={styles.container} key={item}>
            <Image source = {{uri:item.imgsrc}} style={styles.thumbnail}/>
            <View style =  {styles.rightContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.digest}>{item.digest}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
        </TouchableHighlight>
       
      );
   },
   _pressRow:function(item) {
    this.props.navigator.push({
      title:'Detail',
      component:DetailView,
      passProps:{item}
    })
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
    padding:10,

  },
   thumbnail:{
    width: 135,
    height:100,
  },
  rightContainer:{
    flex:1,
  },
  title:{
    fontSize:15,
    fontFamily:'Arial',
    textAlign:'center',
  },

  digest:{
    fontSize:13,
    textAlign:'left',
    color:'#888888',
    paddingLeft:10,

  },
  listView:{
    paddingTop:64,
    backgroundColor:'#F5FCFF',
  },
  separator: {
      height: 0.5,
      backgroundColor: '#CCCCCC',
    },
});
module.exports = MovieList;
// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
