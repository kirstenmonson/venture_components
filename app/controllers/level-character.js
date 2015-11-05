import Ember from 'ember';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model.character'),

   hasPointsLeft: Ember.computed.gt('model.pointsLeft', 0),
});