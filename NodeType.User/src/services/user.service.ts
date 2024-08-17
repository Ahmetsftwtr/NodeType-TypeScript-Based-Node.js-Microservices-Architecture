import { IUserService } from "./abtracts/ıuser.service";

export class UserService implements IUserService {


    getAllUser(): Array<any> {
        return [{username:'Ahmet',lastname:'Çetin'}]
    }
}