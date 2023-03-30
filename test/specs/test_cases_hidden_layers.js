import hiddenLayersPage from '../pageobjects/hidden_layers_page.js'

describe('HiddenLayersPage', () => {
    it('Green button is clicked and Blue button is displayed ', async () => {
        await hiddenLayersPage.open()
        await hiddenLayersPage.greenButton.click();
        expect(await hiddenLayersPage.blueButton.isDisplayed());
        expect(!(await hiddenLayersPage.greenButton.isDisplayed()));
    });
});