import { Router, type Request, type Response, type NextFunction } from 'express'
import { type CreateUserDTO, type PartialLogin } from './dto/general.dto.ts'

export const userController = Router();

// I decide whice route request should go
userController.get('/', (req: Request, res:Response, next: NextFunction) => {
    console.log("Redirect to /login");
    res.redirect('/api/auth/login');

    next();
})

userController.post('/api/register', (req: Request<CreateUserDTO>, res: Response) => {
    res.end(`Request received ${req.body} from user id ${req.params.id}`)
})

userController.get('/api/auth/login', (req: Request<PartialLogin>, res: Response) => {
    res.end(`User input received ${req.body}`)
})

