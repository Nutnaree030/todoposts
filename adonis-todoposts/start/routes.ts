/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ response }) => {
    response.redirect().toRoute('todoposts.index')
})

// ToDoPosts Part
Route.get('/todoposts','TodopostsController.index').as('todoposts.index')
Route.post('/todoposts','TodopostsController.store').as('todoposts.store')
Route.get('/todoposts/:id/completed','TodopostsController.completed').as('todoposts.completed')
Route.get('/todoposts/:id/delete','TodopostsController.destroy').as('todoposts.delete')
Route.get('/todoposts/:id/edit','TodopostsController.edit').as('todoposts.edit')
Route.post('/todoposts/:id/update','TodopostsController.update').as('todoposts.update')
Route.get('/todoposts/search','TodopostsController.search').as('todoposts.search')

// ToDoPost's Nots Part
Route.get('/todoposts/:tdpid/notes','TodopostnotesController.index').as('notes.index')
Route.post('/todoposts/:tdpid/notes','TodopostnotesController.store').as('notes.store')
Route.get('/todoposts/:tdpid/notes/:nid/edit','TodopostnotesController.edit').as('notes.edit')
Route.post('/todoposts/:tdpid/notes/:nid/update','TodopostnotesController.update').as('notes.update')
Route.get('/todoposts/:tdpid/notes/:nid/delete','TodopostnotesController.destroy').as('notes.delete')
