import { Widget } from '@cf/core';
import { isNil } from 'lodash-es';

export default class Number extends Widget {
  label = '数字';
  defaultValue?: number;
  placeholder?: string;
  unit?: string;
  model = { value: undefined as number | undefined };

  async validateModel() {
    let errors = [];
    if (this.isRequired && isNil(this.model.value)) {
      errors.push('指定了必填，但没有值');
    }
    return errors;
  }
}
