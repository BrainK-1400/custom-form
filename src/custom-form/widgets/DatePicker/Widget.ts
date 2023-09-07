import { Widget } from '@cf/core';
export default class DatePicker extends Widget {
  label = '日期/时间';
  ifShowTime = false;
  placeholder = '';
  defaultValue = '';
  model = { value: '' };

  async validateModel() {
    let errors = [];
    if (this.isRequired && !this.model.value) {
      errors.push('指定了必填，但没有值');
    }
    return errors;
  }
}
