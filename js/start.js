// Importa a próxima cena e a variável game
import { game } from "./index.js";
import { cena1 } from "./cena1.js";

// Cria a cena de início
const startScene = new Phaser.Scene("StartScene");

startScene.preload = function() {
  this.load.image("start", "assets/bitmFFFap.png");
};

startScene.create = function() {
  // Adiciona uma imagem e espera o clique do usuário
  let halfWidth = game.scale.width / 2;
  let halfHeight = game.scale.height / 2;
  let startButton = this.add
    .image(halfWidth, halfHeight, "start")
    .setInteractive();
  startButton.on("pointerdown", () => this.scene.start(cena1));
};

// Exporta a cena
export { startScene };
