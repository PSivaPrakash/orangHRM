import loginData from '../../test_data/login.json'
import {Login} from '../../Pages/loginPage.js'
import {test} from '@playwright/test'

test('Basic Login', async ({page}) => {
    let userLogin = new Login(page)
    await page.pause()
    await userLogin.browserLaunch(loginData)
    await userLogin.login(loginData)
    await userLogin.logout()
    
})