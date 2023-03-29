import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todopost from 'App/Models/Todopost'

export default class TodopostsController {
    // list todoposts
    public async index({view}:HttpContextContract) {
        const todoposts = await Todopost.query().orderBy('id','desc')
                                        .withCount('notes',(query) => {
                                            query.as('notesCount')
                                        })
        return view.render('todos',{todoposts: todoposts})
    }
    // save todoposts
    public async store({request,response}:HttpContextContract) {
        const title = request.input('title')
        if(title) { 
            const addtdpost = await Todopost.create({title: title}) 
            console.log(addtdpost.title)
        }
        response.redirect().toRoute('todoposts.index')
    }
    // get and into todoposts
    public async edit({view,params}:HttpContextContract) {
        const pid = params.id
        const edittdpost = await Todopost.find(pid)
        const tdposts = await Todopost.query().orderBy('id','desc')
                                              .withCount('notes',(query) => {
                                                  query.as('notesCount')
                                              })
        return view.render('todos',{todopost: edittdpost, todoposts: tdposts})
    }
    // update todoposts
    public async update({params,request,response}:HttpContextContract) {
        const pid = params.id
        const tdptitle = request.input('title')
        const tdpost = await Todopost.find(pid)
        if(tdpost) {
            tdpost.title = tdptitle
            tdpost.save()
        }
        response.redirect().toRoute('todoposts.index')
    }
    // cross a line to todoposts
    public async completed({params,response}:HttpContextContract) {
        const pid = params.id
        const tdpost = await Todopost.find(pid)
        if(tdpost){
            if(tdpost.status == 'inprogress') {
                tdpost.status = 'completed'
            } else {
                tdpost.status = 'inprogress'
            }
            await tdpost.save()
        }
        
        response.redirect().toRoute('todoposts.index')
    }
    // delete todoposts
    public async destroy({params,response}:HttpContextContract) {
        const pid = params.id
        const todelete = await Todopost.find(pid)
        if(todelete){
            todelete.delete()
        }
        response.redirect().toRoute('todoposts.index')
    }
}
