export type Icons = "check" | "calculator" | "add" | "cancel" | "duplicate" | "edit" | "right-arrow" | 'warning' | 'print' | 'filter' | 'refresh' | 'left-arrow' | 'alert' | 'info' | 'download' | 'down-arrow';

export const iconMap: Record<Icons, string> = {
  refresh: "ri-refresh-line",
  filter: "ri-equalizer-line",
  print: "ri-printer-line",
  warning: "ri-error-warning-line",
  "right-arrow": 'ri-arrow-right-line',
  "left-arrow": 'ri-arrow-left-line',
  "down-arrow":"ri-arrow-down-line",
  add: 'ri-add-line',
  cancel: "ri-close-line",
  duplicate: "ri-file-copy-line",
  edit: "ri-edit-line",
  alert: "ri-alert-line",
  info: "ri-information-line",
  download: "ri-file-download-line",
  check: "ri-check-line",
  calculator:"ri-calculator-line"
};
