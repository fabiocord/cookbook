import {OrmRepository} from "typeorm-typedi-extensions";
import {Service} from "typedi";
import { Ingredient } from '../model/Ingredient';
import { IngredientRepository } from '../repository/IngredientRespository';

/**
 * Default service for the users.
 */
@Service()
export class IngredientService {

    @OrmRepository(Ingredient)
    private repo: IngredientRepository;

    public async getAll(): Promise<Ingredient[]> {
        return this.repo.find();
    }

    public async persist(ingredient: Ingredient): Promise<any> {
        return this.repo.save(ingredient);
    }

    public async remove(ingredient: Ingredient): Promise<any> {
      return this.repo.remove(ingredient);
    }
}
