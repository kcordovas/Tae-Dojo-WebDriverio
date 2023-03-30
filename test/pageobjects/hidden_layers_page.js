
class HiddenLayersPage {

    get greenButton() {
        return $("#greenButton");
    }

    get blueButton() {
        return $("#blueButton");
    }

    open() {
        return browser.url(`http://uitestingplayground.com/hiddenlayers`);
    }
}

export default new HiddenLayersPage()