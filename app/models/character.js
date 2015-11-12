import Ember from 'ember';
import DS from 'ember-data';

const BASE_HP = 40;
const BASE_MM = 30;

export default DS.Model.extend({
  statPointsToSpend: DS.attr('number', {defaultValue:20}),
  level: DS.attr('number', {defaultValue: 1}),
  intelligence: DS.attr('number', {defaultValue: 1}),
  constitution: DS.attr('number', {defaultValue: 1}),
  strength: DS.attr('number', {defaultValue: 1}),
  wisdom: DS.attr('number', {defaultValue: 1}),
  dexterity: DS.attr('number', {defaultValue: 1}),
  charisma: DS.attr('number', {defaultValue: 1}),
  numb: Math.floor(Math.random()*5),

  items: DS.hasMany('items', {async: true}),



  maxHealth: Ember.computed('level', 'constitution', function() {
    return BASE_HP + (this.get('constitution') * this.get('level'));
  }),

    maxMana: Ember.computed('level', 'intelligence', function() {
    return BASE_MM + (this.get('intelligence') * this.get('level'));
  }),

   itemWeights: Ember.computed.mapBy('items','weight'),


  itemWeight: Ember.computed.sum('itemWeights'),

  hampered: Ember.computed('itemWeight','maxWeight', function(){
     return this.get('itemWeight') > this.get('maxWeight');
  }),

  maxWeight: Ember.computed('strength', function() {
     return this.get('strength') * 5;
  }),

  name: DS.attr('string', {
    defaultValue: function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }}),

  characterClass: DS.attr('string', {
    defaultValue: function(){
    var charClasses = ['Wizard', 'Warrior', 'Bard', 'Elf', 'Valkyrie'];
    return charClasses[Math.floor(Math.random()*5)];
  }}),

  charPic: DS.attr('string', {
    defaultValue: function(){
    var charPics = ['http://i1295.photobucket.com/albums/b636/wjl16/wizard_zpse2541bd8.jpeg', 'http://orig11.deviantart.net/c052/f/2012/125/1/1/asian__dragon_warrior_by_hdy9108-d4ynph4.jpg', 'https://dmwordoftheweek.files.wordpress.com/2014/07/dd-bard.jpg', 'http://dreamatico.com/data_images/elf/elf-4.jpg', 'http://static.comicvine.com/uploads/original/11113/111139323/3616966-2273163-valkyrie.jpg'];
    return charPics[Math.floor(Math.random()*5)];
  }}),


  burdenPercent: Ember.computed('itemWeight', 'maxWeight', function() {
    return Math.min(this.get('itemWeight') / this.get('maxWeight') * 100, 100);
  }),

  itemConstitutionBonuses: Ember.computed.mapBy('items','constitutionBonus'),
  constitutionBonus: Ember.computed.sum('itemConstitutionBonuses'),
  effectiveConstitution: Ember.computed('constitutionBonus','constitution', function() {
    return this.get('constitution') + this.get('constitutionBonus');
  })

});