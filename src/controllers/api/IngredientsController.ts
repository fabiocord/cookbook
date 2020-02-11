import { JsonController, Get } from "routing-controllers";
import { Inject } from "typedi";
import { IngredientService } from '../../services/IngredientService';
import { EntityFromParam } from "typeorm-routing-controllers-extensions";
import { Ingredient } from '../../model/Ingredient';


@JsonController('/api/ingredients')
export class ApiIngredientController{

    @Inject()
    private ingredients : IngredientService;
    
    @Get('/:id')
    async getOneIngredientAction(@EntityFromParam('id') ingredient: Ingredient): Promise<any> {
        return  ingredient;
    }

    @Get('/')
    async getIngredientsAction(): Promise<any> {
        const ingredients: Ingredient[] = await this.ingredients.getAll();
        const data = ingredients.map(ingredient => {
          return  ingredient;
        }); 
        return data       
    }
}