/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var REQUEST_URL = 'http://platform.sina.com.cn/sports_all/client_api?app_key=3571367214&_sport_t_=football&_sport_s_=opta&_sport_a_=teamOrder&type=213&season=2015&format=json';

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
          dataSource:this.state.dataSource.cloneWithRows(responseData.result.data),
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

  renderMovie:function(team) {
      return (
        <TouchableHighlight  onPress={() => this._pressRow(team.team_id)}>
        <View>
           <View style={styles.container} key={team.team_id}>
            <Image source = {{uri:team.logo}} style={styles.thumbnail}/>
            <View style =  {styles.rightContainer}>
              <Text style={styles.title}>{team.team_cn}</Text>
              <Text style={styles.year}>{team.score}</Text>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
        </TouchableHighlight>
       
      );
   },
   _pressRow:function(rowID:number) {
    this.props.navigator.push({
      title:'Detail',
      component:DetailView
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
