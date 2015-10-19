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
    $('.row_container').toggleClass('in');
  },
  render: function() {
    var now = new Date();
    var campaignStatus = this.props.refs.length == this.props.data.goal ? 'complete' :
    Date.parse(this.props.data.expiry) < now ? 'expired' : '';
    return <div className='row_container'>
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
        <div className='manage_campaign_cell manage_control'>
          <a href={'/campaigns/' + this.props.data.id}>Show</a>
          <a href={'/campaigns/' + this.props.data.id + '/edit/'}>Edit</a>
          <a rel="nofollow" data-method="delete" href={'/campaigns/' + this.props.data.id}>Delete</a>
        </div>
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
        return <div key={ref.id} class='ref_row'>
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