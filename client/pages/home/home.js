Session.setDefault('lightState', true);

Template.home.onCreated(function () {
  Template.home.__helpers.get('getState').call();
  Session.set('lightState', true);
});

Template.home.helpers({
  getState: function () {
    const variableName = 'lightState';
    try {
      Meteor.call('getVariable', variableName, function (err, status) {
        Session.set('lightState', status);
        $('.loading-switch').hide();
        $('.switch').show();
      });
    } catch (e) {
      console.log(e);
    }
  },
  getChecked: function () {
    if (Session.get('lightState')) {
      return 'checked';
    } else {
      return '';
    }
  }
});

Template.home.events({
  'change input': function (event) {
    const functionName = 'relay';
    let newState = event.currentTarget.checked;
    let params = '';
    if (event.currentTarget.checked) {
      params = 'on';
    } else {
      params = 'off';
    }
    let args = {
      params: params
    };
    Meteor.call('sendFunction', functionName, args, function (err, status) {
      Session.set('lightState', status);
    });
  }
});
