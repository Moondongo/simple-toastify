import { Context, Position } from "../types/types";

export class Toast {
  private content: String;
  private theme: String;
  private sleep: Number;
  private context: Context;
  private position: Position;

  constructor(
    content: String,
    theme: String,
    sleep: Number,
    context: Context,
    position: Position
  ) {
    this.content = content;
    this.theme = theme;
    this.sleep = sleep;
    this.context = context;
    this.position = position;
  }

  public Print(): String {
    return `Contenido: ${this.content}\nTheme: ${this.theme}\nSleep:${this.sleep}\ncontext:${this.context}\nPosition:${this.position}`;
  }
}
