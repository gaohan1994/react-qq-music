export class Logger {
  public static create = (prefix: string) => {
    return new Logger(prefix);
  };

  private readonly prefix: string;

  public log: (textOrTitle: string, content?: string) => void;

  constructor(prefix = 'Logger') {
    this.prefix = prefix;
    this.log = this.info;
  }

  private readonly isEmpty = (value: any) => {
    return value == null || value === undefined || value === '';
  };

  private prettyPrint = (title: string, text: string, color: string) => {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent',
    );
  };

  private buildPrefix = (title: string) => {
    return `[${this.prefix}-${title}]`;
  };

  public info = (textOrTitle: string, content = '') => {
    const title = this.isEmpty(content) ? this.buildPrefix('Info') : textOrTitle;
    const text = this.isEmpty(content) ? textOrTitle : content;
    this.prettyPrint(title, text, '#909399');
  };

  public error = (textOrTitle: string, content = '') => {
    const title = this.isEmpty(content) ? this.buildPrefix('Error') : textOrTitle;
    const text = this.isEmpty(content) ? textOrTitle : content;
    this.prettyPrint(title, text, '#F56C6C');
  };

  public warning = (textOrTitle: string, content = '') => {
    const title = this.isEmpty(content) ? this.buildPrefix('Warning') : textOrTitle;
    const text = this.isEmpty(content) ? textOrTitle : content;
    this.prettyPrint(title, text, '#E6A23C');
  };

  public success = (textOrTitle: string, content = '') => {
    const title = this.isEmpty(content) ? this.buildPrefix('Success') : textOrTitle;
    const text = this.isEmpty(content) ? textOrTitle : content;
    this.prettyPrint(title, text, '#67C23A');
  };

  public table = <T extends unknown[]>(data: T) => {
    console.log(
      '%c id%c name%c age',
      'color: white; background-color: black; padding: 2px 10px;',
      'color: white; background-color: black; padding: 2px 10px;',
      'color: white; background-color: black; padding: 2px 10px;',
    );

    data.forEach((row: any) => {
      console.log(
        `%c ${row.id} %c ${row.name} %c ${row.age} `,
        'color: black; background-color: lightgray; padding: 2px 10px;',
        'color: black; background-color: lightgray; padding: 2px 10px;',
        'color: black; background-color: lightgray; padding: 2px 10px;',
      );
    });
  };
}
