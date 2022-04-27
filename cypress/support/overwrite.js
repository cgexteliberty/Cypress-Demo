Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    'data-cy',
    'data-test',
    'data-testid',
    'id',
    'class',
    'tag',
    'attributes',
    'nth-child'
  ]
});

Cypress.Commands.overwrite('get', (fn, selector) => {
  if (selector.startsWith('$') && selector.endsWith('$')) {
    let sel = selector.substring(1, selector.length - 1);
    // eslint-disable-next-line no-param-reassign
    selector = `[data-eliberty="${sel}"]`;
  }

  return fn(selector);
});
