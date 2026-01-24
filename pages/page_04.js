const pages_04 = [
    {
        id: "04-01",
        layout: "solo",
        bg: "bg_h1",
        texts: [
            {
                content: "Chapter 4",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "Cooperate or Fight",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "5 : 10 PM   Mountain pass",
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
            next: "n",
            nextId: "04-02",   //id of the next page
            prev: "p",
            prevId: "03-01"
        }
    },
    {
        id: "04-02",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_9",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "They're starting a fight—\nquick! \nGrab a strong branch and prepare your bow!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "04-04",   //id of the next page
            prev: "p",
            prevId: "04-01"
        }
    },
    {
        id: "04-04",
        layout: "info",
        bg: "bg_f1",
        character: {
            key: "obj_1",   // images 对象里的 key
            x: 300,          // x 坐标
            y: 330,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.1,      // 缩放
            breathe: false    // 是否启用轻微上下浮动
        },
        text: "Great! You chose wisely. \n\nMaking weapons was key to survival for early humans.\nThey used stone, wood, and bone to craft spears, bows, and sharp blades.\nWith the right tools, even small groups could hunt and defend themselves.\n\nNow, get ready for battle!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "04-06",   //id of the next page
            prev: "p",
            prevId: "04-03"
        }
    },
    {
        id: "04-06",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_9",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "You've taken back your hunt from the Neanderthals-victory is yours!\nTurn the page and relax for the night.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "05-01",   //id of the next page
            prev: "p",
            prevId: "04-01"
        }
    },


];

