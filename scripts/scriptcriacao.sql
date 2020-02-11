 TRUNCATE public.recipe_ingredient CASCADE; 
 TRUNCATE public.ingredient CASCADE; 
 TRUNCATE public.unit CASCADE;
 TRUNCATE public.receip_instruction CASCADE;
 TRUNCATE public.recipe_food_categories_food_category CASCADE;
 TRUNCATE public.food_category CASCADE;
 TRUNCATE public.recipe CASCADE;
 TRUNCATE public.user CASCADE;
 
 INSERT INTO public."user"(name, token)	VALUES ( 'admin', 'anjokndjksafnbskjdbn');
 INSERT INTO public."user"(name, token)	VALUES ( 'fabiocord', 'cvmxkmvlxczmvlkxzcmvz');

INSERT INTO public.food_category(name, description, enabled) VALUES ('Carnes','Receitas de carne',true);
INSERT INTO public.food_category(name, description, enabled) VALUES ('Frutos do mar','Receitas de frutos do mar',true);
INSERT INTO public.food_category(name, description, enabled) VALUES ('Carnes 2','Receitas de carne 2',false);

INSERT INTO public.recipe(name, description, portions, "prepareTime", image, "dataInsercao", "userId")
SELECT 'Strognoff','Receita de strognoff' , 10, 30, '', '2020-02-11 02:16:00', u.id  from public."user" u where u.name = 'fabiocord';

INSERT INTO public.recipe(name, description, portions, "prepareTime", image, "dataInsercao", "userId")
SELECT 'Bobó de camarão','Bobó de camarão do Fábio' , 5, 60, '', '2020-02-04 02:18:00', u.id  from public."user" u where u.name = 'fabiocord';

INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Strognoff' and f.name = 'Carnes' ;

INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Bobó de camarão' and f.name = 'Frutos do mar' ;

INSERT INTO public.recipe_food_categories_food_category("recipeId", "foodCategoryId")
Select r.id,f.id from public.recipe r, public.food_category f where r.name = 'Strognoff' and f.name = 'Carnes 2' ;

INSERT INTO public.receip_instruction(instruction, "recipeId")	
SELECT 'Cortar a carne em cubos. Reservar' , r.id from public.recipe r where r.name = 'Strognoff';
INSERT INTO public.receip_instruction(instruction, "recipeId")	
SELECT 'Picar a cebola bem miúda. Reservar ', r.id from public.recipe r where r.name = 'Strognoff';
INSERT INTO public.receip_instruction(instruction, "recipeId")	
SELECT 'Refogar a cebola em uma panela com 1 colher de sopa de óleo.', r.id from public.recipe r where r.name = 'Strognoff';
INSERT INTO public.receip_instruction(instruction, "recipeId")	
SELECT 'Adicionar a carne picada. Removendo sempre o líquido da panela para uma panela a parte, até selar a carne. Reservar', r.id from public.recipe r where r.name = 'Strognoff';

INSERT INTO public.unit(name, description)	VALUES ( 'Kg', 'Quilogramas');
INSERT INTO public.unit(name, description)	VALUES ( 'Un', 'Unidades');
INSERT INTO public.unit(name, description)	VALUES ( 'Gr', 'Gramas');
INSERT INTO public.unit(name, description)	VALUES ( 'Mg', 'Miligramas');
INSERT INTO public.unit(name, description)	VALUES ( 'L', 'Litros');
INSERT INTO public.unit(name, description)	VALUES ( 'Ml', 'Mililitros');	
INSERT INTO public.unit(name, description)	VALUES ( 'Lt', 'Lata');
INSERT INTO public.unit(name, description)	VALUES ( 'Cx', 'Caixa');
INSERT INTO public.unit(name, description)	VALUES ( 'Ag', 'A gosto');
INSERT INTO public.unit(name, description)	VALUES ( 'Pt', 'Pitada');

INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Camarão VG','Camarão tamanho grande','',u.id from public.unit u where u.name = 'Kg';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Aipim','Aipim','',u.id from public.unit u where u.name = 'Kg';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Molho de Tomate','Molho de tomate','',u.id from public.unit u where u.name = 'cx';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Cebola','Cebola','',u.id from public.unit u where u.name = 'Un';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Sal','Sal','',u.id from public.unit u where u.name = 'Ag';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Coentro','Coentro','',u.id from public.unit u where u.name = 'Un';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Água','Água', '', u.id from public.unit u where u.name = 'L';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Filet Mignon','Carne Filet mignon','',u.id from public.unit u where u.name = 'Kg';
INSERT INTO public.ingredient(name, description, image, "unitId")	SELECT 'Creme de Leite','Creme de Leite','',u.id from public.unit u where u.name = 'Lt';


INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
where r.name = 'Strognoff' and i.name = 'Filet Mignon' and u.name = 'Kg';

INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
where r.name = 'Strognoff' and i.name = 'arroz' and u.name = 'Kg';

INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
where r.name = 'Strognoff' and i.name = 'Cebola' and u.name = 'Un';

INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
where r.name = 'Strognoff' and i.name = 'Molho de Tomate' and u.name = 'Cx';

INSERT INTO public.recipe_ingredient(quantity,"recipeId", "ingredientId", "unitId")	
select 1 as quantity,r.id,i.id,u.id from public.recipe r, public.ingredient i, public.unit u
where r.name = 'Strognoff' and i.name = 'Sal' and u.name = 'Ag';

--TRUNC public.recipe_ingredient