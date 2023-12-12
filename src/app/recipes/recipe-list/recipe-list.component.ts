import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://kep.index.hu/1/0/3851/38512/385129/38512919_2938169_f06144f9ac2bdcb12d6d125b0ccfff4e_wm.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://kep.index.hu/1/0/3851/38512/385129/38512919_2938169_f06144f9ac2bdcb12d6d125b0ccfff4e_wm.jpg'
    ),
  ];

  constuctor() {}

  ngOnInit() {}

  onRecipteSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
