class Pad {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 10;
        this.vel = 5;
        this.largura = 20;
        this.altura = 100;
        this.y = (this.c.canvas.height / 2) - (this.altura / 2);
        this.vel = 5;
        this.dirX = 0;
        this.dirY = 0;
        this.movendo = false;
    }

    iniciar() {
        this.movendo = true;
        this.dirX = -1;
        this.dirY = (Math.random() * 10 > 5 ? -1 : 1);
    }

    management() {

        if (this.keyboard.cima)
            if (this.y > 0)
                this.y -= this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height - this.altura -5)
                this.y += this.vel;
    }
    draw() {
        this.management();
        this.c.fillStyle = "#FFFFFF";
        this.c.fillRect(this.x, this.y, this.largura, this.altura);
    }
}