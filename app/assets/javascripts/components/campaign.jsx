this.Campaign = React.createClass({
  getInitialState: function() {
    return {
      campaign: this.props.data,
      refs: this.props.refs,
      icon: this.props.icon
    };
  },
  getDefaultProps: function() {
    return {
      campaign: []
    };
  },
  showRefs: function(event) {
    this.setState({ selected: !this.state.selected })
    $(this.refs.row_container.getDOMNode()).toggleClass('in');
  },
  render: function() {
    var now = new Date();
    var campaignStatus = this.props.refs.length == this.props.data.goal ? 'complete' :
    Date.parse(this.props.data.expiry) < now ? 'expired' : '';
    return <div className='row_container' ref='row_container'>
      <div className={campaignStatus + ' manage_campaign_row'} onClick={this.showRefs}>
        <div className='manage_campaign_cell'>
        </div>          
        <div className='manage_campaign_cell'>
          {this.props.data.title}
        </div>             
        <div className='manage_campaign_cell'>
          {this.props.refs.length} / {this.props.data.goal}
        </div>    	
        <div className='manage_campaign_cell'>
          {this.props.data.expiry}
        </div>
      </div>
      <div className='manage_campaign_cell manage_control'>
        <a href={'/' + this.props.data.custom_path}>Show</a><br/>
        <a href={'/' + this.props.data.custom_path + '/edit/'}>Edit</a><br/>
        <a rel="nofollow" data-method="delete" href={'/' + this.props.data.custom_path}>Delete</a>
      </div>
      {this.state.selected ? <CampaignRefs refs={this.props.refs}/> : ''}
  	</div>
  }
});

this.CampaignRefs =  React.createClass({
  render: function() {
    refs = this.props.refs;
    return <div className='campaign_refs'>
      <h3> Referrals </h3>
      <div className='ref_info ref_header'>Name</div>
      <div className='ref_info ref_header'>Email</div>
      <div className='ref_info ref_header'>Note</div>
      <div className='ref_info ref_header'>Company</div>
      <div className='ref_info ref_header'>Referree Name</div>
      <div className='ref_info ref_header'>Referree Email</div>
      <hr />
      {refs.map(function(ref) {
        return <div key={ref.id} className='ref_row'>
          <div className='ref_info'>{ref.first_name} {ref.last_name}</div>
          <div className='ref_info'>{ref.email}</div>
          <div className='ref_info'>{ref.note}</div>
          <div className='ref_info'>{ref.company}</div>
          <div className='ref_info'>{ref.referree_name}</div>
          <div className='ref_info'>{ref.referree_email}</div>
          <hr />
        </div> 
      })}
    </div>
  }
});