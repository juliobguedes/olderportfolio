app.service("Portfolio", function($state) {
    this.en = {
        input:true,
        aboutme: "src/jsons/en/aboutme.json",
        hobbies1: "src/jsons/en/hobbies1.json",
        hobbies2: "src/jsons/en/hobbies2.json",
        places1: "src/jsons/en/places1.json",
        places2: "src/jsons/en/places2.json",
        university1: "src/jsons/en/university1.json",
        university2: "src/jsons/en/university2.json"
    }

    this.pt = {
        input:false,
        aboutme:"src/jsons/pt/aboutme.json",
        hobbies1:"src/jsons/pt/hobbies1.json",
        hobbies2:"src/jsons/pt/hobbies2.json",
        places1:"src/jsons/pt/places1.json",
        places2:"src/jsons/pt/places2.json"
    }

    this.getLanguage = () => {
        if ($state.current.name === "portfolioEN") {
            return this.en;
        } else {
            return this.pt;
        }
    }
})