/**
 * @typedef {Object} TypewriterOptions
 * @property {number} speed - The speed of the typewriter effect in milliseconds
 * @property {number|undefined} loop - Number of times to loop (undefined = infinite)
 * @property {number} pause - The pause in-between loops in milliseconds
 * @property {number} textPause - The pause between different texts in array in milliseconds
 */
export default class Typewriter {
  /**
   * 
   * @param {HTMLElement | string} element
   * @param {TypewriterOptions} options
   */
  constructor(element, options = {}) {
    if (typeof element === "string") {
      this.elements = Array.from(document.querySelectorAll(element));
    } else {
      this.elements = [element];
    }
    this.elements = this.elements.filter(Boolean);
    this.options = {
      speed: 50,
      loop: undefined,
      pause: 2000,
      textPause: 2000,
      ...options
    };
    
    this.init();
  }

  init() {
    this.elements.forEach((el) => {
      const texts = this.getTextsFromElement(el);
      
      // Store original texts on first run
      if (!el.dataset.originalTexts) {
        el.dataset.originalTexts = JSON.stringify(texts);
      }
      
      // Initialize element state
      el._typewriterState = {
        currentLoop: 0,
        currentTextIndex: 0,
        texts: texts
      };
      
      this.typeText(el, texts[0], 0);
    });
  }

  getTextsFromElement(el) {
    // Method 1: Check for JSON array in data-text
    if (el.dataset.text) {
      try {
        if (el.dataset.text.includes('|')) {
          return el.dataset.text.split('|').map(t => t.trim());
        }

        const parsed = JSON.parse(el.dataset.text);
        if (Array.isArray(parsed)) {
          return parsed;
        }

        return [el.dataset.text];
      } catch (e) {
        console.error('TypewriterError: ', e);
        if (el.dataset.text.includes('|')) {
          return el.dataset.text.split('|').map(t => t.trim());
        }
        return [el.dataset.text];
      }
    }

    // Method 2: Check for multiple data-text-* attributes
    const textAttrs = [];
    let i = 0;
    while (el.dataset[`text${i}`] !== undefined) {
      textAttrs.push(el.dataset[`text${i}`]);
      i++;
    }
    if (textAttrs.length > 0) {
      return textAttrs;
    }

    // Method 3: Fallback to element content
    return [el.textContent || ''];
  }

  typeText(el, text, i) {
    if (i < text.length) {
      if (i === 0) {
        el.innerHTML = ''; // Clear element at start of each text
      }
      el.innerHTML += text.charAt(i);
      setTimeout(() => this.typeText(el, text, i + 1), this.options.speed);
    } else {
      // Current text is complete, check if there are more texts in the array
      this.handleNextText(el);
    }
  }

  handleNextText(el) {
    const state = el._typewriterState;
    const nextTextIndex = state.currentTextIndex + 1;
    
    if (nextTextIndex < state.texts.length) {
      // Move to next text in array
      state.currentTextIndex = nextTextIndex;
      setTimeout(() => {
        this.typeText(el, state.texts[nextTextIndex], 0);
      }, this.options.textPause);
    } else {
      // All texts completed, handle looping
      this.handleLoop(el);
    }
  }

  handleLoop(el) {
    const state = el._typewriterState;
    
    if (this.options.loop === undefined || state.currentLoop < this.options.loop - 1) {
      state.currentLoop++;
      state.currentTextIndex = 0; // Reset to first text
      
      // Wait before restarting the entire sequence
      setTimeout(() => {
        this.typeText(el, state.texts[0], 0);
      }, this.options.pause);
    }
    // If loop limit reached, animation stops
  }

  // Method to manually restart the animation
  restart() {
    this.elements.forEach(el => {
      if (el._typewriterState) {
        el._typewriterState.currentLoop = 0;
        el._typewriterState.currentTextIndex = 0;
      }
    });
    this.init();
  }

  // Method to stop the animation
  stop() {
    this.options.loop = 0;
  }

  // Method to add new text to an element
  addText(elementOrSelector, newTexts) {
    const elements = typeof elementOrSelector === 'string' 
      ? Array.from(document.querySelectorAll(elementOrSelector))
      : [elementOrSelector];
      
    elements.forEach(el => {
      if (el._typewriterState) {
        const textsToAdd = Array.isArray(newTexts) ? newTexts : [newTexts];
        el._typewriterState.texts.push(...textsToAdd);
      }
    });
  }
}