const pages_04 = [
    {
        id: "04-01",
        layout: "solo",
        bg: "bg_f1",
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
            next: "c",
            nextId: "04-02",   //id of the next page
            prev: "p",
            prevId: "03-09"
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
            nextId: "04-03",   //id of the next page
            prev: "p",
            prevId: "04-01"
        }
    },
    {
        id: "04-03",
        layout: "choice",
        bg: "bg_f1",
        options: [
            {
                key: "obj_1",          // 正常图片
                highlightKey: "hlobj_1",  // 高亮图片（透明 PNG）
                x: 400,
                y: 400,
                w: 400,
                h: 400,
                selectKey: "q",
                nextId: "04-04"
            },
            {
                key: "obj_2",
                highlightKey: "hlobj_2",
                x: 800,
                y: 400,
                w: 400,
                h: 400,
                selectKey: "w",
                nextId: "04-05"
            },
            {
                key: "obj_3",
                highlightKey: "hlobj_3",
                x: 1200,
                y: 400,
                w: 400,
                h: 400,
                selectKey: "e",
                nextId: "04-04"
            }
        ],
        showArrows: false,  // 不显示箭头
        keys: {
            
            prev: "p",
            prevId: "04-02"
        }
    },
    {
        id: "04-04",
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
        text: "This one has too many branches, its main branch is too uneven for a bow,\ntry a different one",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "04-03",   //id of the next page
            prev: "p",
            prevId: "04-01"
        }
    },
    {
        id: "04-05",
        layout: "info",
        bg: "bg_f1",
        character: {
            key: "obj_2",   // images 对象里的 key
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
            prevId: "04-04"
        }
    },
    {
        id: "04-06",
        layout: "display",
        bg: "bg_f1",

        images: [
            {
                key: "nean_5",
                x: 400,
                y: 150,
                maxW: 1000,
                maxH: 800,
                scale: 1.2,
                breathe: false
            }
        ],

        keys: {
            next: "n",
            nextId: "04-07",
            prev: "p",
            prevId: "04-05"
        }
    },
    {
        id: "04-07",
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
        ui: "end",   // 表示使用最后一页箭头

        keys: {
            next: "5",
            nextId: "05-01",   //id of the next page
            prev: "p",
            prevId: "04-06"
        }
    },


];

