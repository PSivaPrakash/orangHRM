import { test } from '@playwright/test'
import { SearchEmployee } from '../../Pages/searchEmployee.js'
import empData from '../../test_data/employeeData.json'
import { Pim } from '../../Pages/addEmployeePage.js'
import loginData from '../../test_data/login.json'
import {Login} from '../../Pages/loginPage.js'



test.beforeEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.browserLaunch(loginData)
    await userLogin.login(loginData)
    
})

test('Search Employee', async ({ page }) => {
    let searchEmployee = new SearchEmployee(page)
    let employeeData = new Pim(page)
    await employeeData.pimTab()
    await searchEmployee.searchEmployee(empData[0])

})


test.afterEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.logout()
    
})