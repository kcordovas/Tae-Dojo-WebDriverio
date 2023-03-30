
class HiddenLayersPage {

    get greenButton() {
        return $("#greenButton");
    }

    get blueButton() {
        return $("#blueButton");
    }

    get titlePage() {
        return $('h3*=Hidden');
    }

    get titleScenario() {
        return $("h4=Scenario");
    }

    get titleThird() {
        return $('h4*=Play')
    }

    get listScenario() {
        // Is not valid because verify the topAppBar
        //return $$('<li />');
        return this.titleScenario.nextElement();
    }

    open() {
        return browser.url(`http://uitestingplayground.com/hiddenlayers`);
    }
}

export default new HiddenLayersPage()