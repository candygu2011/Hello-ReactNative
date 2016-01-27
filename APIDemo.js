'use strict';
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	NavigatorIOS,
	TabBarIOS,
	View,
	Text,

} = React;
var MovieList = require('./MovieList');
var HelloWorld = React.createClass({

getInitialState:function() {
    return {
      selectedTab: 'home'
    }
  },
changeTab:function(tabName){
  		this.setState({
  			selectedTab:tabName
  		});
  	},
	render:function(){
	return (
		<TabBarIOS>
			<TabBarIOS.Item
					title='Home'
					icon={require('./icon_home@2x.png')}
					onPress={() => this.changeTab('home')}
					selected={this.state.selectedTab === 'home'}
					>
					<NavigatorIOS
					    style={ styles.container }
					    initialRoute={
					      {
					        title: 'Today News',
					        component:MovieList
					      }
				    }/>			
			</TabBarIOS.Item>

		    <TabBarIOS.Item
	          title="Order"
	          icon={ require('./icon_order@2x.png') }
	          onPress={() => this.changeTab('order')}
	          selected={ this.state.selectedTab === 'order' }>
	          <View style={ styles.tabItem2 }>
	          	<Text> Hello Demo</Text>
	          </View>
	        </TabBarIOS.Item>
	    </TabBarIOS>
	)
	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title:{
  	fontSize:20,
  	backgroundColor:'F5FCFF',
  	fontFamily:'Arial',
    textAlign:'center',
    paddingTop:20,
  },
  tabItem2:{
  	backgroundColor:'red',
  	flex:1,
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);