import Ember from 'ember';

import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  
actions: {
    sessionInvalidationSucceeded: function(){
      var currentRoute = this.controllerFor('application').get('currentRouteName');

      if (currentRoute === 'character') {
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
  }
});