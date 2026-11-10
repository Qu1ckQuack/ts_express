import express from 'express'
import { userController } from './users/user.controller.ts'
import { logger } from './users/middleware/user.logging.ts'

/* This is where I take a note
   Backend architecture telling me how each 
   components are organized and compunicate
   
   Imagine a customer sends an HTTP request
   GET /api/products

   and my backend needs to process it
   
   Client(HTTP Request)
   Middleware(Authentication, logging, validation)
   Controller(Handle incoming request)
   Service(Executes business logic)
   Repository(Communicates with database)
   Database
   
*/

const app = express();

app.use(express.json())

// register api endpoint
app.use('/', userController)

app.use('/api/register', userController)

app.use('/api/auth/login', userController)

// register middleware

app.use(logger)

app.listen(3000, () => {
    console.log(`Listening on http://localhost:3000`)
});