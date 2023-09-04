import { Widget } from '@cf/core';
import { isNil } from 'lodash';
export default class Number extends Widget {
  label: string = '数字';
  defaultValue: number | null = null;
  placeholder: string | null = '';
  unit: string | null = '';
  model = { value: null as number | null };

  async validateModel() {
    let errors = [];
    if (this.isRequired && isNil(this.model.value)) {
      errors.push('指定了必填，但没有值');
    }
    return errors;
  }
}
