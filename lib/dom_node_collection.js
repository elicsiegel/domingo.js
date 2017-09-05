class DOMNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }

  html(string) {

    if (string === undefined) {
      return this.elements[0].innerHTML;
    } else {
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].innerHTML = string;
      }
    }
  }

  empty() {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = '';
    }
  }

  append(elements) {
    if (elements.length === undefined) {
      elements = [elements];
    }
    for (var i = 0; i < this.elements.length; i++) {
      for (var j = 0; j < elements.length; j++) {
        this.elements[i].appendChild(elements[j]);
      }
    }
  }

  attr(key, value) {
    if (value === undefined) {
      for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].getAttribute(key)) {
          return this.elements[i].getAttribute(key);
        }
      }
    } else {
      for (var j = 0; j < this.elements.length; j++) {
        this.elements[j].setAttribute(key, value);
      }
    }
  }

  addClass(value) {
    for (let i=0; i < this.elements.length; i++) {
      let classes = this.elements[i].getAttribute('class');
      classes += ` ${value}`;
      this.elements[i].setAttribute('class', classes);

    }

  }

  removeClass(value) {
    for (let i = 0; i < this.elements.length; i++) {
      let classes = this.elements[i].getAttribute('class').split(' ');
        for (var j = 0; j < classes.length; j++) {
          if (classes[j] === value) {
            classes.splice(j, 1);
          }
        }
      this.elements[i].setAttribute('class', classes.join(' '));
      if (classes.length === 0) this.elements[i].removeAttribute('class');
    }
  }

  children() {
    let children = [];
    for (let i=0; i < this.elements.length; i++) {
      if (this.elements[i].children.length >= 1) {
        children.push(this.elements[i].children);
      }
    }
    return new DOMNodeCollection(children[0]);
  }

  parent() {
    let parent = [];
    for (let i=0; i < this.elements.length; i++) {
      if (this.elements[i].parentElement !== null) {
        parent.push(this.elements[i].parentElement);
      }
    }
    return new DOMNodeCollection(parent[0]);
  }

  find(element) {
    let foundEls = document.querySelectorAll(element);
    return new DOMNodeCollection(foundEls);
  }

  remove(element) {
    // debugger
    for (var i = 0; i < this.elements.length; i++) {
      let els = this.elements[i].querySelectorAll(element);
      for (var j = 0; j < els.length; j++) {
        els[j].remove();
      }
    }
  }

  on(type, callback) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(type, callback);
      // debugger
      this.elements[i]["cb-" + type] = callback;
    }
  }

  off(type) {
    // debugger
    for (var i = 0; i < this.elements.length; i++) {
      // debugger
      let cb = this.elements[i]["cb-" + type];
      this.elements[i].removeEventListener(type, cb);
    }
  }
}

module.exports = DOMNodeCollection;
