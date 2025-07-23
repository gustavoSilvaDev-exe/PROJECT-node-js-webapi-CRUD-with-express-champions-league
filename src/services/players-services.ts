import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {

    const data = await PlayerRepository.findAllPlayers(); 
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const getPlayerByIdService = async (id: number) => {
    //ask data repository
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;

    if (data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;
    
    //verify if object is empty
    if(player){
        await PlayerRepository.insertPlayer(player);
        response = await HttpResponse.created();
        return response;
    } else {
        response = await HttpResponse.badRequest(); 
        return response;
    }
};

export const deletePlayerService = async (id: number) => {

    let response = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);


    if(isDeleted){
        response = await HttpResponse.ok({message: "deleted"});
    }else{
        response = await HttpResponse.badRequest();
    }
    
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

    let response = null;

    if(Object.keys(data).length === 0){
        response = await HttpResponse.badRequest();
    } else {
        response = await HttpResponse.ok(data);
    }

    return response;
};
