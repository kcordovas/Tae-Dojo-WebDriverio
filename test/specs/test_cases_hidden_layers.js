import hiddenLayersPage from '../pageobjects/hidden_layers_page.js'

describe('HiddenLayersPage', () => {
    // Hooks to open browser
    before(async () => {
        await hiddenLayersPage.open();
    });

    it('Green button is clicked and Blue button is displayed ', async () => {
        await hiddenLayersPage.greenButton.click();
        expect(await hiddenLayersPage.blueButton.waitForDisplayed());
    });

    it('Verify List only have 2 elements', async () => {
        const listScenario = await hiddenLayersPage.listScenario;
        expect(listScenario).toHaveChildren(2);
    });

    it('Page structure contain your three title, one h3 and two h4', async () => {
        const titlePage = await hiddenLayersPage.titlePage;
        const titleMiddle = await hiddenLayersPage.titleScenario;
        const titleThird = await hiddenLayersPage.titleThird;
        expect(titlePage).toHaveText("Hidden Layers");
        expect(await titlePage.isDisplayed());
        expect(titleMiddle).toHaveText("Scenario");
        expect(await titleMiddle.isDisplayed());
        expect(titleThird).toHaveText("Playground");
        expect(await titleThird.isDisplayed());
    });
});