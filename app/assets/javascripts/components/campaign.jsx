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
      {this.state.selected ? <CampaignRefs refs={this.props.refs} path={this.props.data.custom_path} /> : ''}
  	</div>
  }
});

this.CampaignRefs =  React.createClass({
  render: function() {
    refs = this.props.refs;
    return <div className='campaign_refs'>
      <div className='ref_info ref_header'>Contact</div>
      <div className='ref_info ref_header'>Note</div>
      <div className='ref_info ref_header'>Referree</div>
      <div className='ref_info ref_header'></div>
      <hr />
      {refs.map(function(ref) {
        return <div key={ref.id} className='ref_row'>
          <div className='ref_info'>{ref.first_name} {ref.last_name}<br/>{ref.email}<br/>{ref.company}</div>
          <div className='ref_info'>{ref.note}</div>
          <div className='ref_info'>{ref.referree_name}<br/>{ref.referree_email}</div>
          <div className='ref_info'><img className='ref_push' src='/assets/api-icon.png' onClick={() => this._pushRef(ref.id)}/></div>
          <hr />
        </div> 
      }.bind(this))}
    </div>
  },
  _pushRef: function(ref) {
    $.ajax({
        type: 'POST',
        url: '/' + this.props.path + '/referrals/' + ref + '/push',
        data: { id: ref },
        success: function (data, msg, jqXHR) {
            $.gritter.add({ title: 'Success', text: msg });
        }
    });
  }
});