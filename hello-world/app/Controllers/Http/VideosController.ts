import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VideosController {
    public async index({ view }: HttpContextContract){
        return view.render('videos/index')
    }
}
