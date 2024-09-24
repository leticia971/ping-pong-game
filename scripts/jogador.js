class Jogador {
    constructor(c, keyboard) {
        this.c = c;
        this.keyboard = keyboard;
        this.x = 0;
        this.y = 0;
        this.vel = 5;
        this.personagem = new Image();
        this.personagem.src = "assets/png/personagem.png"
        this.personagem.addEventListener('load', () => {
            this.draw()
        })

    }
    management() {
        if (this.keyboard.esquerda)
            this.x -= this.vel;
        if (this.keyboard.direita)
            this.x += this.vel;
        if (this.keyboard.cima)
            this.y -= this.vel;
        if (this.keyboard.baixo)
            this.y += this.vel;
    }
    draw() {
        this.management();
        this.c.drawImage(this.personagem, this.x, this.y, 250, 50)
    }



    management() {
        if (this.keyboard.esquerda)
            if (this.x > 0)
                this.x -= this.vel;
        if (this.keyboard.direita)
            if (this.x < this.c.canvas.width - this.personagem.width) {
                this.x += this.vel;
            }
        if (this.keyboard.cima)
            if (this.y > 0)
                this.y -= this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height - this.personagem.height)
                this.y += this.vel;
    }
    draw() {
        this.management();
        this.c.drawImage(this.personagem, this.x, this.y, this.personagem.width, this.personagem.height);
    }
}