import {EntityRepository, Repository} from "typeorm";
import { Recipe } from '../model/Recipe';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {

}