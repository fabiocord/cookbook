-- INSERT INTO public."user"(name, token)	VALUES ( 'admin', 'anjokndjksafnbskjdbn');
-- INSERT INTO public."user"(name, token)	VALUES ( 'fabiocord', 'cvmxkmvlxczmvlkxzcmvz');

--INSERT INTO public.recipe(name, description, portions, "prepareTime", image, "dataInsercao", "userId")
--	VALUES ('Strognoff','Receita de strognoff' , 10, 30, ' ', '2020-02-04 02:16:00', 2);

--INSERT INTO public.recipe(name, description, portions, "prepareTime", image, "dataInsercao", "userId")
--	VALUES ('Bobó de camarão','Bobó de camarão do Fábio' , 5, 60, '', '2020-02-04 02:18:00', 2);

-- INSERT INTO public.receip_instruction(instruction, "recipeId")	VALUES ('Cortar a carne em cubos. Reservar', 3);
-- INSERT INTO public.receip_instruction(instruction, "recipeId")	VALUES ('Picar a cebola bem miúda. Reservar ', 3);
-- INSERT INTO public.receip_instruction(instruction, "recipeId")	VALUES ('Refogar a cebola em uma panela com 1 colher de sopa de óleo.', 3);
-- INSERT INTO public.receip_instruction(instruction, "recipeId")	VALUES ('Adicionar a carne picada. Removendo sempre o líquido da panela para uma panela a parte, até selar a carne. Reservar', 3);


--INSERT INTO public.unit(name, description)	VALUES ( 'Kg', 'Quilogramas');
--INSERT INTO public.unit(name, description)	VALUES ( 'Un', 'Unidades');
--INSERT INTO public.unit(name, description)	VALUES ( 'Gr', 'Gramas');
--INSERT INTO public.unit(name, description)	VALUES ( 'Mg', 'Miligramas');
--INSERT INTO public.unit(name, description)	VALUES ( 'L', 'Litros');
--INSERT INTO public.unit(name, description)	VALUES ( 'Ml', 'Mililitros');	
--INSERT INTO public.unit(name, description)	VALUES ( 'Lt', 'Lata');
--INSERT INTO public.unit(name, description)	VALUES ( 'Cx', 'Caixa');
--INSERT INTO public.unit(name, description)	VALUES ( 'Ag', 'A gosto');
--INSERT INTO public.unit(name, description)	VALUES ( 'Pt', 'Pitada');

--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Camarão VG','Camarão tamanho grande' , '', 1);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Aipim','Aipim' , '', 1);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Molho de Tomate','Molho de tomate' , '', 2);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Cebola','Cebola' , '', 2);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Sal','Sal' , '', 9);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Coentro','Coentro' , '', 2);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Água','Água' , '', 5);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Filet Mignon','Carne Filet mignon' , '', 1);
--INSERT INTO public.ingredient(name, description, image, "unitId")	VALUES ('Creme de Leite','Creme de Leite' , '', 8);


--INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
--select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
--where r.name = 'Strognoff' and i.name = 'Filet Mignon' and u.name = 'Kg';

--INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
--select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
--where r.name = 'Strognoff' and i.name = 'arroz' and u.name = 'Kg';

--INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
--select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
--where r.name = 'Strognoff' and i.name = 'Cebola' and u.name = 'Un';

--INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
--select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
--where r.name = 'Strognoff' and i.name = 'Molho de Tomate' and u.name = 'Cx';

--INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
--select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
--where r.name = 'Strognoff' and i.name = 'Sal' and u.name = 'Ag';

--INSERT INTO public.food_category(name, description, enabled) VALUES ('Carnes','Receitas de carne',true);
--INSERT INTO public.food_category(name, description, enabled) VALUES ('Frutos do mar','Receitas de frutos do mar',true);
--INSERT INTO public.food_category(name, description, enabled) VALUES ('Carnes 2','Receitas de carne 2',false);


--INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
--Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Strognoff' and f.name = 'Carnes' ;
--INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
--Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Bobó de camarão' and f.name = 'Frutos do mar' ;
--INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
--Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Strognoff' and f.name = 'Carnes 2' ;




--TRUNC public.recipe_ingredient