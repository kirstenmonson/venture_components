import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
      'character.name' : {
        presence: true,
        length: {minimum: 3}
      }
  },
  characters: Ember.computed.alias('model'),
  character: Ember.computed.alias('characters.firstObject'),
  //character: Ember.computed.alias('character', 'characters.firstObject'),
  hasItems:Ember.computed.notEmpty('character.items'),


  _modifyStat: function(stat, amount){
    this.set('character.'+stat, this.get('character.'+stat)+amount);
  },

  actions: {
    changeCharacter: function(char) {
      this.set('character', char);
    },

    addChar: function(){
      var char = this.store.createRecord('character');
      char.save();
      this.set('character', char);
    },

    deleteChar: function(){
      this.get('character').deleteRecord();
      this.get('character').save().then(function() {
      this.set('character', this.get('characters.firstObject'));
      });
    },

    saveCharacter: function() {
      if(this.get('isValid')) {
      this.get('character').save();
      }
    },

    increaseStat: function(stat) {
      this._modifyStat(stat, 1);
    },

    levelUp: function() {
      this._modifyStat('level', 1);
      this.send('showModal', {
        template: 'level-character',
        character: this.get('character'),
        pointsLeft: 3
      });
    },

    decreaseStat: function(stat) {
      this._modifyStat(stat, -1);
    },

    removeItem: function(item) {
      this.get('character.items').removeObject(item);
    },

    addItem: function() {
      var item = this.store.createRecord('item', {
        name:'Sword of Life',
        weight: 4,
        constitutionBonus:3
      });
      this.get('character.items').pushObject(item);
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