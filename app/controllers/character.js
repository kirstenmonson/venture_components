import Ember from 'ember';
import Item from '../models/item';

export default Ember.Controller.extend({
  character: Ember.computed.alias('model'),
  hasItems:Ember.computed.notEmpty('character.items'),


  _modifyStat: function(stat, amount){
    this.set('model.'+stat, this.get('model.'+stat)+amount);
  },

  actions: {
    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },

    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    },

    addItem: function() {
      this.get('character.items').pushObject(Item.createRandom());
    },

    changeAttr: function() {
      var elem = document.getElementById("character.attributeselect");
      var sel = elem.options[elem.selectedIndex].innerHTML;
      return[sel];
    },


  hasItems: Ember.computed.notEmpty('character.items'),



  burdenPercent: Ember.computed('character.itemWeight', 'character.maxWeight', function() {
    return Math.min(this.get('character.itemWeight') / this.get('character.maxWeight') * 100, 100);
  }),
    
    
  itemConstitutionBonuses: Ember.computed.mapBy('items','bonuses.constitution'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus','constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  })


  }
});