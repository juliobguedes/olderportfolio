app.filter("languageSnippet", function() {
    return function(t, input) {
        let r = 'src/jsons/' + t + '.json';
        if (!input) {
            r.replace(".json", "BR.json");
        }
        return r;
    }
})