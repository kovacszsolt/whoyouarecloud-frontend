export class FinishModel {
  id = 0;
  title = '';
  choose1 = '';
  choose2 = '';

  public constructor(data = {}) {
    Object.assign(this, data);
  }
}
