import type { Ingrediente, IngredienteReceita } from "@/tipos/ingrediente";
import type { Receita } from "@/tipos/receita";

export const ingredientesPaes: Ingrediente[] = [
  {
    "idIngrediente": 1,
    "nomeIngrediente": "Farinha de trigo branca",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0045,
    "estoqueAtual": 30000,
    "estoqueMinimo": 5000
  },
  {
    "idIngrediente": 2,
    "nomeIngrediente": "Farinha de trigo integral",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0065,
    "estoqueAtual": 12000,
    "estoqueMinimo": 3000
  },
  {
    "idIngrediente": 3,
    "nomeIngrediente": "Farinha de centeio",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.009,
    "estoqueAtual": 8000,
    "estoqueMinimo": 2000
  },
  {
    "idIngrediente": 4,
    "nomeIngrediente": "Fubá de milho",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0055,
    "estoqueAtual": 10000,
    "estoqueMinimo": 2000
  },
  {
    "idIngrediente": 5,
    "nomeIngrediente": "Farinha de arroz",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.01,
    "estoqueAtual": 7000,
    "estoqueMinimo": 1500
  },
  {
    "idIngrediente": 6,
    "nomeIngrediente": "Polvilho doce",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.008,
    "estoqueAtual": 6000,
    "estoqueMinimo": 1500
  },
  {
    "idIngrediente": 7,
    "nomeIngrediente": "Polvilho azedo",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0085,
    "estoqueAtual": 6000,
    "estoqueMinimo": 1500
  },
  {
    "idIngrediente": 8,
    "nomeIngrediente": "Fermento biológico seco",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 2,
      "nomeCategoria": "Fermento"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.06,
    "estoqueAtual": 1000,
    "estoqueMinimo": 200
  },
  {
    "idIngrediente": 9,
    "nomeIngrediente": "Fermento natural",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 2,
      "nomeCategoria": "Fermento"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.003,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 10,
    "nomeIngrediente": "Fermento químico",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 2,
      "nomeCategoria": "Fermento"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.035,
    "estoqueAtual": 800,
    "estoqueMinimo": 150
  },
  {
    "idIngrediente": 11,
    "nomeIngrediente": "Sal",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.002,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 12,
    "nomeIngrediente": "Açúcar refinado",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 4,
      "nomeCategoria": "Açúcar"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.004,
    "estoqueAtual": 8000,
    "estoqueMinimo": 2000
  },
  {
    "idIngrediente": 13,
    "nomeIngrediente": "Açúcar mascavo",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 4,
      "nomeCategoria": "Açúcar"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.008,
    "estoqueAtual": 4000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 14,
    "nomeIngrediente": "Melado de cana",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 4,
      "nomeCategoria": "Açúcar"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.012,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 15,
    "nomeIngrediente": "Mel",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 4,
      "nomeCategoria": "Açúcar"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.025,
    "estoqueAtual": 2000,
    "estoqueMinimo": 400
  },
  {
    "idIngrediente": 16,
    "nomeIngrediente": "Água",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 5,
      "nomeCategoria": "Líquidos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.0002,
    "estoqueAtual": 50000,
    "estoqueMinimo": 10000
  },
  {
    "idIngrediente": 17,
    "nomeIngrediente": "Leite integral",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 5,
      "nomeCategoria": "Líquidos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.0048,
    "estoqueAtual": 10000,
    "estoqueMinimo": 2000
  },
  {
    "idIngrediente": 18,
    "nomeIngrediente": "Leite sem lactose",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 5,
      "nomeCategoria": "Líquidos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.0065,
    "estoqueAtual": 6000,
    "estoqueMinimo": 1500
  },
  {
    "idIngrediente": 19,
    "nomeIngrediente": "Leite vegetal",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 5,
      "nomeCategoria": "Líquidos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.01,
    "estoqueAtual": 4000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 20,
    "nomeIngrediente": "Ovo",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 10,
      "nomeCategoria": "Outros"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 3,
      "nomeUnidade": "Unidade",
      "abreviacaoUnidade": "un"
    },
    "precoPorUnidade": 0.8,
    "estoqueAtual": 120,
    "estoqueMinimo": 24
  },
  {
    "idIngrediente": 21,
    "nomeIngrediente": "Manteiga",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 6,
      "nomeCategoria": "Gordura"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.04,
    "estoqueAtual": 3000,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 22,
    "nomeIngrediente": "Óleo de soja",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 6,
      "nomeCategoria": "Gordura"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.007,
    "estoqueAtual": 4000,
    "estoqueMinimo": 800
  },
  {
    "idIngrediente": 23,
    "nomeIngrediente": "Azeite de oliva",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 6,
      "nomeCategoria": "Gordura"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.035,
    "estoqueAtual": 2000,
    "estoqueMinimo": 300
  },
  {
    "idIngrediente": 24,
    "nomeIngrediente": "Margarina vegetal",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 6,
      "nomeCategoria": "Gordura"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.014,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 25,
    "nomeIngrediente": "Batata cozida",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.006,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 26,
    "nomeIngrediente": "Mandioca cozida",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.007,
    "estoqueAtual": 4000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 27,
    "nomeIngrediente": "Inhame cozido",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.01,
    "estoqueAtual": 3000,
    "estoqueMinimo": 800
  },
  {
    "idIngrediente": 28,
    "nomeIngrediente": "Abóbora cozida",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.005,
    "estoqueAtual": 4000,
    "estoqueMinimo": 800
  },
  {
    "idIngrediente": 29,
    "nomeIngrediente": "Cenoura ralada",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0055,
    "estoqueAtual": 3000,
    "estoqueMinimo": 700
  },
  {
    "idIngrediente": 30,
    "nomeIngrediente": "Beterraba ralada",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.006,
    "estoqueAtual": 3000,
    "estoqueMinimo": 700
  },
  {
    "idIngrediente": 31,
    "nomeIngrediente": "Aveia em flocos",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.01,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 32,
    "nomeIngrediente": "Chia",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.045,
    "estoqueAtual": 1500,
    "estoqueMinimo": 300
  },
  {
    "idIngrediente": 33,
    "nomeIngrediente": "Linhaça",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.02,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 34,
    "nomeIngrediente": "Gergelim",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.025,
    "estoqueAtual": 2000,
    "estoqueMinimo": 400
  },
  {
    "idIngrediente": 35,
    "nomeIngrediente": "Quinoa",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.04,
    "estoqueAtual": 1500,
    "estoqueMinimo": 300
  },
  {
    "idIngrediente": 36,
    "nomeIngrediente": "Semente de girassol",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.022,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 37,
    "nomeIngrediente": "Castanha-do-pará",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.07,
    "estoqueAtual": 1000,
    "estoqueMinimo": 200
  },
  {
    "idIngrediente": 38,
    "nomeIngrediente": "Nozes",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 8,
      "nomeCategoria": "Grãos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.075,
    "estoqueAtual": 1000,
    "estoqueMinimo": 200
  },
  {
    "idIngrediente": 39,
    "nomeIngrediente": "Coco ralado",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.025,
    "estoqueAtual": 2000,
    "estoqueMinimo": 400
  },
  {
    "idIngrediente": 40,
    "nomeIngrediente": "Chocolate em gotas",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.035,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 41,
    "nomeIngrediente": "Cacau em pó",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.045,
    "estoqueAtual": 1200,
    "estoqueMinimo": 200
  },
  {
    "idIngrediente": 42,
    "nomeIngrediente": "Canela em pó",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.03,
    "estoqueAtual": 500,
    "estoqueMinimo": 100
  },
  {
    "idIngrediente": 43,
    "nomeIngrediente": "Banana madura",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.006,
    "estoqueAtual": 4000,
    "estoqueMinimo": 800
  },
  {
    "idIngrediente": 44,
    "nomeIngrediente": "Maçã",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.009,
    "estoqueAtual": 4000,
    "estoqueMinimo": 800
  },
  {
    "idIngrediente": 45,
    "nomeIngrediente": "Cebola",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.0045,
    "estoqueAtual": 3000,
    "estoqueMinimo": 700
  },
  {
    "idIngrediente": 46,
    "nomeIngrediente": "Alho",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.018,
    "estoqueAtual": 1000,
    "estoqueMinimo": 200
  },
  {
    "idIngrediente": 47,
    "nomeIngrediente": "Ervas finas",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.06,
    "estoqueAtual": 400,
    "estoqueMinimo": 80
  },
  {
    "idIngrediente": 48,
    "nomeIngrediente": "Azeitona fatiada",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.025,
    "estoqueAtual": 2500,
    "estoqueMinimo": 500
  },
  {
    "idIngrediente": 49,
    "nomeIngrediente": "Queijo mussarela",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.035,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 50,
    "nomeIngrediente": "Queijo parmesão",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.055,
    "estoqueAtual": 2000,
    "estoqueMinimo": 400
  },
  {
    "idIngrediente": 51,
    "nomeIngrediente": "Queijo minas",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.032,
    "estoqueAtual": 3000,
    "estoqueMinimo": 600
  },
  {
    "idIngrediente": 52,
    "nomeIngrediente": "Presunto",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.028,
    "estoqueAtual": 3000,
    "estoqueMinimo": 600
  },
  {
    "idIngrediente": 53,
    "nomeIngrediente": "Calabresa",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.03,
    "estoqueAtual": 3000,
    "estoqueMinimo": 600
  },
  {
    "idIngrediente": 54,
    "nomeIngrediente": "Tomate seco",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 9,
      "nomeCategoria": "Recheios"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.05,
    "estoqueAtual": 1500,
    "estoqueMinimo": 300
  },
  {
    "idIngrediente": 55,
    "nomeIngrediente": "Espinafre",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 7,
      "nomeCategoria": "Vegetais"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.014,
    "estoqueAtual": 2000,
    "estoqueMinimo": 400
  },
  {
    "idIngrediente": 56,
    "nomeIngrediente": "Orégano",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.05,
    "estoqueAtual": 300,
    "estoqueMinimo": 60
  },
  {
    "idIngrediente": 57,
    "nomeIngrediente": "Alecrim",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 3,
      "nomeCategoria": "Tempero"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.045,
    "estoqueAtual": 300,
    "estoqueMinimo": 60
  },
  {
    "idIngrediente": 58,
    "nomeIngrediente": "Goma xantana",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 10,
      "nomeCategoria": "Outros"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.08,
    "estoqueAtual": 500,
    "estoqueMinimo": 100
  },
  {
    "idIngrediente": 59,
    "nomeIngrediente": "Fécula de batata",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 1,
      "nomeCategoria": "Farinha"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 1,
      "nomeUnidade": "Grama",
      "abreviacaoUnidade": "g"
    },
    "precoPorUnidade": 0.012,
    "estoqueAtual": 5000,
    "estoqueMinimo": 1000
  },
  {
    "idIngrediente": 60,
    "nomeIngrediente": "Creme de leite",
    "categoriaIngrediente": {
      "idCategoriaIngrediente": 5,
      "nomeCategoria": "Líquidos"
    },
    "unidadeIngrediente": {
      "idUnidadeIngrediente": 2,
      "nomeUnidade": "Mililitro",
      "abreviacaoUnidade": "ml"
    },
    "precoPorUnidade": 0.012,
    "estoqueAtual": 3000,
    "estoqueMinimo": 600
  }
];

