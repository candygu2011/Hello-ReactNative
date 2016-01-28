'use strict';
var React = require('react-native');
var {
	ActivityIndicatorIOS,
	View,
	StyleSheet,
}=React;

var TimerMixin = require('react-timer-mixin');
var ActivityIndicator12 = React.createClass({
	mixins: [TimerMixin],
	getInitialState:function(){
		return {
			animating:true,
		};
	},

	setToggleTimeout:function() {
		this.setTimeout (
			() => {
				this.setState({animating: !this.state.animating});
				this.setToggleTimeout();
			},
			1200
		);
	},

	componentDidMount:function(){
		this.setToggleTimeout();
	},

	render:function() {
		return (
			<ActivityIndicatorIOS 
				animating={this.state.animating}
				style={[styles.centering,{height:80}]}
				size='large'/>
		);
	}

});

exports.displayName = (undefined: ?string);
exports.framework = 'React';

exports.examples = [
	{
		title:'white',
		render:function(){
			return (
				<ActivityIndicatorIOS
					style={[styles.centering,styles,gray,{height:40}]}/>
			);
			
		}

	},

];

var styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

module.exports = ActivityIndicator12;