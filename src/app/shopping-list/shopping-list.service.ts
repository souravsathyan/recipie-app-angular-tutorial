import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShopppingListService{
    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()

    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomato',3)
      ]
    getIngredient(){
        return this.ingredients.slice()
    }
    getIngredients(index:number){
        return this.ingredients[index];
    }
    addIngredient(Ingredient:Ingredient){
        this.ingredients.push(Ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}