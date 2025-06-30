/**
 * @typedef {Object} MegaMenuItem
 * @property {string} label
 * @property {string?} to
 * @property {string?} icon
 * @property {boolean?} active
 * @property {boolean} disabled=
 */

/**
 * @typedef {Object} MegaMenuOptions
 * @property {MegaMenuItem[]} items - The list of routes to render
 */

/**
 * MegaMenu - A vanilla JavaScript navigation menu with dropdown functionality
 * Usage: new MegaMenu(element, options)
 */
export default class MegaMenu {
  /**
   * 
   * @param {HTMLElement} element 
   * @param {MegaMenuOptions} options 
   */
  constructor(element, options = {}) {
    this.element = element;
    this.itemElements = new Map();
    this.options = {
      items: [],
      currentPath: window.location.pathname,
      closeDelay: 200,
      itemDelay: 100,
      touchCloseDelay: 10000, // Longer delay for touch devices
      ...options
    };
    
    this.state = {
      currentItems: null,
      activeItemId: null,
      isMenuOpen: false,
      isTouchDevice: false,
      lastTouchTime: 0
    };
    
    this.leaveTimeout = null;
    this.touchCloseTimeout = null;
    
    // Detect touch capability
    this.detectTouchDevice();
    
    this.init();
  }

  /**
   * Detect if device supports touch
   */
  detectTouchDevice() {
    this.state.isTouchDevice = (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  init() {
    this.render();
    this.bindEvents();
  }

  /**
   * Main render method
   */
  render() {
    this.element.innerHTML = '';
    this.element.className = 'mega-menu w-full relative';
    
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.className = 'flex items-center gap-1';
    
    this.options.items.forEach(item => {
      const li = document.createElement('li');
      li.setAttribute('data-nav-menu-item', '');
      li.appendChild(this.renderMenuItem(item));
      ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    this.element.appendChild(nav);
    
    // Create dropdown container
    this.dropdownContainer = document.createElement('div');
    this.dropdownContainer.className = 'absolute top-full left-0 w-full mt-2.5 z-50 bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-lg shadow-xl opacity-0 translate-y-1 scale-95 transition-all duration-200 ease-out pointer-events-none';
    this.element.appendChild(this.dropdownContainer);
  }

  /**
   * Render individual menu item
   */
  renderMenuItem(item) {
    const itemId = item.id || item.label;
    const hasChildren = item.children && item.children.length > 0;
    const isCurrent = this.isCurrentRoute(item);
    const isActive = this.state.activeItemId === itemId;
    
    // Create wrapper div
    const wrapper = document.createElement('div');
    
    // Create the main element (link or div)
    const element = item.to ? document.createElement('a') : document.createElement('div');
    
    if (item.to) {
      element.href = item.to;
      
      // Prevent default navigation on touch devices when there are children
      if (hasChildren && this.state.isTouchDevice) {
        element.addEventListener('click', (e) => {
          if (this.state.activeItemId !== itemId) {
            e.preventDefault();
          }
        });
      }
    }
    
    element.className = this.getMenuItemClasses(item, isCurrent, isActive, hasChildren);
    element.setAttribute('data-item-id', itemId);
    element.classList.add("flex", "items-center", "gap-1")
    
    // Add icon if present
    if (item.icon) {
      const icon = this.createIcon(item.icon);
      icon.className = 'flex-shrink-0';
      element.appendChild(icon);
    }

    
    // Add label
    const label = document.createElement('div');
    label.className = 'flex-1';
    label.textContent = item.label;
    element.appendChild(label);
    
    // Add chevron if has children
    if (hasChildren) {
      const chevron = this.createIcon('lucide:chevron-down');
      chevron.className = 'flex-shrink-0 transition-transform duration-200';
      chevron.dataset.chevron = 'true';
      if (isActive) chevron.classList.add('rotate-180');
      element.appendChild(chevron);
    }
    
    // Add active indicator
    if (isCurrent) {
      const indicator = document.createElement('div');
      indicator.className = 'absolute inset-x-0 -bottom-2 h-0.5 bg-blue-500 rounded-full';
      element.appendChild(indicator);
    }
    
    this.itemElements.set(itemId, element);
    wrapper.appendChild(element);
    
    return wrapper;
  }

  /**
   * Get classes for menu item
   */
  getMenuItemClasses(item, isCurrent, isActive, hasChildren) {
    let classes = 'group relative flex items-center gap-2 px-2 py-1 text-[0.785rem] font-medium rounded-md transition-all duration-200 cursor-pointer';
    
    if (isCurrent) {
      classes += ' text-white bg-slate-800/50';
    } else {
      classes += ' text-slate-300 hover:text-white hover:bg-slate-500/20';
    }
    
    if (isActive && hasChildren) {
      classes += ' text-blue-400';
    }
    
    return classes;
  }

  /**
   * Render dropdown content
   */
  renderDropdownContent(items) {
    this.dropdownContainer.innerHTML = '';
    
    const content = document.createElement('div');
    content.className = 'p-2 min-w-[280px] max-w-full';
    
    // Group items for better layout
    const groupedItems = this.groupItems(items);
    
    const grid = document.createElement('div');
    grid.className = `grid gap-2 ${groupedItems.length === 1 ? 'grid-cols-1' : 'grid-cols-2 gap-6'}`;
    
    groupedItems.forEach((group) => {
      const groupDiv = document.createElement('div');
      groupDiv.className = 'space-y-1';
      
      group.forEach(item => {
        groupDiv.appendChild(this.renderDropdownItem(item));
      });
      
      grid.appendChild(groupDiv);
    });
    
    content.appendChild(grid);
    this.dropdownContainer.appendChild(content);
  }

  /**
   * Render individual dropdown item
   */
  renderDropdownItem(item) {
    const isActive = this.isCurrentRoute(item);
    const isDisabled = item.disabled === true;
    
    // Create the element (link or div)
    const element = (item.to && !isDisabled) ? document.createElement('a') : document.createElement('div');
    
    if (item.to && !isDisabled) {
      if (item.external) {
        element.href = item.to;
        element.target = item.target || '_blank';
        element.rel = 'noopener noreferrer';
      } else {
        element.href = item.to;
        element.target = item.target || '_self';
      }
    }
    
    element.className = this.getDropdownItemClasses(item, isActive, isDisabled);
    
    // Add custom styles if present
    if (item.style) {
      const styles = this.parseStyles(item.style);
      Object.assign(element.style, styles);
    }
    
    // Add icon container
    if (item.icon) {
      const iconContainer = document.createElement('div');
      iconContainer.className = this.getIconContainerClasses(isActive, isDisabled);
      
      const icon = this.createIcon(item.icon);
      //icon.className = 'w-4 h-4';
      iconContainer.appendChild(icon);
      
      element.appendChild(iconContainer);
    }
    
    // Add content
    const contentDiv = document.createElement('div');
    contentDiv.className = 'flex-1 min-w-0';
    
    const labelContainer = document.createElement('div');
    labelContainer.className = 'flex items-center gap-2';
    
    const label = document.createElement('span');
    label.className = this.getLabelClasses(isActive, isDisabled);
    label.textContent = item.label;
    labelContainer.appendChild(label);
    
    // Add external link indicator
    if (item.external) {
      const externalIcon = this.createIcon('lucide:external-link');
      externalIcon.className = 'w-3 h-3 flex-shrink-0 opacity-60';
      labelContainer.appendChild(externalIcon);
    }
    
    contentDiv.appendChild(labelContainer);
    element.appendChild(contentDiv);
    
    // Add active indicator
    if (isActive) {
      const indicator = document.createElement('div');
      indicator.className = 'absolute inset-y-0 left-0 w-1 bg-primary-500 rounded-r-full';
      element.appendChild(indicator);
    }
    
    // Add disabled indicator
    if (isDisabled) {
      const disabledIcon = this.createIcon('lucide:lock');
      disabledIcon.className = 'w-3 h-3 text-slate-600 flex-shrink-0';
      element.appendChild(disabledIcon);
    }
    
    return element;
  }

  /**
   * Helper methods for classes
   */
  getDropdownItemClasses(item, isActive, isDisabled) {
    let classes = 'overflow-hidden group relative flex items-center gap-3 p-2 rounded-lg transition-all duration-200 border border-transparent';
    
    if (isDisabled) {
      classes += ' opacity-50 cursor-not-allowed';
    } else if (isActive) {
      classes += ' bg-blue-900/30 border-blue-500/50 text-blue-100';
    } else {
      classes += ' hover:bg-slate-800/50 hover:border-slate-600/50 cursor-pointer';
    }
    
    // Handle custom classes
    if (item.class) {
      if (Array.isArray(item.class)) {
        classes += ' ' + item.class.join(' ');
      } else if (typeof item.class === 'object') {
        Object.entries(item.class).forEach(([className, condition]) => {
          if (condition) classes += ' ' + className;
        });
      } else {
        classes += ' ' + item.class;
      }
    }
    
    return classes;
  }

  getIconContainerClasses(isActive, isDisabled) {
    let classes = 'flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-colors';
    
    if (isDisabled) {
      classes += ' bg-slate-700 text-slate-600';
    } else if (isActive) {
      classes += ' bg-blue-500/20 text-blue-400';
    } else {
      classes += ' bg-slate-700 text-slate-400 group-hover:bg-slate-600 group-hover:text-white';
    }
    
    return classes;
  }

  getLabelClasses(isActive, isDisabled) {
    let classes = 'font-medium text-sm truncate';
    
    if (isDisabled) {
      classes += ' text-slate-500';
    } else if (isActive) {
      classes += ' text-blue-100';
    } else {
      classes += ' text-slate-200 group-hover:text-white';
    }
    
    return classes;
  }

  /**
   * Group items for layout
   */
  groupItems(items) {
    const columns = items.length > 4 ? 2 : 1;
    
    if (columns === 1) {
      return [items];
    }
    
    const mid = Math.ceil(items.length / 2);
    return [items.slice(0, mid), items.slice(mid)];
  }

  /**
   * Check if route is current
   */
  isCurrentRoute(item) {
    if (item.to) {
      return item.to === this.options.currentPath || this.options.currentPath.startsWith(item.to);
    }
    
    return item.children?.some(child => 
      child.to && (child.to === this.options.currentPath || this.options.currentPath.startsWith(child.to))
    );
  }

  /**
   * Parse style string or object
   */
  parseStyles(style) {
    if (typeof style === 'string') {
      const styles = {};
      style.split(';').forEach(rule => {
        const [property, value] = rule.split(':').map(s => s.trim());
        if (property && value) {
          styles[property] = value;
        }
      });
      return styles;
    }
    return style;
  }

  /**
   * Create icon element (simplified - you'll need to replace with your icon system)
   */
  createIcon(iconName) {
    const icon = document.createElement('i');
    icon.innerHTML = `<iconify-icon icon="${iconName}"></iconify-icon>`
    return icon;
  }

  /**
   * Event handling
   */
  bindEvents() {
    if (this.state.isTouchDevice) {
      this.bindTouchEvents();
    } else {
      this.bindMouseEvents();
    }
    
    // Global click handler for touch devices to close dropdown when clicking outside
    if (this.state.isTouchDevice) {
      document.addEventListener('click', (e) => {
        if (!this.element.contains(e.target) && this.state.isMenuOpen) {
          this.hideDropdown();
        }
      });
    }
  }

  /**
   * Bind mouse events for desktop
   */
  bindMouseEvents() {
    // Menu area leave/enter
    this.element.addEventListener('pointerleave', () => this.onMenuAreaLeave());
    this.element.addEventListener('pointerenter', () => this.onMenuAreaEnter());
    
    // Menu item hover
    this.element.addEventListener('pointerenter', (e) => {
      const menuItem = e.target.closest('[data-item-id]');
      if (menuItem) {
        const itemId = menuItem.getAttribute('data-item-id');
        const item = this.findItemById(itemId);
        if (item) {
          this.onTrigger(itemId, item.children && item.children.length > 0, item.children);
        }
      }
    }, true);
    
    // Dropdown area enter
    this.dropdownContainer.addEventListener('pointerenter', () => this.onMenuAreaEnter());
  }

  /**
   * Bind touch events for mobile/touch devices
   */
  bindTouchEvents() {
    // Handle touch/click on menu items
    this.element.addEventListener('click', (e) => {
      const menuItem = e.target.closest('[data-item-id]');
      if (menuItem) {
        const itemId = menuItem.getAttribute('data-item-id');
        const item = this.findItemById(itemId);
        
        if (item && item.children && item.children.length > 0) {
          e.preventDefault(); // Prevent navigation
          
          if (this.state.activeItemId === itemId && this.state.isMenuOpen) {
            // Clicking the same item closes the dropdown
            this.hideDropdown();
          } else {
            // Show dropdown for this item
            this.onTouchTrigger(itemId, item.children);
          }
        }
      }
    });
    
    // Handle touches on dropdown content
    this.dropdownContainer.addEventListener('touchstart', () => {
      this.cancelTouchCloseTimeout();
    });
    
    // Handle scroll to close dropdown
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (this.state.isMenuOpen) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          this.hideDropdown();
        }, 150);
      }
    }, { passive: true });
  }

  /**
   * Handle touch trigger
   */
  onTouchTrigger(itemId, content) {
    this.cancelTouchCloseTimeout();
    
    this.state.currentItems = content;
    this.state.activeItemId = itemId;
    this.state.isMenuOpen = true;
    this.state.lastTouchTime = Date.now();
    
    this.showDropdown();
    
    // Set timeout to auto-close after a longer delay on touch devices
    this.touchCloseTimeout = setTimeout(() => {
      this.hideDropdown();
    }, this.options.touchCloseDelay);
  }

  /**
   * Cancel touch close timeout
   */
  cancelTouchCloseTimeout() {
    if (this.touchCloseTimeout) {
      clearTimeout(this.touchCloseTimeout);
      this.touchCloseTimeout = null;
    }
  }

  /**
   * Find item by ID
   */
  findItemById(id) {
    return this.options.items.find(item => (item.id || item.label) === id);
  }

  /**
   * Handle trigger events (mouse)
   */
  onTrigger(itemId, show, content) {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
      this.leaveTimeout = null;
    }
    
    if (show && content) {
      this.state.currentItems = content;
      this.state.activeItemId = itemId;
      this.state.isMenuOpen = true;
      this.showDropdown();
    } else {
      this.leaveTimeout = setTimeout(() => {
        this.hideDropdown();
      }, this.options.itemDelay);
    }
  }

  /**
   * Menu area events (mouse)
   */
  onMenuAreaLeave() {
    if (this.state.isTouchDevice) return; // Don't handle mouse leave on touch devices
    
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
    }
    this.leaveTimeout = setTimeout(() => {
      this.hideDropdown();
    }, this.options.closeDelay);
  }

  onMenuAreaEnter() {
    if (this.state.isTouchDevice) return; // Don't handle mouse enter on touch devices
    
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
      this.leaveTimeout = null;
    }
  }

  /**
   * Show/hide dropdown
   */
  showDropdown() {
    if (this.state.currentItems) {
      this.renderDropdownContent(this.state.currentItems);
      this.dropdownContainer.style.pointerEvents = 'auto';
      
      // Force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.dropdownContainer.offsetHeight;
      
      this.dropdownContainer.classList.remove('opacity-0', 'translate-y-1', 'scale-95');
      this.dropdownContainer.classList.add('opacity-100', 'translate-y-0', 'scale-100');
    }
    
    // Update active states
    this.updateActiveStates();
  }

  hideDropdown() {
    this.cancelTouchCloseTimeout();
    
    this.state.currentItems = null;
    this.state.activeItemId = null;
    this.state.isMenuOpen = false;
    
    this.dropdownContainer.classList.add('opacity-0', 'translate-y-1', 'scale-95');
    this.dropdownContainer.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    
    setTimeout(() => {
      if (!this.state.isMenuOpen) {
        this.dropdownContainer.style.pointerEvents = 'none';
      }
    }, 200);
    
    // Update active states
    this.updateActiveStates();
  }

  /**
   * Update active states
   */
  updateActiveStates() {
    for (const [itemId, element] of this.itemElements.entries()) {
      const item = this.findItemById(itemId);
      const isCurrent = this.isCurrentRoute(item);
      const isActive = this.state.activeItemId === itemId;
      const hasChildren = item.children && item.children.length > 0;

      element.className = this.getMenuItemClasses(item, isCurrent, isActive, hasChildren);
      
      // Update chevron rotation
      const chevron = element.querySelector('[data-chevron]');
      if (chevron) {
        chevron.classList.toggle('rotate-180', isActive);
      }
    }
  }

  /**
   * Public API methods
   */
  updateItems(items) {
    this.options.items = items;
    this.render();
    this.bindEvents();
  }

  updateCurrentPath(path) {
    this.options.currentPath = path;
    this.updateActiveStates();
  }

  destroy() {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
    }
    this.cancelTouchCloseTimeout();
    this.element.innerHTML = '';
    this.element.className = '';
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MegaMenu;
} else if (typeof window !== 'undefined') {
  window.MegaMenu = MegaMenu;
}