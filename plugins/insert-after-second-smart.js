import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    const expData = this.get('experiment');
    const groupFrames = [
      'job-smart-bio',
      'job-smart-comp',
      'job-smart-math',
      'job-smart-food'
    ];
    const shuffled = Ember.$.shuffle(groupFrames);
    const finalSequence = [
      'smart-job-intro',
      ...shuffled.slice(0, 2),
      'smart-job-mid',
      ...shuffled.slice(2)
    ];
    expData.set('frameList', finalSequence);
  }
});
