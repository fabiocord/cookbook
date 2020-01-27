import {EntityRepository, Repository} from "typeorm";
import { Ingredient } from '../model/Ingredient';

@EntityRepository(Ingredient)
export class IngredientRepository extends Repository<Ingredient> {

}