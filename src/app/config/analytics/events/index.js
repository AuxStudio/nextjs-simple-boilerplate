function Event(category, action, nonInteraction) {
  this.category = category;
  this.action = action;
  this.nonInteraction = nonInteraction;
  // NOTE: label and value are dynamic
}

const events = {
  // Example
  // setup: {
  //   completed: new Event('Setup', 'Completed', false),
  // },
};

export default events;
