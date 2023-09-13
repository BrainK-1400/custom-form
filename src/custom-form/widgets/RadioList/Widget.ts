import { WidgetWithDataSource, Option } from '@cf/core';

export default class RadioList extends WidgetWithDataSource {
  label = '单选列表';
  model = {
    option: null as Option | null | undefined
  }

  async validateModel() {
    let errors = [];
    if (this.isRequired && !this.model.option) {
      errors.push('指定了必填，但没有选择任何值');
    }
    return errors;
  }
}