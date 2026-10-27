 import Biblioteca from "./models/Biblioteca.js";
 import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

 const minhaBiblioteca = new Biblioteca('GT Bezerra');

 const livro1 = new Livro('Clean Code', 'Robert C. Martin', 2008);
 const livro2 = new Livro('Refatoração', 'Martin Fowler', 2019);
 const livro3 = new Livro('MisBorn', 'Brendon Sanderson', 2006);
 const livro4 = new LivroEspecial('Sapiens', 'Yuval Harari', 2011, 'História');


// Estoque da Biblioteca
 minhaBiblioteca.adicionarLivro(livro1);
 minhaBiblioteca.adicionarLivro(livro2);
 minhaBiblioteca.adicionarLivro(livro3);
 minhaBiblioteca.adicionarLivro(livro4);

 // Operação da Biblioteca
 livro1.emprestar();
 livro3.emprestar();
 livro1.devolver();
 livro2.emprestar();

 // Listagem Geral
 minhaBiblioteca.listarLivros();

 

