import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    console.log("After model called");
    Ember.run.schedule("afterRender",this,function() {
      init();
    });
  }
});
