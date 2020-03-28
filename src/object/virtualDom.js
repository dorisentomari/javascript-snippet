const VALUE = 'value';
const STYLE = 'style';
const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const setAttr = (node, key, value) => {
  const tagName = node.tagName.toUpperCase();
  switch (key) {
  case VALUE:
    if (tagName === INPUT || tagName === TEXTAREA) {
      node.value = value;
    } else {
      node.setAttribute(key, value);
    }
    break;
  case STYLE:
    node.style.cssText = value;
    break;
  default:
    node.setAttribute(key, value);
    break;
  }

};

export const render = dom => {
  const el = document.createElement(dom.type || 'div');
  const props = dom.props || {};

  for (const key in props) {
    // eslint-disable-next-line no-prototype-builtins
    if (props.hasOwnProperty(key)) {
      setAttr(el, key, props[key]);
    }

  }

  dom.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child);
    el.append(child);
  });
  return el;
};

export const renderDom = (el, target = window.root) => target.appendChild(el);
