export enum wsEvents {
  connection = 'connection',
  message = 'message',
  error = 'error',
  close = 'close',
}

export enum iMessageTypes {
  reg = 'reg',
  updateWinners  = 'update_winners',
  createRoom = 'create_room',
  addUsrToRoom = 'add_user_to_room',
  createGame = 'create_game',
  updRoom = 'update_room',
  addShips = 'add_ships',
  startGame = 'start_game',
  attack = 'attack',
}

enum shipSizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
  huge = 'huge',
}

type ship = {
  position: {
    x: number
    y: number
  },
  direction: boolean
  length: number
  type: shipSizes
}

type iReg = {
  type: iMessageTypes.reg
  data: {
    name: string
    password: string
  }
  id: 0
}

type iUpdateWinners = {
  type: iMessageTypes.updateWinners
  data:
  {
    name: string
    wins: number
  } []
}

type iCreateRoom = {
  type: iMessageTypes.createRoom
  data: ''
  id: 0
}

type iAddUsersToRoom = {
  type: iMessageTypes.addUsrToRoom
  data: {
    indexRoom: number
  }
  id: 0
}

type iCreateGame = {
  type: iMessageTypes.createGame
  data:
    {
      idGame: number
      idPlayer: number
    }
  id: 0
}

type iUpdateRoom = {
  type: iMessageTypes.updRoom
  data:
    {
      roomId: number
      roomUsers:
      [
        {
          name: string
          index: number
        }
      ]
    } []
  id: 0
}

type iAddShips = {
  type: iMessageTypes.addShips
  data:
    {
      gameId: number
      ships:  ship[]

      indexPlayer: number
    }
  id: 0
}

type iStartGame = {
  type: iMessageTypes.startGame
  data:
    {
      ships:ship[]
      currentPlayerIndex: number
    }
  id: 0
}

type iAttack = {
  type: "attack"
  data:
      {
          gameId: number
          x: number
          y: number
          indexPlayer: number
      }
  id: 0
}

export type iMessage =
  iReg
  | iUpdateWinners
  | iCreateRoom
  | iAddUsersToRoom
  | iCreateGame
  | iUpdateRoom
  | iAddShips
  | iStartGame
  | iAttack