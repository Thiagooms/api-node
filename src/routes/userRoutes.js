import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    try {
        const users = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }

        });
        res.status(201).json(users);
        } catch (error) {
            res.status(500).json({error: 'Erro ao criar o usuário', detail: error.message });
        }
});

export default router;