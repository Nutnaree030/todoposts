import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todopost from 'App/Models/Todopost'
import Todopostnote from 'App/Models/Todopostnote'

export default class TodopostnotesController {
    // listing
    public async index({view,params}:HttpContextContract) {
        const pid = params.tdpid
        const tdpost = await Todopost.find(pid)
        await tdpost?.load('notes')
        return view.render('notepost',{tdpid: pid,tdpnotes: tdpost})
    }
    // add new
    public async store({params,request,response}:HttpContextContract) {
        const pid = params.tdpid
        const data = request.all()
        if(data.noteform){
            const note = await Todopostnote.create({todopost_id: pid,note: data.noteform})
            console.log(note.note)
        }  
        response.redirect().toRoute('notes.index',{tdpid: pid})
    }
    // edit
    public async edit({view,params}:HttpContextContract) {
        const pid = params.tdpid
        const tdpost = await Todopost.find(pid)
        await tdpost?.load('notes')
        
        const noteid = params.nid
        const editnote = await Todopostnote.find(noteid)

        return view.render('notepost',{tdpnotes: tdpost,editnote: editnote,tdpid: pid})
    }
    // update
    public async update({params,request,response}:HttpContextContract) {
        const pid = params.tdpid
        const noteid = params.nid
        const data = request.all()
        const editnote = await Todopostnote.find(noteid)
        if(data.noteform && editnote){
            editnote.note = data.noteform
            editnote.save()
        }
        response.redirect().toRoute('notes.index',{tdpid: pid})
    }
    // delete
    public async destroy({params,response}:HttpContextContract) {
        const pid = params.tdpid
        const noteid = params.nid
        const note = await Todopostnote.find(noteid)
        if(note){
            note.delete()
        }  
        response.redirect().toRoute('notes.index',{tdpid: pid})
    }

}
