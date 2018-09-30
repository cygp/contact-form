var Contact = React.createClass({
  propTypes : {
    item: React.PropTypes.object.isRequired, //czemu PropTypes, a nie propTypes
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://www.stuff.tv/sites/stuff.tv/files/avatar.png'
        }),
        React.createElement('div', {className: 'contactData'},
          React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('p', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 
            this.props.item.email
          )
        )
      )
    )
  },
});