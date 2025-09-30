import prisma from '../../prisma/prisma.js'

class MoviesModel {
  async findAll() {
    const movie = await prisma.movie.findMany();

    return {
      total: movie.length,
      movie,
    };
  }

  async create(data) {
    const movie = await prisma.movie.create({
      data,
    });

    return movie;
  }
}

export default new MoviesModel();