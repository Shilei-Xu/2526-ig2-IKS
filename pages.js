let currentPage = 0;
let images = {};
let bubble;


let pages = [
    {
        id: "02-01",
        layout: "solo",
        bg: "bg_f1",
        texts: [
            {
                content: "Chapter 2",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "The Hunt",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "05 : 30 AM   River camp",
                size: 60,
                y: 670
            },
            {
                content: "Continue",
                font: "ui",
                size: 60,
                y: 780
            }
        ],
        keys: { next: "n", prev: "p" }
    },

    {
        id: "01-01",
        layout: "solo",
        bg: "bg_f2",
        texts: [
            {
                content: "Chapter 1",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "Wake up ",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "05 : 30 AM   River camp",
                size: 60,
                y: 670
            },
            {
                content: "Continue",
                font: "ui",
                size: 60,
                y: 780
            }
        ],
        keys: {
            next: "n",
            nextId: "02-01",   //id of the next page
            prev: "p",
            prevId: null
        }
    },
    {
        id: "01-02",
        layout: "talk",
        bg: "bg_f1",
        text: "Good morning! \nIt's around 60000 B.C. and you just woke up in your home,lying on grass and fur beside your small tribe. \nA new day begins-it's time to get to work and survive.",
        keys: { next: "n", prev: "p" }
    },
    {
        id: "01-03",
        layout: "talk",
        bg: "bg_f1",
        text: "Pick your materials before you go hunting.\nThe glowing circles show where the materials lie-\ncollect what you need.",
        keys: { next: "n", prev: "p" }
    },
    {
        id: "01-06",
        layout: "talk",
        bg: "bg_f1",
        text: "Nice! Your new stone tool is ready to use!\nTime to move on! Flip the page to start the next chapter. ",
        keys: { next: "n", prev: "p" }
    },
];

