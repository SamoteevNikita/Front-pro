class HtmlElement {
  constructor(tagName, attributes = {}, content = '') {
    this.tagName = tagName;        
    this.attributes = attributes; 
    this.content = content;        
    this.children = [];           
  }


  setAttribute(name, value) {
    this.attributes[name] = value;
  }


  appendChild(child) {
    this.children.push(child);
  }


  render() {
    const el = document.createElement(this.tagName);


    for (let attr in this.attributes) {
      el.setAttribute(attr, this.attributes[attr]);
    }


    if (this.content) {
      el.textContent = this.content;
    }


    this.children.forEach(child => {
      el.appendChild(child.render());
    });

    return el;
  }


  appendTo(selector) {
    const target = document.querySelector(selector);
    if (target) {
      target.appendChild(this.render());
    }
  }
}



const container = new HtmlElement('div', { class: 'card', id: 'main' });


const heading = new HtmlElement('h2', {}, 'привет');


const paragraph = new HtmlElement('p', {}, 'как дела?');


container.appendChild(heading);
container.appendChild(paragraph);


container.appendTo('body');
