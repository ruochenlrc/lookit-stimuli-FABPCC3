import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    const expData = this.get('experiment');
    const groupFrames = [
      'job-friendly-bio',
      'job-friendly-comp',
      'job-friendly-math',
      'job-friendly-food'
    ];
    const shuffled = Ember.$.shuffle(groupFrames);
    const finalSequence = [
      'friendly-job-intro',
      ...shuffled.slice(0, 2),
      'friendly-job-mid',
      ...shuffled.slice(2)
    ];
    expData.set('frameList', finalSequence);
  }
});
