import Ember from 'ember';

export default Ember.Controller.extend({
  identification: Ember.computed.alias('model'),
  password: Ember.computed.alias('model'),
});
