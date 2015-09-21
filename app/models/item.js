import Ember from 'ember';


var Item = Ember.Object.extend({
  name: "",
  weight: 0,
  bonuses: {
    constitution: 0,
    strength: 0
  }

});

Item.reopenClass({
  createRandom: function(){
    return Item.create({
      name: "magic sward of life",
      weight:10,
      bonuses:{constituion: 3}});
  }
});

export default Item;
