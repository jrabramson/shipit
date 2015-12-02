this.Manager = React.createClass({
	getInitialState: function() {
	  return {
	    campaigns: this.props.data,
	    filter: '',
	    expired: false,
	    completed: false,
	    selected: -1
	  };
	},
	getDefaultProps: function() {
	  return {
	    data: []
	  };
	},
	render: function() {
		return <div>
			  <div className='manage_filter'>
  				<div className='filter_section'>
  					Filter Campaign Type 
  					<select onChange={this._applyFilter} value={this.state.filter}>
  						<option value=''>All</option>
  						<option value='AE / RSM'>AE / RSM</option>
  						<option value='SDR'>SDR</option>
  						<option value='Marketing'>Marketing</option>
  						<option value='Customer'>Customer</option>
  					</select>
  				</div>
  				<div className='filter_section'>
  					Toggle Hidden <br />
  					<input type='checkbox' checked={this.state.expired} onChange={this._toggleExpired} /> Expired <br />
  					<input type='checkbox' checked={this.state.completed} onChange={this._toggleCompleted} /> Completed
  				</div>
  			</div>
			<div className='table_header'> 
			  <span></span>
			  <span> Name </span>
			  <span> Progess/Goal </span>
			  <span> Expiry </span>
			</div>
			  {this._filteredCampaigns().map(function(d, i) {
			  	return <Campaign 
			  		onSelect={this._showRefs} 
			  		key={d.campaign.id} 
			  		data={d.campaign}
			  		i={i}
			  		selected={this.state.selected == i} 
			  		refs={d.referrals} 
			  		icon={d.icon} 
			  	/>
			  }, this)}
			</div>
	},
	_showRefs: function(w, se) {
	    this.setState({ selected: this.state.selected == w ? -1 : w });
	},
	_applyFilter: function() {
		this.setState({ filter: event.target.value });
	},
	_toggleCompleted: function() {
		this.setState({ completed: !this.state.completed });
	},
	_toggleExpired: function() {
		this.setState({ expired: !this.state.expired });
	},
 	_filteredCampaigns: function() {
		return this.state.campaigns.filter(function(c) {
		  var expired = this.state.expired ? Date.parse(c.campaign.expiry) < new Date() : false;
		  var completed = this.state.completed ? c.referrals.length >= c.campaign.goal : false;
		  var filter = this.state.filter.length == 0 ? c.campaign.kind : this.state.filter;

		  return c.campaign.kind == filter && (!expired && !completed);
		}, this)
	}
});