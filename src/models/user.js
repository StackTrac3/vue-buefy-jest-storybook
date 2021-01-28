// Boilerplate: vuex-orm - see store/index and vuex-orm docs

import { Model } from '@vuex-orm/core';

export default class Group extends Model {
  static entity = 'users';

  static fields() {
    return {
      id: this.uid(),
      name: this.attr('Default Name'),
    };
  }
}
