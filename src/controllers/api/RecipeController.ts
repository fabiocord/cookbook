import { JsonController, Get, QueryParams, QueryParam, Post, Body, BodyParam } from 'routing-controllers';
import { Inject } from 'typedi';
import { EntityFromParam } from 'typeorm-routing-controllers-extensions';
import { Recipe } from '../../model/Recipe';
import { RecipeService } from '../../services/RecipeService';
import { RecipeQuery } from '../../model/Recipe.query';
import { readFileSync } from 'fs';
import {load as loadYAML} from "js-yaml";
import { Transaction } from 'typeorm';

@JsonController('/api/recipes')
export class ApiRecipeController{
    
    @Inject()
    private recipes : RecipeService;
    
    @Get('/:id')
    async getOneRecipeAction(@EntityFromParam('id') recipe: Recipe): Promise<any> {
        try {
            return  recipe;    
        } catch (error) {
            throw error;
        }        
    }

    @Get('/')
    async getRecipesAction(@QueryParam("pageNumber") pageNumber: number): Promise<any> {
        try {
            const cfg = loadYAML(readFileSync('./resources/config.yml').toString());        
            pageNumber = (pageNumber < 1) ? 1 : pageNumber;

            const rowsTake : number = parseInt(cfg.pagination.rowsNumber);
            const rowsSkip : number = parseInt(cfg.pagination.rowsSkip) * (pageNumber-1);
            
            const recipes: Recipe[] = await this.recipes.getAll(rowsTake,rowsSkip);
            
            const data = recipes.map(recipe => {
              return recipe;
            }); 

            return data           
        } catch (error) {
            console.log("Erro: "+error.message);            
            throw error;
        }        
    }

     @Post('/')
     async saveRecipeAction(@Body() recipe: any) : Promise<any> {
        try {
            const result = await this.recipes.persistTransaction(recipe);    
            return result;
        } catch (error) {
            console.log("Erro: "+error.message);            
            throw error;
        }
        
     }      
}

