import {OrmRepository} from "typeorm-typedi-extensions";
import {Service} from "typedi";
import { Recipe } from "../model/Recipe";
import { RecipeRepository } from '../repository/RecipeRepository';
import { User } from '../model/User';

/**
 * Default service for the users.
 */
@Service()
export class RecipeService {

    @OrmRepository(Recipe)
    private repo: RecipeRepository;

    public async getAll(rowsTake:number,rowsSkip: number, condition?: string): Promise<Recipe[]> {            
        //Exemplo de consulta com joins e paginada
        return this.repo.createQueryBuilder("recipe")
        .innerJoinAndSelect("recipe.user","user")
        .leftJoinAndSelect("recipe.foodCategories","foodCategories")
        .leftJoinAndSelect("recipe.recipeIngredients","recipeIngredients")
        .leftJoinAndSelect("recipeIngredients.ingredient","ingredient")
        .leftJoinAndSelect("recipe.recipeInstructions","recipeInstructions")
        .where(condition)
        .orderBy("recipe.id")    
        .skip(rowsSkip)
        .take(rowsTake)    
        .getMany()                
    }

    public async persist(recipe: Recipe): Promise<any> {
        return this.repo.save(recipe);
    }

    public async remove(recipe: Recipe): Promise<any> {
      return this.repo.remove(recipe);
    }

    public async persistTransaction(recipe: any) : Promise<any> {
        try {
            const result = await this.repo.savewithObjects(recipe);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
