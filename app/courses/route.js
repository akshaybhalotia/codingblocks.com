import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    Ember.run.schedule("afterRender",this,function() {
      init();
    });
  }
});
