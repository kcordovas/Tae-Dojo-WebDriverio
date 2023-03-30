import hiddenLayersPage from '../pageobjects/hidden_layers_page.js'

describe('HiddenLayersPage', () => {
    it('Green button is clicked and Blue button is displayed ', async () => {
        await hiddenLayersPage.open()
        await hiddenLayersPage.greenButton.click();
        expect(await hiddenLayersPage.blueButton.isDisplayed());
        expect(!(await hiddenLayersPage.greenButton.isDisplayed()));
    });

    it('Verify List only have 2 elements', async () => {
        await hiddenLayersPage.open();
        const listScenario = await hiddenLayersPage.listScenario;
        expect(listScenario).toHaveChildren(2);
    });
});