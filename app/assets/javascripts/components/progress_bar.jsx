this.ProgressBar = React.createClass({
  getInitialState: function() {
    return {
      progess: this.props.progess
    };
  },
  getDefaultProps: function() {
    return {
      progess: 0
    };
  },
  showRefs: function(event) {
    this.setState({ selected: !this.state.selected })
  },
  render: function() {
  	return (
  		<div id='progress'><div id='bar'></div></div>
  	)
  }
});