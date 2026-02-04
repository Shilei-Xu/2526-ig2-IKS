const pages_01 = [
     {
        id: "00-00",
        layout: "solo2",
        texts: [
           
            {
                content: "A tool from the depths of time is calling me… \nOpen the book, and see how early humans lived.",
                size: 50,
                y: 440
            }
        ],
        keys: {
            next: "1",
            nextId: "01-01",   //id of the next page
            prev: "p",
            prevId: null
        }
    },
    {
        id: "00-01",
        layout: "solo2",
        bg: "bg_00",
        texts: [
           
            {
                content: "Play",
                font: "ui",
                size: 60,
                y: 840
            }
        ],
        keys: {
            next: "c",
            nextId: "01-01",   //id of the next page
            prev: "p",
            prevId: null
        }
    },

    {
        id: "01-01",
        layout: "solo",
        bg: "bg_h3",
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
                y: 840
            }
        ],
        keys: {
            next: "c",
            nextId: "01-02",   //id of the next page
            prev: "p",
            prevId: "00-01"
        }
    },

    {
        id: "01-02",
        layout: "talk",
        bg: "bg_h3",
        character: {
            key: "homo_2",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Good morning! \nIt's around 60000 B.C. and you just woke up in your home,lying on grass and fur beside your small tribe. \nA new day begins-it's time to get to work and survive.",
        keys: {
            next: "n",
            nextId: "01-03",   //id of the next page
            prev: "p",
            prevId: "01-01"
        }
    },

    {
        id: "01-03",
        layout: "talk",
        bg: "bg_h3",
        character: {
            key: "homo_2",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Pick your materials before you go hunting.\nThe glowing circles show where the materials lie-\ncollect what you need.",
        textMode: "instant",

        highlights: [
            { x: 150, y: 620, r: 150, color: [254, 236, 190, 220] },
            { x: 350, y: 620, r: 150, color: [254, 236, 190, 220] }
        ],
        keys: {
            next: "n",
            nextId: "01-04",   //id of the next page
            prev: "p",
            prevId: "01-02"
        }
    },

    {
        id: "01-04",
        layout: "info",
        bg: "bg_h3",
        character: {
            key: "obj_7",   // images 对象里的 key
            x: -200,          // x 坐标
            y: 0,          // y 坐标
            maxW: 1000,       // 最大宽度
            maxH: 1000,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: false    // 是否启用轻微上下浮动
        },
        text: "Ah, you picked stone! \n\nAround 60,000 years ago, our ancestors used sharp stones to make tools for cutting, scraping, and hunting. They'd chip pieces off rocks carefully, shaping them into useful blades and points. Simple, but life-saving!\n\nReady? Follow the on-screen prompts and tap your stone to start crafting.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "01-05",   //id of the next page
            prev: "p",
            prevId: "01-03"
        }
    },
    {
        id: "01-05",
        layout: "video",
        bg: "bg_h3",
        video: {
            key: "intro",
            x: 0,
            y: 0,
            width: 1920,
            height: 1080,

        },
        keys: {
            next: "n",
            nextId: "01-06",   //id of the next page
            prev: "p",
            prevId: "01-04",
        }
    },
    {
        id: "01-06",
        layout: "talk",
        bg: "bg_h3",

        characters: [
            {
                key: "homo_2",
                x: 450,
                y: 430,
                maxW: 400,
                maxH: 400,
                scale: 1.5,
                breathe: true
            },
            {
                key: "obj_8",
                x: 600,          // x 坐标
                y: 0,          // y 坐标
                maxW: 1000,       // 最大宽度
                maxH: 1000,
                scale: 1,
                breathe: false,
                pop: true
            }
        ],
        text: "Nice! Your new stone tool is ready to use!\nTime to move on! Flip the page to start the next chapter. ",
        textMode: "instant",
        keys: {
            next: "2",
            nextId: "02-01",   //id of the next page
            prev: "p",
            prevId: "01-05"
        }
    },

];
