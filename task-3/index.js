class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    this.handler = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    if (!(event in this.handler)) {
        this.handler[event] = [];
    }
    this.handler[event].push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    if (event in this.handler) {
      for (let i = 0; i < this.handler[event].length; i++) {
        this.handler[event][i](data);
      }
    }
  }
}

export default Emitter;
