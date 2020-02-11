import {OrmRepository} from "typeorm-typedi-extensions";
import {Service} from "typedi";
import { Recipe } from "../model/Recipe";
import { RecipeRepository } from '../repository/RecipeRepository';

/**
 * Default service for the users.
 */
@Service()
export class RecipeService {

    @OrmRepository(Recipe)
    private repo: RecipeRepository;

    public async getAll(): Promise<Recipe[]> {
        return this.repo.find();
    }

    public async persist(recipe: Recipe): Promise<any> {
        return this.repo.save(recipe);
    }

    public async remove(recipe: Recipe): Promise<any> {
      return this.repo.remove(recipe);
    }
}
