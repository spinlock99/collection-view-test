import Ember from 'ember';
import TestView from '../views/test';

export default Ember.Controller.extend({
  views: [],

  actions: {
    addView: function () {
      this.get('views').pushObject(TestView);
    }
  }
});
