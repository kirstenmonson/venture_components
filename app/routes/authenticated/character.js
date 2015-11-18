import Ember from 'ember';

export default Ember.Route.extend({
  /*model: function() {
    var char = this.store.findAll('character');
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve({ msg: "Hold Your Horses" });
      }, 3000);
    }).then(function() { return char;});*/

  model: function() {
    let charPromise = this.store.findAll('character');
    return new Ember.RSVP.Promise(resolve => {
      return Ember.run.later(() => {
        resolve(charPromise);
      }, 3000);
    });
  },

   ajax: function(url, type, hash) {
    var adapter = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);  // this is your requestObj
      hash.success = function(json) {
        Ember.run(null, resolve, json);
      };
      hash.error = function(jqXHR, textStatus, errorThrown) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };
      Ember.$.ajax(hash); // this is the same thing as $.ajax
    }, "DS: RestAdapter#ajax " + type + " to " + url); // they name their promise
  }

});

