import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  link: DS.attr('string'),
  uid: DS.attr('string'),
  playlist: DS.belongsTo('playlist')
});
