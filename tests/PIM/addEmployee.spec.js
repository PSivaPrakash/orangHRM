import {test, expect} from '@playwright/test'
import empData from '../../test_data/employeeData.json'
import {Pim} from '../../Pages/addEmployeePage.js'
import loginData from '../../test_data/login.json'
import {Login} from '../../Pages/loginPage.js'


test.beforeEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.browserLaunch(loginData)
    await userLogin.login(loginData)
    
})


test('Create an Employee', async ({page}) => {
    test.slow()
    // await page.pause()
    let employeeData = new Pim(page)
    await page.pause()
    await employeeData.pimTab()
    await employeeData.initiateNewEmployee()
    await employeeData.employeesData(empData[0])
    await employeeData.saveEmployee()
    await expect(page.getByPlaceholder('First Name')).toHaveValue(empData[0].employee.firstName)
})


test.afterEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.logout()
    
})