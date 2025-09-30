import MovieModel from "../models/movie.model.js";

class MovieController {
  async findAll(req, res) {
    const { name, platform } = req.query;

    try {
      const movies = await MovieModel.findAll();

      return res.status(200).json(movies);
    } catch (error) {
      console.error("Error finding all movies", error);
      return res
        .status(500)
        .json({ message: "Error finding all movies", error });
    }
  }

  async create(req, res) {
    try {
      const { title, category, duration, sinopsis, releaseYear } = req.body;

      if (!title || !category || !duration || !sinopsis || !releaseYear) {
        return res.status(400).json({
          error: "All fields are required!",
        });
      }

      const data = {
        title,
        category,
        duration,
        sinopsis,
        releaseYear,
      };
      const newMovie = await MovieModel.create(data);

      return res.status(201).json({
        message: "New movie successufully created! DuoLingo singing!",
        newGame,
      });
    } catch (error) {
      console.error("Error creating a new movie", error);
      res.status(500).json({ error: "Error creating a new game" });
    }
  }
}

export default new MovieController();