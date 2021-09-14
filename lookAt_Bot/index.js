const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '217.144.54.228',
  port: 8391,
  username: 'XxceceHUN'
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)
