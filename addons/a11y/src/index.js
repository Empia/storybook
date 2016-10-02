import addons from '@kadira/storybook-addons';
import A11yManager from './A11yManager';

const manager = new A11yManager();

function checkA11y(storyFn, context) {
  const channel = addons.getChannel();
  return manager.wrapStory(channel, storyFn, context);
}

export { checkA11y };