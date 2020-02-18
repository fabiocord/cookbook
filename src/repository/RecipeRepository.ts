import {EntityRepository, Repository, TransactionManager, getConnection} from "typeorm";
import { Recipe } from '../model/Recipe';
import { Ingredient } from '../model/Ingredient';
import { ReceipInstruction } from '../model/RecipeInstruction';
import { RecipeIngredient } from '../model/RecipeIngredient';
import { Unit } from '../model/Unit';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {
    
    public async savewithObjects(recipe : any) {

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            let recip = new Recipe();
            recip.name = recipe.name;
            recip.dataInsercao = recipe.dataInsercao;
            recip.description = recipe.description;            
            recip.image = recipe.image;
            recip.portions = recipe.portions;
            recip.prepareTime = recipe.prepareTime;
            recip.user = recipe.user;            
            recip.recipeIngredients = recipe.recipeIngredients;
            recip.recipeInstructions= recipe.recipeInstructions;
            recip.foodCategories = recipe.foodCategories            
            recip = await queryRunner.manager.save(recip);                      
            
            queryRunner.commitTransaction();            
            return recip;
        } catch (error) {
            queryRunner.rollbackTransaction();
            throw error;
        }
        
        
    }
}