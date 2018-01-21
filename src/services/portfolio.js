app.service("Portfolio", function() {
    this.english = {
        input:true,
        aboutme: "src/jsons/aboutmeEN.json",
        hobbies1: "src/jsons/hobbies1EN.json",
        hobbies2: "src/jsons/hobbies2EN.json",
        places1: "src/jsons/places1EN.json",
        places2: "src/jsons/places2EN.json"
    }

    this.portuguese = {
        input:false,
        aboutme:"src/jsons/aboutmePT.json",
        hobbies1:"src/jsons/hobbies1PT.json",
        hobbies2:"src/jsons/hobbies2PT.json",
        places1:"src/jsons/places1PT.json",
        places2:"src/jsons/places2PT.json"
    }
})