describe(
    "Keyboard Accessibility - YouTube Web",
    function() {
        var searchBar = element(by.css("input#search"));
        var filterButton = element(by.css("paper-button[aria-label='Search filters']"));
        var searchTerm = "Golden Retriever";
        var searchResults = element.all(by.tagName("ytd-video-renderer"));

        it(
            "Search with ENTER Key",
            function() {
                browser.waitForAngularEnabled(false);
                browser.get("https://www.youtube.com.br");
                browser.wait(ExpectedConditions.elementToBeClickable(searchBar));
                browser.actions().mouseMove(searchBar).perform();
                searchBar.click();
                searchBar.sendKeys(searchTerm);
                let barContent = searchBar.getAttribute("value");
                expect(barContent).toContain(searchTerm);
                searchBar.sendKeys(protractor.Key.ENTER);
                browser.wait(ExpectedConditions.urlContains("results"));
                browser.wait(ExpectedConditions.urlContains("search_query"));
                browser.wait(ExpectedConditions.presenceOf(filterButton));
                expect(searchResults.count()).toBeGreaterThan(1);
            }
        );
    }
);