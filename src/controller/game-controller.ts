import {Game} from '../model/game';
import db from '../utils/fdb.js';

export class GameController {
  async index(): Promise<Game[]> {
    let games: any = [];
    let tempGame: Game;
    //Get collection from firestore
    await db.collection("partidas").get().then((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        console.log('here');
        tempGame = new Game();   
        tempGame.name = doc.data().Jugador; 
        tempGame.date = doc.data().fecha.seconds;
        tempGame.time = doc.data().duracion;
        games.push(tempGame)
      });
    });
    return games;
  } 
}
