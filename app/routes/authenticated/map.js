import Ember from 'ember';

export default Ember.Route.extend({
  map: Ember.inject.service(),
  model: function(params) {
  //then go look up by character id



  //return this.store.query('world-view', {character_id: char.get('id')}).then((worldViews) => {this.get('map').addToWorldView(worldView.get('firstObject'));})
}

});
