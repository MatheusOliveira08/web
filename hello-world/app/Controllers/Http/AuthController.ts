import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ view }: HttpContextContract) {
        return view.render('auth/login')
    }

    public async showLogin({ view }: HttpContextContract) {
        return view.render('auth/showLogin')
    }
}
