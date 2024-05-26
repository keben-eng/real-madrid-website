const defaultPlayers = [
    {
        playerName: "Jude Bellingham",
        age: 20,
        nationality: "https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg",
        countryFlag:
            "https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119_640.png",
        totalMatches: 37,
        totalGoals: 18,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p244855/256x278/p244855_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--4604e966-ca25-4642-a5ea-adf2c5ff02a5/_330831770768.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 5,
        id: 0.11409675060461533,
        isLiked: false
    },
    {
        playerName: "Dani Carvajal",
        age: 33,
        nationality: "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 34,
        totalGoals: 3,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p88483/256x278/p88483_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2e3bad0e-e20c-407d-a2dd-544b14c88137/_383195957791.app.png?preferwebp=true&width=420",
        position: "RB",
        shirtNumber: 2,
        id: 0.8724387811508925,
        isLiked: false
    },
    {
        playerName: "Luka Modric",
        age: 36,
        nationality: "https://t3.ftcdn.net/jpg/01/17/57/26/360_F_117572666_FeneGZAZbbAYhfPcVvHuDBCsRzVpTHeY.jpg",
        countryFlag:
            "https://t3.ftcdn.net/jpg/01/17/57/26/360_F_117572666_FeneGZAZbbAYhfPcVvHuDBCsRzVpTHeY.jpg",
        totalMatches: 33,
        totalGoals: 2,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p37055/2048x2048/p37055_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--323b5cf8-c89f-4158-addd-80b45571ff09/_383195890566.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 10,
        id: 0.46228321837591824,
        isLiked: false
    },
    {
        playerName: "Eduardo Camavinga",
        age: 21,
        nationality: "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        countryFlag:
            "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        totalMatches: 31,
        totalGoals: 2,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p475561/256x278/p475561_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--7bbe1dea-7954-4de3-a00d-35e3c0d6e714/_330741535964.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 12,
        id: 0.10952135410087371,
    },
    {
        playerName: "Thibaut Courtois",
        age: 29,
        nationality: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_Belgium.png",
        countryFlag:
            "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_Belgium.png",
        totalMatches: 2,
        totalGoals: 0,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p60772/256x278/p60772_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--bc70061e-860d-478e-92bf-9129a473debe/_330594198197.app.png?preferwebp=true&width=420",
        position: "GK",
        shirtNumber: 1,
        id: 0.6762882207707053,
    },
    {
        playerName: "Vinícius Júnior",
        age: 21,
        nationality:  "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        countryFlag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        totalMatches: 30,
        totalGoals: 16,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p246333/256x278/p246333_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e7154f9f-8a49-4afb-a8f1-278d54ae6a76/_330587629904.app.png?preferwebp=true&width=420",
        position: "LW",
        shirtNumber: 7,
        id: 0.5712353154459329,
    },
    {
        playerName: "Toni Kroos",
        age: 31,
        nationality: "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg",
        countryFlag:
            "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg",
        totalMatches: 35,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p44989/2048x2225/p44989_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--503de83a-62df-4c8a-b047-bedb22002ae4/_405531873648.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 8,
        id: 0.6581257094652619,
    },
    {
        playerName: "Éder Militão",
        age: 23,
        nationality: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        countryFlag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        totalMatches: 6,
        totalGoals: 0,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p218449/2048x2048/p218449_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--a1a83704-7842-4814-9571-cd1a61a3c04f/_330646945730.app.png?preferwebp=true&width=420",
        position: "CB",
        shirtNumber: 3,
        id: 0.2780448782349978,
    },
    {
        playerName: "Brahim Diaz",
        age: 25,
        nationality: "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 30,
        totalGoals: 8,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p216183/256x278/p216183_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--2ccb9c83-a2fa-4654-98b4-a151eec22c1e/_330623248954.app.png?preferwebp=true&width=420",
        position: "RW",
        shirtNumber: 21,
        id: 0.8152582942924202,
    },
    {
        playerName: "Federico Valverde",
        age: 23,
        nationality: "https://media.istockphoto.com/id/978274106/vector/national-flag-of-uruguay-with-sun-of-may.jpg?s=612x612&w=0&k=20&c=dLJgOfyNJpsVYG9xB36qzU8qQUQmzNV4TbgViGINcSk=",
        countryFlag:
            "https://media.istockphoto.com/id/978274106/vector/national-flag-of-uruguay-with-sun-of-may.jpg?s=612x612&w=0&k=20&c=dLJgOfyNJpsVYG9xB36qzU8qQUQmzNV4TbgViGINcSk=",
        totalMatches: 38,
        totalGoals: 4,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p223255/2048x2225/p223255_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--5358608e-1559-4394-8315-bf75a30b7b66/_330415554020.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 15,
        id: 0.6075085457938725,
    },
    {
        playerName: "Rodrygo",
        age: 23,
        nationality: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        countryFlag:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
        totalMatches: 34,
        totalGoals: 10,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p440077/256x278/p440077_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--6ec594aa-667d-486f-bf9d-6b7af2263db1/_330644453854.app.png?preferwebp=true&width=420",
        position: "RW",
        shirtNumber: 11,
        id: 0.7946311833179382,
    },
    {
        playerName: "Aurélien Tchouaméni",
        age: 22,
        nationality:  "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        countryFlag:
            "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        totalMatches: 29,
        totalGoals: 3,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p219292/256x278/p219292_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--099ef767-7fd2-4aa3-b097-81ecce95a922/_330783249171.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 18,
        id: 0.8033229845166714,
    },
    {
        playerName: "David Alaba",
        age: 32,
        nationality:  "https://upload.wikimedia.org/wikipedia/commons/7/76/Flag_of_Austria.png",
        countryFlag:
            "https://upload.wikimedia.org/wikipedia/commons/7/76/Flag_of_Austria.png",
        totalMatches: 12,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p50188/256x278/p50188_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--e702ba51-b3dd-4a0e-ac30-461bf37f943c/_330732317464.app.png?preferwebp=true&width=420",
        position: "CB",
        shirtNumber: 4,
        id: 0.32212738168268906,
    },
    {
        playerName: "Nacho Fernández",
        age: 34,
        nationality: "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 35,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p88477/256x278/p88477_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--168947b6-4e66-4f76-a40e-25cd3e58c47b/_383195940580.app.png?preferwebp=true&width=420",
        position: "CB",
        shirtNumber: 6,
        id: 0.6245362759540314,
    },
    {
        playerName: "Joselu",
        age: 34,
        nationality:  "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 28,
        totalGoals: 12,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p61316/256x278/p61316_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--b846cf8a-9eda-4a44-a7f6-2e7be0cf7d0c/_330832155613.app.png?preferwebp=true&width=420",
        position: "ST",
        shirtNumber: 14,
        id: 0.33897466739291415,
    },
    {
        playerName: "Andrey Lunin",
        age: 25,
        nationality: "https://img.freepik.com/premium-photo/flag-ukraine-flag-nation_979270-383.jpg",
        countryFlag:
            "https://img.freepik.com/premium-photo/flag-ukraine-flag-nation_979270-383.jpg",
        totalMatches: 31,
        totalGoals: 0,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p224965/256x278/p224965_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--565461b5-ffc2-4069-b9b4-5e0d3c2b362a/_330650536399.app.png?preferwebp=true&width=420",
        position: "GK",
        shirtNumber: 13,
        id: 0.17680071498805083,
    },
    {
        playerName: "Antonio Rüdiger",
        age: 31,
        nationality:  "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg",
        countryFlag:
            "https://img.freepik.com/free-vector/illustration-german-flag_53876-27101.jpg",
        totalMatches: 37,
        totalGoals: 2,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p102380/512x512/p102380_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--26662884-dfa0-4a09-871e-517a716b9cc1/_330782488523.app.png?preferwebp=true&width=420",
        position: "CB",
        shirtNumber: 22,
        id: 0.38237096108588986,
    },
    {
        playerName: "Ferland Mendy",
        age: 28,
        nationality: "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        countryFlag:
            "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295_640.png",
        totalMatches: 30,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p206255/512x512/p206255_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--67d87039-f007-48db-bdf0-47b2d4a5faf9/_330644461670.app.png?preferwebp=true&width=420",
        position: "LB",
        shirtNumber: 23,
        id: 0.7206747480083375,
    },
    {
        playerName: "Lucas Vázquez",
        age: 33,
        nationality:  "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 20,
        totalGoals: 2,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p107593/512x512/p107593_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3c26580e-fb7e-43f2-9f4e-9909d556da36/_383200759155.app.png?preferwebp=true&width=420",
        position: "RB",
        shirtNumber: 17,
        id: 0.4324097294288003,
    },
    {
        playerName: "Arda Güler",
        age: 19,
        nationality: "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-xl.png",
        countryFlag:
            "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-xl.png",
        totalMatches: 20,
        totalGoals: 6,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p520250/256x278/p520250_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3456c068-c24d-4e96-b8b5-0f45fa23f403/_330833156993.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 24,
        id: 0.06643292671208512,
    },
    {
        playerName: "Fran Garcia",
        age: 24,
        nationality: "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        countryFlag:
            "https://c4.wallpaperflare.com/wallpaper/44/332/7/spain-flag-wallpaper-preview.jpg",
        totalMatches: 22,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p227166/256x278/p227166_t186_2023_1_001_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3456c068-c24d-4e96-b8b5-0f45fa23f403/_330833156993.app.png?preferwebp=true&width=420",
        position: "LB",
        shirtNumber: 20,
        id: 0.06643292671208516,
    },
    {
        playerName: "Nico Paz",
        age: 20,
        nationality:  "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg",
        countryFlag:
            "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg",
        totalMatches: 3,
        totalGoals: 1,
        imageUrl:
            "https://assets.laliga.com/squad/2023/t186/p551493/512x512/p551493_t186_2023_1_003_000.png",
        newPageImgURL:
            "https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--3456c068-c24d-4e96-b8b5-0f45fa23f403/_330833156993.app.png?preferwebp=true&width=420",
        position: "CM",
        shirtNumber: 28,
        id: 0.06643292671208517,
    },

];


export default defaultPlayers;

