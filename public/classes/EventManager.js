export class EventManager {
  constructor() {
    this.listeners = {};
  }

  // add a listener to this event type
  addEventListener(eventType, listener) {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
  }

  // remove a listener from an event type
  removeEventListener(eventType, listener) {
    const listeners = this.listeners[eventType];
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  dispatchEvent(eventType, eventData) {
    const listeners = this.listeners[eventType];
    if (listeners) {
      listeners.forEach((listener) => listener(eventData));
    }
  }
}

