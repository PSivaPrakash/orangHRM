import {test, expect} from '@playwright/test'
import {SearchEmployee} from '../../Pages/searchEmployee.js'
import empData from '../../test_data/employeeData.json'
import loginData from '../../test_data/login.json'
import {Login} from '../../Pages/loginPage.js'
import {UpdateEmployee} from '../../Pages/updateEmployeePage.js'
import { Pim } from '../../Pages/addEmployeePage.js'

test.beforeEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.browserLaunch(loginData)
    await userLogin.login(loginData)
    
})


test('Updating an Employee', async ({page}) => {
    let searchEmployee = new SearchEmployee(page)
    let employeeData = new Pim(page)
    let updateEmployee = new UpdateEmployee(page)
    await page.pause()
    await employeeData.pimTab()
    await searchEmployee.searchEmployee(empData[0])
    await updateEmployee.initiateUpdateEmployee()
    await expect(page.getByPlaceholder('First Name')).toHaveValue(empData[0].employee.firstName)
    await employeeData.employeesData(empData[1])
    await expect(page.getByPlaceholder('First Name')).toHaveValue(empData[1].employee.firstName)



})

test.afterEach('Login to OrangeHRM', async ({page}) => {
    let userLogin = new Login(page)
    await userLogin.logout()
    
})