import Ember from 'ember';

export default Ember.Component.extend({
  characters: Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),
    _modifyStat: function(stat, amount){
    this.set('char.'+stat, this.get('char.'+stat)+amount);
  },

  actions: {

  increaseStat: function(stat, char) {
      this._modifyStat(stat, 1, char);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },
  }
});
