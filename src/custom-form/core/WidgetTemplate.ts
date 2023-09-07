export interface WidgetTemplateGroup {
  name: string;
  children: Array<WidgetTemplate>;
}

export interface WidgetTemplate {
  type: string;
  label: string;
  icon: string;
}