export class Login {
    constructor(page) {
        this.page = page;
        this.userNameField = page.getByPlaceholder("Username")
        this.passwordField = page.getByPlaceholder("Password")
        this.loginButton = page.getByRole('button', {name: ' Login '})
    }

    async browserLaunch(browser) {
        await this.page.goto(browser.url)
    }

    async login(loginData) {
        await this.userNameField.fill(loginData.userName)
        await this.passwordField.fill(loginData.password)
        await this.loginButton.click()
    }

    async logout() {
        await this.page.locator(".oxd-userdropdown-name").click()
        await this.page.getByText("Logout").click()
    }
}