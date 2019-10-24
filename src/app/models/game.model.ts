export class GameModel {
  id = 0;
  title1 = '';
  title2 = '';
  select1 = 0;
  select2 = 0;
  select1last = false;
  select2last = false;

  public constructor(data = {}) {
    Object.assign(this, data);
  }
}
