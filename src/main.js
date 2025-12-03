import './style.css'
import Game from './Game.js'


const setupGame = (canvas) => {
  const ctx = canvas.getContext("2d")

  canvas.width = 850
  canvas.height = 500

  const game = new Game(canvas.width,canvas.height)

  let gameloop
  let lastTime = 0

  const runGame = (timeStamp) => {
    let delta = timeStamp - lastTime
    lastTime = timeStamp


    ctx.clearRect(0,0,canvas.width,canvas.height)

    game.update(delta)
    game.draw(ctx)

    gameloop = requestAnimationFrame(runGame)
  }
  gameloop = requestAnimationFrame(runGame)
}

setupGame(document.querySelector("#game"))