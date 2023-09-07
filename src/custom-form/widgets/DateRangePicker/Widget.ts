import { Widget } from '@cf/core';

export default class DateRangePicker extends Widget {
  label = '日期/时间范围';
  ifShowTime = false;
  model = {
    start: '',
    finish: ''
  };

  async validateModel() {
    let errors = [];
    if (this.isRequired && !this.model.start && !this.model.finish) {
      errors.push('指定了必填，但没有值');
    }
    return errors;
  }
}
