import Ember from 'ember';
const BASE_HP = 40;
const BASE_MM = 30;

export default Ember.Object.extend({
  level: 1,
  intelligence: 17,
  constitution: 17,
  strength: 20,
  wisdom: 21,
dexterity: 17,
charisma: 17,


  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

    maxMana: Ember.computed('level', 'intelligence', function() {
    return BASE_MM + (this.get('intelligence') * this.get('level'));
  }),

  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  charClass: Ember.computed(function(){

    var charClass = ['Wizard', 'Warrior', 'Bard', 'Elf', 'Valkyrie'];
    return charClass[Math.floor(Math.random()*charClass.length)];
  })
});