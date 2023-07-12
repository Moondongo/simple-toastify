export class Toast {
    constructor(content, theme, sleep, context, position) {
        this.content = content;
        this.theme = theme;
        this.sleep = sleep;
        this.context = context;
        this.position = position;
    }
    Print() {
        return `Contenido: ${this.content}\nTheme: ${this.theme}\nSleep:${this.sleep}\ncontext:${this.context}\nPosition:${this.position}`;
    }
}
