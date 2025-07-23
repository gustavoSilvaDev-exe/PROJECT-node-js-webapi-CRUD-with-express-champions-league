import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65
    }
  },
  {
    id: 2,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 89,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 76
    }
  },
  {
    id: 3,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 89,
      Shooting: 94,
      Passing: 66,
      Dribbling: 80,
      Defending: 45,
      Physical: 88
    }
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 74,
      Shooting: 86,
      Passing: 94,
      Dribbling: 87,
      Defending: 64,
      Physical: 78
    }
  },
  {
    id: 5,
    name: "Jude Bellingham",
    club: "Real Madrid",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 79,
      Shooting: 82,
      Passing: 84,
      Dribbling: 86,
      Defending: 76,
      Physical: 82
    }
  },
  {
    id: 6,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 90,
      Shooting: 87,
      Passing: 81,
      Dribbling: 90,
      Defending: 45,
      Physical: 75
    }
  },
  {
    id: 7,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 95,
      Shooting: 82,
      Passing: 78,
      Dribbling: 91,
      Defending: 36,
      Physical: 68
    }
  },
  {
    id: 8,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 76,
      Shooting: 91,
      Passing: 75,
      Dribbling: 84,
      Defending: 44,
      Physical: 82
    }
  },
  {
    id: 9,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 73,
      Shooting: 93,
      Passing: 84,
      Dribbling: 82,
      Defending: 47,
      Physical: 83
    }
  },
  {
    id: 10,
    name: "Luka Modrić",
    club: "Real Madrid",
    nationality: "Croatia",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 66,
      Shooting: 75,
      Passing: 89,
      Dribbling: 89,
      Defending: 71,
      Physical: 64
    }
  },
  {
    id: 11,
    name: "Rúben Dias",
    club: "Manchester City",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 67,
      Shooting: 40,
      Passing: 72,
      Dribbling: 70,
      Defending: 90,
      Physical: 85
    }
  },
  {
    id: 12,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 70,
      Shooting: 73,
      Passing: 88,
      Dribbling: 84,
      Defending: 81,
      Physical: 78
    }
  },
  {
    id: 13,
    name: "Jan Oblak",
    club: "Atlético Madrid",
    nationality: "Slovenia",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 50,
      Shooting: 30,
      Passing: 45,
      Dribbling: 42,
      Defending: 25,
      Physical: 84
    }
  },
  {
    id: 14,
    name: "Pedri",
    club: "Barcelona",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 86,
      Pace: 78,
      Shooting: 70,
      Passing: 85,
      Dribbling: 88,
      Defending: 68,
      Physical: 70
    }
  },
  {
    id: 15,
    name: "Bukayo Saka",
    club: "Arsenal",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 85,
      Shooting: 80,
      Passing: 83,
      Dribbling: 86,
      Defending: 55,
      Physical: 72
    }
  }
];


export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
    
    let response = null;
    
    const index = database.findIndex((p) => p.id === id );

    if(index !== -1){
      database.splice(index, 1);
      return true;
    }

    return false;
};

export const findAndModifyPlayer = async (
  id: number, 
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  
  //find player to modify
  const playerIndex = database.findIndex((player) => player.id === id);

  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};