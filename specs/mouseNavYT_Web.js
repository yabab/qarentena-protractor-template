describe(
    "Mouse Accessibility - YouTube Web",
    function() {
        var searchBar = element(by.css("input#search"));
        var searchButton = element(by.css("button#search-icon-legacy"));
        var filterButton = element(by.css("paper-button[aria-label='Search filters']"));
        var searchTerm = "Golden Retriever";
        var searchResults = element.all(by.tagName("ytd-video-renderer"));

        it(
            "Search by Click",
            function() {
                browser.waitForAngularEnabled(false);
                browser.get("https://www.youtube.com.br");
                browser.wait(ExpectedConditions.elementToBeClickable(searchBar));
                searchBar.sendKeys(searchTerm);
                let barContent = searchBar.getAttribute("value");
                expect(barContent).toContain(searchTerm);
                browser.wait(ExpectedConditions.elementToBeClickable(searchButton));
                searchButton.click();
                browser.wait(ExpectedConditions.urlContains("results"));
                browser.wait(ExpectedConditions.urlContains("search_query"));
                browser.wait(ExpectedConditions.presenceOf(filterButton));
                expect(searchResults.count()).toBeGreaterThan(1);
            }
        );
    }
);