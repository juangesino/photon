import { Meteor } from 'meteor/meteor';

const deviceId = process.env.deviceId;
const accessToken = process.env.accessToken;

Meteor.methods({
  sendFunction: function (functionName, args) {
    this.unblock();
    try {
      const url = "https://api.particle.io/v1/devices/" + deviceId + "/" + functionName + "?access_token=" + accessToken;
      const result = Meteor.http.post(url, {
        data: args
      });
      if (result.data.return_value == 1) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  },
  getVariable: function (varName) {
    this.unblock();
    try {
      const url = "https://api.particle.io/v1/devices/" + deviceId + "/" + varName + "?access_token=" + accessToken;
      const result = Meteor.http.get(url);
      return result.data.result;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
});