export const receitasPaes: Receita[] = [
  {
    "idReceita": 1,
    "nomeReceita": "Pão francês",
    "precoVenda": 120,
    "rendimento": 20,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 1000
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 620
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 20
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 20
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 20
      }
    ],
    "precoPorUnidade": 0.28019999999999995,
    "precoPorReceita": 5.603999999999999
  },
  {
    "idReceita": 2,
    "nomeReceita": "Pão de forma tradicional",
    "precoVenda": 900,
    "rendimento": 2,
    "tempoPreparacao": 200,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 450
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 45
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      }
    ],
    "precoPorUnidade": 5.283999999999999,
    "precoPorReceita": 10.567999999999998
  },
  {
    "idReceita": 3,
    "nomeReceita": "Pão integral simples",
    "precoVenda": 850,
    "rendimento": 2,
    "tempoPreparacao": 210,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 600
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 250
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 520
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 13,
        "nomeIngrediente": "Açúcar mascavo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 35
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 3.1855,
    "precoPorReceita": 6.371
  },
  {
    "idReceita": 4,
    "nomeReceita": "Pão de centeio",
    "precoVenda": 950,
    "rendimento": 2,
    "tempoPreparacao": 220,
    "ingredientes": [
      {
        "idIngrediente": 3,
        "nomeIngrediente": "Farinha de centeio",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.009,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 500
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 350
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 520
      },
      {
        "idIngrediente": 9,
        "nomeIngrediente": "Fermento natural",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.003,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 180
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 3.7505,
    "precoPorReceita": 7.501
  },
  {
    "idReceita": 5,
    "nomeReceita": "Pão australiano",
    "precoVenda": 1100,
    "rendimento": 2,
    "tempoPreparacao": 220,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 600
      },
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 250
      },
      {
        "idIngrediente": 13,
        "nomeIngrediente": "Açúcar mascavo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 80
      },
      {
        "idIngrediente": 14,
        "nomeIngrediente": "Melado de cana",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.012,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 60
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 500
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 41,
        "nomeIngrediente": "Cacau em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 1200,
        "estoqueMinimo": 200,
        "quantidade": 20
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 40
      }
    ],
    "precoPorUnidade": 4.516499999999999,
    "precoPorReceita": 9.032999999999998
  },
  {
    "idReceita": 6,
    "nomeReceita": "Pão de milho",
    "precoVenda": 750,
    "rendimento": 2,
    "tempoPreparacao": 190,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 500
      },
      {
        "idIngrediente": 4,
        "nomeIngrediente": "Fubá de milho",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0055,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 420
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 60
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 50
      }
    ],
    "precoPorUnidade": 5.19,
    "precoPorReceita": 10.38
  },
  {
    "idReceita": 7,
    "nomeReceita": "Pão de batata",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 25,
        "nomeIngrediente": "Batata cozida",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.006,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 240
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 40
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      }
    ],
    "precoPorUnidade": 0.9175,
    "precoPorReceita": 11.01
  },
  {
    "idReceita": 8,
    "nomeReceita": "Pão de leite",
    "precoVenda": 450,
    "rendimento": 15,
    "tempoPreparacao": 160,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 500
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 80
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 70
      }
    ],
    "precoPorUnidade": 0.7945333333333333,
    "precoPorReceita": 11.918
  },
  {
    "idReceita": 9,
    "nomeReceita": "Pão brioche",
    "precoVenda": 600,
    "rendimento": 10,
    "tempoPreparacao": 210,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 250
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 80
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 5
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 180
      }
    ],
    "precoPorUnidade": 1.6494,
    "precoPorReceita": 16.494
  },
  {
    "idReceita": 10,
    "nomeReceita": "Pão sírio",
    "precoVenda": 250,
    "rendimento": 20,
    "tempoPreparacao": 120,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 460
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 8
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 15
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 25
      }
    ],
    "precoPorUnidade": 0.2567499999999999,
    "precoPorReceita": 5.134999999999999
  },
  {
    "idReceita": 11,
    "nomeReceita": "Ciabatta",
    "precoVenda": 500,
    "rendimento": 8,
    "tempoPreparacao": 240,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 720
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 8
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 18
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 35
      }
    ],
    "precoPorUnidade": 0.7418749999999998,
    "precoPorReceita": 5.934999999999999
  },
  {
    "idReceita": 12,
    "nomeReceita": "Pão italiano",
    "precoVenda": 1800,
    "rendimento": 1,
    "tempoPreparacao": 300,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 620
      },
      {
        "idIngrediente": 9,
        "nomeIngrediente": "Fermento natural",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.003,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 250
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 20
      }
    ],
    "precoPorUnidade": 4.9639999999999995,
    "precoPorReceita": 4.9639999999999995
  },
  {
    "idReceita": 13,
    "nomeReceita": "Baguete",
    "precoVenda": 700,
    "rendimento": 8,
    "tempoPreparacao": 200,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 1000
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 640
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 20
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 15
      }
    ],
    "precoPorUnidade": 0.6659999999999999,
    "precoPorReceita": 5.327999999999999
  },
  {
    "idReceita": 14,
    "nomeReceita": "Pão de queijo",
    "precoVenda": 180,
    "rendimento": 30,
    "tempoPreparacao": 90,
    "ingredientes": [
      {
        "idIngrediente": 6,
        "nomeIngrediente": "Polvilho doce",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 6000,
        "estoqueMinimo": 1500,
        "quantidade": 400
      },
      {
        "idIngrediente": 7,
        "nomeIngrediente": "Polvilho azedo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0085,
        "estoqueAtual": 6000,
        "estoqueMinimo": 1500,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 300
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 120
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 4
      },
      {
        "idIngrediente": 51,
        "nomeIngrediente": "Queijo minas",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.032,
        "estoqueAtual": 3000,
        "estoqueMinimo": 600,
        "quantidade": 350
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 0.7482,
    "precoPorReceita": 22.445999999999998
  },
  {
    "idReceita": 15,
    "nomeReceita": "Pão de alho",
    "precoVenda": 450,
    "rendimento": 12,
    "tempoPreparacao": 160,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 340
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 30
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 80
      },
      {
        "idIngrediente": 46,
        "nomeIngrediente": "Alho",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.018,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 40
      },
      {
        "idIngrediente": 56,
        "nomeIngrediente": "Orégano",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.05,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 0.8208333333333334,
    "precoPorReceita": 9.850000000000001
  },
  {
    "idReceita": 16,
    "nomeReceita": "Pão doce de coco",
    "precoVenda": 500,
    "rendimento": 12,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 750
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 360
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 120
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 3
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 80
      },
      {
        "idIngrediente": 39,
        "nomeIngrediente": "Coco ralado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 120
      }
    ],
    "precoPorUnidade": 1.2435833333333333,
    "precoPorReceita": 14.922999999999998
  },
  {
    "idReceita": 17,
    "nomeReceita": "Pão de mel",
    "precoVenda": 550,
    "rendimento": 10,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 650
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 260
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 120
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 60
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 42,
        "nomeIngrediente": "Canela em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.03,
        "estoqueAtual": 500,
        "estoqueMinimo": 100,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 0.9873,
    "precoPorReceita": 9.873
  },
  {
    "idReceita": 18,
    "nomeReceita": "Pão de aveia",
    "precoVenda": 800,
    "rendimento": 2,
    "tempoPreparacao": 200,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 550
      },
      {
        "idIngrediente": 31,
        "nomeIngrediente": "Aveia em flocos",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.01,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 250
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 420
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 50
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 4.5395,
    "precoPorReceita": 9.079
  },
  {
    "idReceita": 19,
    "nomeReceita": "Pão multigrãos",
    "precoVenda": 1200,
    "rendimento": 2,
    "tempoPreparacao": 230,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 700
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 200
      },
      {
        "idIngrediente": 31,
        "nomeIngrediente": "Aveia em flocos",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.01,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 80
      },
      {
        "idIngrediente": 32,
        "nomeIngrediente": "Chia",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 1500,
        "estoqueMinimo": 300,
        "quantidade": 35
      },
      {
        "idIngrediente": 33,
        "nomeIngrediente": "Linhaça",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.02,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 40
      },
      {
        "idIngrediente": 34,
        "nomeIngrediente": "Gergelim",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 35
      },
      {
        "idIngrediente": 36,
        "nomeIngrediente": "Semente de girassol",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.022,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 40
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 560
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      }
    ],
    "precoPorUnidade": 5.622,
    "precoPorReceita": 11.244
  },
  {
    "idReceita": 20,
    "nomeReceita": "Pão de fermentação natural",
    "precoVenda": 1900,
    "rendimento": 1,
    "tempoPreparacao": 480,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 650
      },
      {
        "idIngrediente": 9,
        "nomeIngrediente": "Fermento natural",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.003,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 250
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 20
      }
    ],
    "precoPorUnidade": 4.97,
    "precoPorReceita": 4.97
  },
  {
    "idReceita": 21,
    "nomeReceita": "Pão de cebola",
    "precoVenda": 550,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 750
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 340
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 35
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 40
      },
      {
        "idIngrediente": 45,
        "nomeIngrediente": "Cebola",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 3000,
        "estoqueMinimo": 700,
        "quantidade": 180
      }
    ],
    "precoPorUnidade": 0.5820833333333332,
    "precoPorReceita": 6.9849999999999985
  },
  {
    "idReceita": 22,
    "nomeReceita": "Pão de ervas",
    "precoVenda": 500,
    "rendimento": 12,
    "tempoPreparacao": 165,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 750
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 430
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 45
      },
      {
        "idIngrediente": 47,
        "nomeIngrediente": "Ervas finas",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 400,
        "estoqueMinimo": 80,
        "quantidade": 10
      },
      {
        "idIngrediente": 57,
        "nomeIngrediente": "Alecrim",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 6
      }
    ],
    "precoPorUnidade": 0.5448333333333332,
    "precoPorReceita": 6.5379999999999985
  },
  {
    "idReceita": 23,
    "nomeReceita": "Pão de azeitona",
    "precoVenda": 650,
    "rendimento": 10,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 780
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 460
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 45
      },
      {
        "idIngrediente": 48,
        "nomeIngrediente": "Azeitona fatiada",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 180
      },
      {
        "idIngrediente": 56,
        "nomeIngrediente": "Orégano",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.05,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 6
      }
    ],
    "precoPorUnidade": 1.0605,
    "precoPorReceita": 10.605
  },
  {
    "idReceita": 24,
    "nomeReceita": "Pão recheado de queijo e presunto",
    "precoVenda": 850,
    "rendimento": 8,
    "tempoPreparacao": 190,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 420
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 40
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 49,
        "nomeIngrediente": "Queijo mussarela",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 250
      },
      {
        "idIngrediente": 52,
        "nomeIngrediente": "Presunto",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.028,
        "estoqueAtual": 3000,
        "estoqueMinimo": 600,
        "quantidade": 220
      }
    ],
    "precoPorUnidade": 2.87925,
    "precoPorReceita": 23.034
  },
  {
    "idReceita": 25,
    "nomeReceita": "Pão de calabresa",
    "precoVenda": 850,
    "rendimento": 8,
    "tempoPreparacao": 190,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 460
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 30
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 40
      },
      {
        "idIngrediente": 53,
        "nomeIngrediente": "Calabresa",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.03,
        "estoqueAtual": 3000,
        "estoqueMinimo": 600,
        "quantidade": 300
      },
      {
        "idIngrediente": 56,
        "nomeIngrediente": "Orégano",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.05,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 1.78,
    "precoPorReceita": 14.24
  },
  {
    "idReceita": 26,
    "nomeReceita": "Pão de cenoura",
    "precoVenda": 600,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 29,
        "nomeIngrediente": "Cenoura ralada",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0055,
        "estoqueAtual": 3000,
        "estoqueMinimo": 700,
        "quantidade": 250
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 280
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 45
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 40
      }
    ],
    "precoPorUnidade": 0.7227499999999999,
    "precoPorReceita": 8.672999999999998
  },
  {
    "idReceita": 27,
    "nomeReceita": "Pão de abóbora",
    "precoVenda": 600,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 28,
        "nomeIngrediente": "Abóbora cozida",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.005,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 220
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 45
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 50
      }
    ],
    "precoPorUnidade": 0.8525,
    "precoPorReceita": 10.23
  },
  {
    "idReceita": 28,
    "nomeReceita": "Pão de beterraba",
    "precoVenda": 600,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 30,
        "nomeIngrediente": "Beterraba ralada",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.006,
        "estoqueAtual": 3000,
        "estoqueMinimo": 700,
        "quantidade": 250
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 300
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 40
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 40
      }
    ],
    "precoPorUnidade": 0.4911666666666667,
    "precoPorReceita": 5.894
  },
  {
    "idReceita": 29,
    "nomeReceita": "Pão vegano simples",
    "precoVenda": 700,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 500
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 15
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 45
      },
      {
        "idIngrediente": 24,
        "nomeIngrediente": "Margarina vegetal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.014,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 60
      }
    ],
    "precoPorUnidade": 0.4558333333333333,
    "precoPorReceita": 5.47
  },
  {
    "idReceita": 30,
    "nomeReceita": "Pão sem glúten",
    "precoVenda": 1000,
    "rendimento": 10,
    "tempoPreparacao": 150,
    "ingredientes": [
      {
        "idIngrediente": 5,
        "nomeIngrediente": "Farinha de arroz",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.01,
        "estoqueAtual": 7000,
        "estoqueMinimo": 1500,
        "quantidade": 450
      },
      {
        "idIngrediente": 59,
        "nomeIngrediente": "Fécula de batata",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.012,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 250
      },
      {
        "idIngrediente": 6,
        "nomeIngrediente": "Polvilho doce",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 6000,
        "estoqueMinimo": 1500,
        "quantidade": 200
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 520
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 60
      },
      {
        "idIngrediente": 58,
        "nomeIngrediente": "Goma xantana",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.08,
        "estoqueAtual": 500,
        "estoqueMinimo": 100,
        "quantidade": 8
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      }
    ],
    "precoPorUnidade": 1.2608,
    "precoPorReceita": 12.607999999999999
  },
  {
    "idReceita": 31,
    "nomeReceita": "Pão de chia",
    "precoVenda": 850,
    "rendimento": 2,
    "tempoPreparacao": 210,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 650
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 250
      },
      {
        "idIngrediente": 32,
        "nomeIngrediente": "Chia",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 1500,
        "estoqueMinimo": 300,
        "quantidade": 70
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 560
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 35
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 5.224500000000001,
    "precoPorReceita": 10.449000000000002
  },
  {
    "idReceita": 32,
    "nomeReceita": "Pão de linhaça",
    "precoVenda": 850,
    "rendimento": 2,
    "tempoPreparacao": 210,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 650
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 250
      },
      {
        "idIngrediente": 33,
        "nomeIngrediente": "Linhaça",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.02,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 80
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 560
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 13,
        "nomeIngrediente": "Açúcar mascavo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 35
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 4.152,
    "precoPorReceita": 8.304
  },
  {
    "idReceita": 33,
    "nomeReceita": "Pão de castanha",
    "precoVenda": 1300,
    "rendimento": 2,
    "tempoPreparacao": 210,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 650
      },
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 200
      },
      {
        "idIngrediente": 37,
        "nomeIngrediente": "Castanha-do-pará",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.07,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 120
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 420
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 50
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      }
    ],
    "precoPorUnidade": 9.5195,
    "precoPorReceita": 19.039
  },
  {
    "idReceita": 34,
    "nomeReceita": "Pão de banana",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 650
      },
      {
        "idIngrediente": 43,
        "nomeIngrediente": "Banana madura",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.006,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 220
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 60
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 42,
        "nomeIngrediente": "Canela em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.03,
        "estoqueAtual": 500,
        "estoqueMinimo": 100,
        "quantidade": 6
      }
    ],
    "precoPorUnidade": 0.70175,
    "precoPorReceita": 8.421
  },
  {
    "idReceita": 35,
    "nomeReceita": "Pão de maçã e canela",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 680
      },
      {
        "idIngrediente": 44,
        "nomeIngrediente": "Maçã",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.009,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 260
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 260
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 80
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 42,
        "nomeIngrediente": "Canela em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.03,
        "estoqueAtual": 500,
        "estoqueMinimo": 100,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 0.7856666666666666,
    "precoPorReceita": 9.427999999999999
  },
  {
    "idReceita": 36,
    "nomeReceita": "Pão de chocolate",
    "precoVenda": 700,
    "rendimento": 10,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 330
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 100
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 70
      },
      {
        "idIngrediente": 40,
        "nomeIngrediente": "Chocolate em gotas",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 160
      },
      {
        "idIngrediente": 41,
        "nomeIngrediente": "Cacau em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 1200,
        "estoqueMinimo": 200,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 1.7224000000000004,
    "precoPorReceita": 17.224000000000004
  },
  {
    "idReceita": 37,
    "nomeReceita": "Pão de nozes",
    "precoVenda": 1400,
    "rendimento": 2,
    "tempoPreparacao": 220,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 650
      },
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 200
      },
      {
        "idIngrediente": 38,
        "nomeIngrediente": "Nozes",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.075,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 120
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 420
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 50
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      }
    ],
    "precoPorUnidade": 9.8195,
    "precoPorReceita": 19.639
  },
  {
    "idReceita": 38,
    "nomeReceita": "Pão de parmesão",
    "precoVenda": 650,
    "rendimento": 10,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 750
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 350
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 12
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 35
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      },
      {
        "idIngrediente": 50,
        "nomeIngrediente": "Queijo parmesão",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.055,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 160
      }
    ],
    "precoPorUnidade": 1.8739000000000001,
    "precoPorReceita": 18.739
  },
  {
    "idReceita": 39,
    "nomeReceita": "Pão de mandioca",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 26,
        "nomeIngrediente": "Mandioca cozida",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 300
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 230
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 40
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 50
      }
    ],
    "precoPorUnidade": 0.9051666666666667,
    "precoPorReceita": 10.862
  },
  {
    "idReceita": 40,
    "nomeReceita": "Pão de inhame",
    "precoVenda": 700,
    "rendimento": 12,
    "tempoPreparacao": 175,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 27,
        "nomeIngrediente": "Inhame cozido",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.01,
        "estoqueAtual": 3000,
        "estoqueMinimo": 800,
        "quantidade": 280
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 240
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 40
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 40
      }
    ],
    "precoPorUnidade": 0.8241666666666666,
    "precoPorReceita": 9.889999999999999
  },
  {
    "idReceita": 41,
    "nomeReceita": "Pão de café",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 700
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 250
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 160
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 10
      },
      {
        "idIngrediente": 13,
        "nomeIngrediente": "Açúcar mascavo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 90
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 60
      },
      {
        "idIngrediente": 41,
        "nomeIngrediente": "Cacau em pó",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 1200,
        "estoqueMinimo": 200,
        "quantidade": 20
      }
    ],
    "precoPorUnidade": 0.8606666666666666,
    "precoPorReceita": 10.328
  },
  {
    "idReceita": 42,
    "nomeReceita": "Pão de tomate seco",
    "precoVenda": 750,
    "rendimento": 10,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 780
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 450
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 45
      },
      {
        "idIngrediente": 54,
        "nomeIngrediente": "Tomate seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.05,
        "estoqueAtual": 1500,
        "estoqueMinimo": 300,
        "quantidade": 160
      },
      {
        "idIngrediente": 56,
        "nomeIngrediente": "Orégano",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.05,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 8
      }
    ],
    "precoPorUnidade": 1.4203,
    "precoPorReceita": 14.203
  },
  {
    "idReceita": 43,
    "nomeReceita": "Pão de espinafre",
    "precoVenda": 650,
    "rendimento": 10,
    "tempoPreparacao": 180,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 760
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 430
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 40
      },
      {
        "idIngrediente": 55,
        "nomeIngrediente": "Espinafre",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 7,
          "nomeCategoria": "Vegetais"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.014,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 220
      },
      {
        "idIngrediente": 49,
        "nomeIngrediente": "Queijo mussarela",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 9,
          "nomeCategoria": "Recheios"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 100
      }
    ],
    "precoPorUnidade": 1.2234,
    "precoPorReceita": 12.234
  },
  {
    "idReceita": 44,
    "nomeReceita": "Pão de quinoa",
    "precoVenda": 1200,
    "rendimento": 2,
    "tempoPreparacao": 220,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 650
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 220
      },
      {
        "idIngrediente": 35,
        "nomeIngrediente": "Quinoa",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 1500,
        "estoqueMinimo": 300,
        "quantidade": 100
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 560
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 16
      },
      {
        "idIngrediente": 15,
        "nomeIngrediente": "Mel",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 35
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 30
      }
    ],
    "precoPorUnidade": 5.582000000000001,
    "precoPorReceita": 11.164000000000001
  },
  {
    "idReceita": 45,
    "nomeReceita": "Pão árabe integral",
    "precoVenda": 300,
    "rendimento": 18,
    "tempoPreparacao": 130,
    "ingredientes": [
      {
        "idIngrediente": 2,
        "nomeIngrediente": "Farinha de trigo integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 12000,
        "estoqueMinimo": 3000,
        "quantidade": 500
      },
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 300
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 480
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 8
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 13,
        "nomeIngrediente": "Açúcar mascavo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.008,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 20
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 25
      }
    ],
    "precoPorUnidade": 0.3466111111111111,
    "precoPorReceita": 6.239
  },
  {
    "idReceita": 46,
    "nomeReceita": "Focaccia de alecrim",
    "precoVenda": 700,
    "rendimento": 10,
    "tempoPreparacao": 190,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 16,
        "nomeIngrediente": "Água",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0002,
        "estoqueAtual": 50000,
        "estoqueMinimo": 10000,
        "quantidade": 620
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 10
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 18
      },
      {
        "idIngrediente": 23,
        "nomeIngrediente": "Azeite de oliva",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.035,
        "estoqueAtual": 2000,
        "estoqueMinimo": 300,
        "quantidade": 80
      },
      {
        "idIngrediente": 57,
        "nomeIngrediente": "Alecrim",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.045,
        "estoqueAtual": 300,
        "estoqueMinimo": 60,
        "quantidade": 10
      }
    ],
    "precoPorUnidade": 0.8059999999999998,
    "precoPorReceita": 8.059999999999999
  },
  {
    "idReceita": 47,
    "nomeReceita": "Pão de hambúrguer",
    "precoVenda": 350,
    "rendimento": 18,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 430
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 70
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 3
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 80
      },
      {
        "idIngrediente": 34,
        "nomeIngrediente": "Gergelim",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 8,
          "nomeCategoria": "Grãos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.025,
        "estoqueAtual": 2000,
        "estoqueMinimo": 400,
        "quantidade": 40
      }
    ],
    "precoPorUnidade": 0.7634444444444443,
    "precoPorReceita": 13.741999999999997
  },
  {
    "idReceita": 48,
    "nomeReceita": "Pão de hot dog",
    "precoVenda": 300,
    "rendimento": 20,
    "tempoPreparacao": 160,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 900
      },
      {
        "idIngrediente": 17,
        "nomeIngrediente": "Leite integral",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0048,
        "estoqueAtual": 10000,
        "estoqueMinimo": 2000,
        "quantidade": 460
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 70
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      },
      {
        "idIngrediente": 21,
        "nomeIngrediente": "Manteiga",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.04,
        "estoqueAtual": 3000,
        "estoqueMinimo": 500,
        "quantidade": 70
      }
    ],
    "precoPorUnidade": 0.5843,
    "precoPorReceita": 11.686
  },
  {
    "idReceita": 49,
    "nomeReceita": "Pão sem lactose",
    "precoVenda": 600,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 18,
        "nomeIngrediente": "Leite sem lactose",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.0065,
        "estoqueAtual": 6000,
        "estoqueMinimo": 1500,
        "quantidade": 440
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 50
      },
      {
        "idIngrediente": 22,
        "nomeIngrediente": "Óleo de soja",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.007,
        "estoqueAtual": 4000,
        "estoqueMinimo": 800,
        "quantidade": 50
      },
      {
        "idIngrediente": 20,
        "nomeIngrediente": "Ovo",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 10,
          "nomeCategoria": "Outros"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 3,
          "nomeUnidade": "Unidade",
          "abreviacaoUnidade": "un"
        },
        "precoPorUnidade": 0.8,
        "estoqueAtual": 120,
        "estoqueMinimo": 24,
        "quantidade": 2
      }
    ],
    "precoPorUnidade": 0.7798333333333333,
    "precoPorReceita": 9.357999999999999
  },
  {
    "idReceita": 50,
    "nomeReceita": "Pão de leite vegetal",
    "precoVenda": 650,
    "rendimento": 12,
    "tempoPreparacao": 170,
    "ingredientes": [
      {
        "idIngrediente": 1,
        "nomeIngrediente": "Farinha de trigo branca",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 1,
          "nomeCategoria": "Farinha"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.0045,
        "estoqueAtual": 30000,
        "estoqueMinimo": 5000,
        "quantidade": 800
      },
      {
        "idIngrediente": 19,
        "nomeIngrediente": "Leite vegetal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 5,
          "nomeCategoria": "Líquidos"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 2,
          "nomeUnidade": "Mililitro",
          "abreviacaoUnidade": "ml"
        },
        "precoPorUnidade": 0.01,
        "estoqueAtual": 4000,
        "estoqueMinimo": 1000,
        "quantidade": 440
      },
      {
        "idIngrediente": 8,
        "nomeIngrediente": "Fermento biológico seco",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 2,
          "nomeCategoria": "Fermento"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.06,
        "estoqueAtual": 1000,
        "estoqueMinimo": 200,
        "quantidade": 12
      },
      {
        "idIngrediente": 11,
        "nomeIngrediente": "Sal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 3,
          "nomeCategoria": "Tempero"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.002,
        "estoqueAtual": 5000,
        "estoqueMinimo": 1000,
        "quantidade": 14
      },
      {
        "idIngrediente": 12,
        "nomeIngrediente": "Açúcar refinado",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 4,
          "nomeCategoria": "Açúcar"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.004,
        "estoqueAtual": 8000,
        "estoqueMinimo": 2000,
        "quantidade": 50
      },
      {
        "idIngrediente": 24,
        "nomeIngrediente": "Margarina vegetal",
        "categoriaIngrediente": {
          "idCategoriaIngrediente": 6,
          "nomeCategoria": "Gordura"
        },
        "unidadeIngrediente": {
          "idUnidadeIngrediente": 1,
          "nomeUnidade": "Grama",
          "abreviacaoUnidade": "g"
        },
        "precoPorUnidade": 0.014,
        "estoqueAtual": 2500,
        "estoqueMinimo": 500,
        "quantidade": 60
      }
    ],
    "precoPorUnidade": 0.8156666666666667,
    "precoPorReceita": 9.788
  }
];

export function formatarMoedaDeCentavos(valorEmCentavos: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorEmCentavos / 100);
}

export function obterIngredientePorId(idIngrediente: number): Ingrediente | undefined {
  return ingredientesPaes.find((ingrediente) => ingrediente.idIngrediente === idIngrediente);
}

export function calcularCustoReceita(receita: Receita): number {
  return receita.ingredientes.reduce((total, item) => {
    const ingrediente = obterIngredientePorId(item.idIngrediente);
    if (!ingrediente) return total;
    return total + ingrediente.precoPorUnidade * item.quantidade;
  }, 0);
}

export function calcularCustoPorUnidade(receita: Receita): number {
  const rendimento = receita.rendimento || 1;
  return calcularCustoReceita(receita) / rendimento;
}

export function calcularLucroEstimadoPorUnidade(receita: Receita): number {
  return receita.precoVenda / 100 - calcularCustoPorUnidade(receita);
}
