import { WidgetWithDataSource, Option } from '@cf/core';

export default class MultipleDropdownList extends WidgetWithDataSource {
  label = '多选下拉选择';
  placeholder = '';
  model = {
    options: [] as Array<Option>
  }

  async validateModel() {
    let errors = [];
    if (this.isRequired && this.model.options.length == 0) {
      errors.push('指定了必填，但没有选择任何值');
    }
    return errors;
  }
}