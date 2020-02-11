import { JsonController, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { EntityFromParam } from 'typeorm-routing-controllers-extensions';
import { Recipe } from '../../model/Recipe';
import { RecipeService } from '../../services/RecipeService';

@JsonController('/api/recipes')
export class ApiRecipeController{

    @Inject()
    private recipes : RecipeService;
    
    @Get('/:id')
    async getOneRecipeAction(@EntityFromParam('id') recipe: Recipe): Promise<any> {
        return  recipe;
    }

    @Get('/')
    async getRecipesAction(): Promise<any> {
        const recipes: Recipe[] = await this.recipes.getAll();
        const data = recipes.map(recipe => {
          return recipe;
        }); 
        return data       
    }
}