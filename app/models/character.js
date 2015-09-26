import Ember from 'ember';
import DS from 'ember-data';

import Item from './item';
const BASE_HP = 40;
const BASE_MM = 30;

export default DS.Model.extend({
  level: DS.attr('number', {defaultValue: 1}),
  intelligence: 17,
  constitution: 17,
  strength: 4,
  wisdom: 21,
dexterity: 17,
charisma: 17,
  numb: Math.floor(Math.random()*5),

  items: Ember.computed(function(){
    return [Item.createRandom()];
  }),



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

  name: Ember.computed(function(){
    var names = ['Zultar', 'Zorky', 'Merlin'];
    return names[Math.floor(Math.random()*names.length)];
  }),

  charClass: Ember.computed('numb', function(){

    var charClasses = ['Wizard', 'Warrior', 'Bard', 'Elf', 'Valkyrie'];
    return charClasses[this.get('numb')];
  }),

  charPic: Ember.computed('numb', function(){
    var charPics = ['http://i1295.photobucket.com/albums/b636/wjl16/wizard_zpse2541bd8.jpeg', 'http://orig11.deviantart.net/c052/f/2012/125/1/1/asian__dragon_warrior_by_hdy9108-d4ynph4.jpg', 'https://dmwordoftheweek.files.wordpress.com/2014/07/dd-bard.jpg', 'http://dreamatico.com/data_images/elf/elf-4.jpg', 'http://static.comicvine.com/uploads/original/11113/111139323/3616966-2273163-valkyrie.jpg'];
    return charPics[this.get('numb')];
  }),


  burdenPercent: Ember.computed('itemWeight', 'maxWeight', function() {
    return Math.min(this.get('itemWeight') / this.get('maxWeight') * 100, 100);
  }),

});