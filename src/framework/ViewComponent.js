export default class ViewComponent {
    /**
     * Guard state control and renderization process of the IMC view
     */
    constructor(elementName) {
      console.log(`initializing ${this.__proto__.constructor.name} as ${elementName}`);
      this.element = document.querySelector(elementName);
      this.state = {};
    }
  
    /**
     * This method is meant to be triggered right after the page completes the load proccess
     */
    onLoad() {
        this.paint();
    }
  
    /**
     * This method represent the HTML produced by this component
     */
    render() {
      //this is to explain lexical scope
      throw new Error('Every component must implement the render method!');
    }

    /**
     * This method allows the component to react to state change
     */
    async stateUpdated() {
      console.warn('no overwrite for stateUpdated on this class ' + this.__proto__.constructor.name);
    }
  
    /**
     * This method is meant to put render result inside the element being managed
     */
    paint() {
      this.element.innerHTML = this.render();
    }

    /**
     * Update the state of this object and render it again.
     * @param {object} state 
     */
    async update(state) {
      this.state = state;
      await this.stateUpdated();
      this.paint();
    }

    /**
     * Observe an instance of any object ... if any property changes and the object state (through obj.isValid)
     * is valid, the view will be updated ( through udpate method ) 
     * @param {Object} obj 
     */
    observe(obj) {
      const self = this;
      if (obj) {
        return new Proxy(obj, {
          set (target, prop, value, receiver) {
            const updated = Reflect.set(target, prop, value);
            console.log(`updated ${updated}`);
            if (target.isValid()) {
              console.log('triggering update to the view');
              self.update({ person: target });             
            } else {
              console.log('object not valid yet, skiping update on view...');
            }
            
            return true;
          }
        });
      }
  
      return obj;
    }
  }
