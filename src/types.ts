export type Entry = {
  date: Date;
  pid: number;
  priority: number;
  tag: string;
  messages: string[];
};

export interface IParser {
  splitMessages(data: string): string[];
  parseMessages(messages: string[]): Entry[];
}

export interface IFilter {
  shouldInclude(entry: Entry): boolean;
}