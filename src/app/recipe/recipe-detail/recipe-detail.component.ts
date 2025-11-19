import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';       // Para leer el id de la ruta
import { RecipeService } from '../recipe.service';      // Tu servicio
import { Recipe } from '../Recipe';                     

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;

constructor(
  private route: ActivatedRoute,
  private recipeService: RecipeService
) {}

ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.recipeService.getRecipeDetail(id).subscribe(recipe => {
    this.recipe = recipe;
  });
}

}
