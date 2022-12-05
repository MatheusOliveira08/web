import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VideosController {
    public static videos = {
        size: 3,
        values: {
            1: {id: 0, nome: 'Aula 01:', description: 'Introdução Web'},
            2: {id: 2, nome: 'Aula 02:', description: 'Introdução ao HTTP'},
            3: {id: 1, nome: 'Aula 03:', description: 'Introdução HTML'}
        }
    }

    public async home({ response }: HttpContextContract){
        return response.redirect().toRoute('videos.index')
    }

    public async index({ view }: HttpContextContract){
        const videos = VideosController.videos.values

        return view.render('videos/index', { videos: videos})
    }
}
