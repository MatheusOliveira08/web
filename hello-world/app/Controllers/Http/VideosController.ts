import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VideosController {
    public static videos = {
        size: 3,
        values: {
            1: {id: 1, video: 'Aula 01:', description: 'Introdução Web'},
            2: {id: 2, video: 'Aula 02:', description: 'Introdução ao HTTP'},
            3: {id: 3, video: 'Aula 03:', description: 'Introdução HTML'}
        }
    }

    public async home({ response }: HttpContextContract){
        return response.redirect().toRoute('videos.index')
    }

    public async index({ view }: HttpContextContract){
        const videos = VideosController.videos.values

        return view.render('videos/index', { videos: videos})
    }

    public async telaUser({ view }: HttpContextContract){
        const videos = VideosController.videos.values

        return view.render('videos/telaUser', { videos: videos})
    }

    public async telaAdmin({ view }: HttpContextContract){
        const videos = VideosController.videos.values

        return view.render('videos/telaAdmin', { videos: videos})
    }

    public async create({ view }: HttpContextContract){
        return view.render('videos/create')
    }

    public async store ({ response, request }: HttpContextContract) {
        const video = request.input('video')
        const description = request.input('description')

        VideosController.videos.size += 1

        const id = VideosController.videos.size

        VideosController.videos.values[id] = {
            id: id,
            video: video,
            description: description,
          }

        return response.redirect().toRoute('videos.admin')
    }


}
