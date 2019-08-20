const promptDirectory = require('inquirer-directory');

const addReduxModuleGenerator = require('@apptension/react-scripts/plop/reduxModule');
const addReactComponentGenerator = require('@apptension/react-scripts/plop/reactComponent');

module.exports = function(plop) {
  plop.setPrompt('directory', promptDirectory);

  addReduxModuleGenerator(plop);
  addReactComponentGenerator(plop);
};
