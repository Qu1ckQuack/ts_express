import type { Request, Response } from 'express'

/* Execute business logic */

export function getUserById(req: Request, res: Response) {
    const users = [
        {
            id: 1,
            username: 'Albaz',
            email: "Albert@gmail.com",
            phone: '080-891-4687'
        },
        {
            id: 2,
            username: 'Alice',
            email: "Alice@gmail.com"
        }
    ]
    res.json(users)
}

export function createUser() {
    
}
