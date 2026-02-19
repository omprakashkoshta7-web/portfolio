import express, { Request, Response } from 'express';
import Project from '../models/Project';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

router.get('/featured', async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({ featured: true });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured projects' });
  }
});

export default router;
