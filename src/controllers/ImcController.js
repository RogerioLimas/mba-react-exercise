export default class ImcController {
  constructor() {
    this.imcDriver = null;
  }

  async prepare() {
    if (!this.imcDriver) {
      const { default: ImcDriver } = await import('../drivers/ImcDriver');
      this.imcDriver = new ImcDriver();
    }

    return this;
  }

  async loadTable(onSucceed) {
    const instance = await this.prepare();
    instance
      .imcDriver
      .getTable()
      .then(onSucceed)
      .catch(function (err) {
        console.log(err);
        alert(`Sorry, can't load the table. ${err.responseText}`);
      });
  }

  async calculate(person) {
    const instance = await this.prepare();
    return instance
      .imcDriver
      .calculate(person);
  }
}
