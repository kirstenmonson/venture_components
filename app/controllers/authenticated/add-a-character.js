import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  validations: {
      'character.name' : {
        presence: true,
        length: {minimum: 3}
      }
  },

  character: Ember.computed.alias('model'),

  actions: {
    randomizeCharacter: function() {
      var randomCharacter = this.get('randomCharacterFenerator').randomize();
      this.set('character', randomCharacter);
    },

    addChar: function(){
      var char = this.store.createRecord('character');
      char.save();
      this.set('character', char);
    },

    deleteChar: function(){
      this.get('character').deleteRecord();
      this.get('character').save().then(() => {
        this.transitionToRoute('authenticated.character');
      });
    },

    saveCharacter: function() {
      if(this.get('isValid')) {
      this.get('character').save().then(() => {
        this.transitionToRoute('authenticated.character');
      })}
    },

    changeAttr: function() {
      var elem = document.getElementById("character.attributeselect");
      var sel = elem.options[elem.selectedIndex].innerHTML;
      return[sel];
    },
  }
});