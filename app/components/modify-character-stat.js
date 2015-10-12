import Ember from 'ember';

export default Ember.Component.extend({

    _modifyStat: function(title, amount){
    this.set('character.'+title, this.get('character.'+title)+amount);
  },

  actions: {

  increaseStat: function(title) {
      this._modifyStat(title, 1);
    },

    decreaseStat: function(title) {
      this._modifyStat(title, -1);
    },
  }
});
