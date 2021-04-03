import HttpUtil from '../http/HttpUtil.js';

export default class IrpfDriver {
    constructor() {
        this.xhr = new HttpUtil();
        this.get = new Proxy(this.xhr.get, {
            apply: function (target, thisArg, args) {
                console.log('target');
                console.log(target);
                console.log('thisArg');
                console.log(thisArg);
                console.log('args');
                console.log(args);
                console.log('chamando...');
                return target(...args);
            },
        });
    }

    async getTable() {
        return this
          .get('http://localhost:8080', '/irpf')
          .then(function (rawResponse) {
            return rawResponse.json();
          });
    }

    /**
     *
     * @param {Declaration} declaration
     */
    async calculate(declaration) {
        const response = await this.xhr.post(
            'http://localhost:8080',
            '/irpf/calculate',
            declaration
        );

        return await response.json();
    }
}
