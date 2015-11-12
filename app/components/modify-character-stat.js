import Ember from 'ember';

export default Ember.Component.extend({

    _modifyStat: function(stat, amount){
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },

   hasPointsLeft: Ember.computed.gt('pointsLeft', 0),

  actions: {

  increaseStat: function(stat) {
      if(this.get('hasPointsLeft')) {
      this.decrementProperty('pointsLeft');
      this._modifyStat(stat, 1);
      }
    },

    decreaseStat: function(stat) {
      if(this.get(stat) > 1) {
      this.incrementProperty('pointsLeft');
      this._modifyStat(stat, -1);
      }
    },
  }
});
