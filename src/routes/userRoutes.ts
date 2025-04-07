import { Router, Request, Response } from 'express';

const router = Router();

type User = {
    id: number;
    nome: string;
    email: string;
}

// Dados na memória (sem banco de dados)
let users: User[] = [
    { id: 1, nome: 'Pedro', email: 'pedrotoscano@gmail.com' },
    { id: 2, nome: 'Leandro', email: 'leandrinho@gmail.com' }
];

// CREATE: adiciona usuário
router.post('/', (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const id = users.length + 1;
    const novoUsuario: User = { id, nome, email };
    users.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

// READ: lista todos usuários
router.get('/', (req: Request, res: Response) => {
    res.json(users);
});

// READ: obtém usuário por ID
router.get('/:id', (req: Request, res: Response) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    res.json(user);
});

// UPDATE: atualizar usuário
router.put('/:id', (req: Request, res: Response) => {
    const { nome, email } = req.body;
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    users[userIndex] = { id: parseInt(req.params.id), nome, email };
    res.json(users[userIndex]);
});

// DELETE: deletar usuário
router.delete('/:id', (req: Request, res: Response) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    users.splice(userIndex, 1);
    res.status(204).send();
});


export default router;