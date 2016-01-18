'use strict';
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TabBarIOS,
	Image,
} = React;

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
				<View style={styles.pageView}>
					<Text style={styles.title}>Home</Text>
				</View>
			</TabBarIOS.Item>

	        <TabBarIOS.Item
	          title="Order"
	          icon={ require('./icon_order@2x.png') }
	          onPress={() => this.changeTab('order')}
	          selected={ this.state.selectedTab === 'order' }>
	          <View style={ styles.pageView }>
	            	<Text style={styles.title}>Order</Text>
	          </View>
	        </TabBarIOS.Item>

	         <TabBarIOS.Item
	          title="My"
	          icon={ require('./icon_my@2x.png') }
	          onPress={() => this.changeTab('my')}
	          selected={ this.state.selectedTab === 'my' }>
	          <View style={ styles.pageView }>
	           		<Text style={styles.title}>My</Text>
	          </View>
	        </TabBarIOS.Item>

		</TabBarIOS>	
		);
	}
});
var styles = StyleSheet.create({
  pageView:{
  	backgroundColor:'#ffff',
  	flex:1,
  },
  title:{
  	fontSize:20,
  	backgroundColor:'F5FCFF',
  	fontFamily:'Arial',
    textAlign:'center',
    paddingTop:20,
  },
});
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);