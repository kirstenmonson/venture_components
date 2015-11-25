//all steps are asynchronous
//this means if you had a debug in characters, and a debug here, you'd see this debug first
//it tells the steps before they actually start going
import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'venture/tests/helpers/start-app';

module('Acceptance | characters', {
  beforeEach: function() {
    //this is for isolation
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /characters', function(assert) {
  visit('/authenticated/characters');

  andThen(function() {
    assert.equal(currentURL(), '/authenticated/characters');
  });
});
