import {User} from "../model/User";
import {OrmRepository} from "typeorm-typedi-extensions";
import {Service} from "typedi";
import {UserRepository} from "../repository/UserRepository";

/**
 * Default service for the users.
 */
@Service()
export class UserService {

    @OrmRepository(User)
    private repo: UserRepository;

    public async getAll(): Promise<User[]> {
        return this.repo.find();
    }

    public async persist(user: User): Promise<any> {
        return this.repo.save(user);
    }

    public async remove(user: User): Promise<any> {
      return this.repo.remove(user);
    }
}
