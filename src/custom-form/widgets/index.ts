import { Form } from '@cf/core/Form';
import { Widget } from '@cf/core/Widget';
import { isObject } from 'lodash-es';

const modules = import.meta.glob('./**/index.ts', {
  import: 'default',
  eager: true,
});

const widgetMap = new Map();
const displayViewMap = {};
const designViewMap = {};
const propertyViewMap = {};
for (const path of Object.keys(modules)) {
  const key = getKey(path);
  const module = modules[path] as any;
  widgetMap.set(key, module.Widget);
  Reflect.set(displayViewMap, `${key}Display`, module.Display);
  Reflect.set(designViewMap, `${key}Design`, module.Design);
  Reflect.set(propertyViewMap, `${key}Property`, module.Property);
}

function getKey(path: string) {
  let endIndex = path.lastIndexOf('/');
  let startIndex = path.lastIndexOf('/', endIndex - 1);
  return path.substring(startIndex + 1, endIndex);
}

function createWidget(form: Form, type: string, data?: object) {
  const ctor = widgetMap.get(type);
  if (!ctor) {
    return null;
  }
  let obj = new ctor() as Widget;
  obj.type = type;
  obj.form = form;

  if (isObject(data)) {
    obj.init(data);
  }
  return obj;
}
export { widgetMap, createWidget, displayViewMap, designViewMap, propertyViewMap };