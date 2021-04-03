export default class ImcController {
  constructor() {
    this.irpfDriver = null;
  }

  async prepare() {
    if (!this.irpfDriver) {
      const { default: IrpfDriver } = await import('../drivers/IrpfDriver');
      this.irpfDriver = new IrpfDriver();
    }

    return this;
  }

  async loadTable(onSucceed) {
    const instance = await this.prepare();
    instance
      .irpfDriver
      .getTable()
      .then(onSucceed)
      .catch(function (err) {
        console.log(err);
        alert(`Sorry, can't load the table. ${err.responseText}`);
      });
  }

  async calculate(declaration) {
    const instance = await this.prepare();
    return instance
      .irpfDriver
      .calculate(declaration);
  }
}
