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
  }
});

