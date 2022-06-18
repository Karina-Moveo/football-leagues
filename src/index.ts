//  function component() {
//    const element = document.createElement('div');

//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());
const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

hello()