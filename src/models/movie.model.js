import prisma from "../../prisma/prisma.js";

class MoviesModel {
  // Obter todos os jogos
  async findAll() {
    const movie = await prisma.movie.findMany({
        data
    });

    return {
      total: movie.length,
      games,
    };
  }

  // Criar um novo jogo
  async create(data) {
    const movies = await prisma.movies.create({
      data,
    });

    return game;
  }
}

export default new MoviesModel();