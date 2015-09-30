import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //characters: Ember.computed.alias('characters', 'model');
    var char = this.store.createRecord('character');
    var sword = this.store.createRecord('item', {name: 'Sword of Life', weight: 4, constitutionBonus:3});
    char.get('items').pushObject(sword);
    return char;
  }
});
