import express from 'express';
import movieController from '../controllers/movie.controller.js';

const moviesRouter = express.Router();

moviesRouter.get('/', movieController.findAll);
moviesRouter.post('/', movieController.create);

export default moviesRouter;