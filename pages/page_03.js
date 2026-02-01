const pages_03 = [
    {
        id: "03-01",
        layout: "solo",
        bg: "bg_f2",
        //bgScale: 1.2,
        // bgOffset: { x: -80, y: 0 },
        texts: [
            {
                content: "Chapter 3",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "Strangers Ahead",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "1 : 40 PM   Rocky Valley",
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
            nextId: "03-02",   //id of the next page
            prev: "p",
            prevId: "02-07"
        }
    },
    {
        id: "03-02",
        layout: "talk",
        bg: "bg_f2",
        character: {
            key: "homo_9",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "After catching the rabbit, you head back along your footprints. \nSuddenly, you hear unfamiliar voices-others are following. \nA group of strangers is approaching.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "03-03",   //id of the next page
            prev: "p",
            prevId: "03-01"
        }
    },
    {
        id: "03-03",
        layout: "display",
        bg: "bg_f2",

        images: [
            {
                key: "nean_2",
                x: 830,
                y: 150,
                maxW: 1000,
                maxH: 800,
                scale: 1.2,
                breathe: false
            },
            {
                key: "nean_3",
                x: 1130,
                y: 150,
                maxW: 1000,
                maxH: 800,
                scale: 1.2,
                breathe: false
            }
        ],

        keys: {
            next: "n",
            nextId: "03-05",
            prev: "p",
            prevId: "03-02"
        }
    },
    {
        id: "03-04",
        layout: "neinfo",
        bg: "bg_h3",
        /* character: {
            key: "obj_7",   // images 对象里的 key
            x: -200,          // x 坐标
            y: 0,          // y 坐标
            maxW: 1000,       // 最大宽度
            maxH: 1000,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: false    // 是否启用轻微上下浮动
        }, */
        text1: "Homo sapiens\nTime period : Appeared ~300,000 years ago, \nstill present today\nEarly humans lived in small groups, hunting, gathering, and making tools to survive. They were curious, creative, and able to adapt to different environments.\n\n· Taller and slimmer body\n· Smaller brow ridges\n· Skilled at making tools, using fire, and creating art",
        textMode1: "instant",
        textBox1: { x: 160, y: 180, w: 550 },

        text2: "Neanderthals \nTime period : ~400,000-40,000 years ago \nNeanderthals lived in cold regions, relying on big-game hunting and strong bodies to survive. They were tough, resourceful, and perfectly adapted to harsh climates.\n\n· Shorter and stockier build\n· Large brow ridges and strong bones\n· Good at hunting big animals, very strong, adapted to cold climates",
        textMode2: "instant",
        textBox2: { x: 1100, y: 180, w: 550 },
        keys: {
            next: "n",
            nextId: "03-05",   //id of the next page
            prev: "p",
            prevId: "03-03"
        }
    },
    {
        id: "03-05",
        layout: "talk",
        bg: "bg_f2",
        character: {
            key: "homo_9",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "They move closer, watching you. Speak carefully—what you do next could change everything.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "03-06",   //id of the next page
            prev: "p",
            prevId: "03-04"
        }
    },
    {
        id: "03-06",
        layout: "dialog",
        bg: "bg_f2",
        texts: {
            top: "Who are you? \nWhy are you here?",
            middle: "We mean no harm, just passing through.",
            bottom: "None of your business!"
        },
        keys: {
            next: "e",
            nextId: "03-07",   //id of the next page
            prev: "p",
            prevId: "03-05"
        }
    },
    {
        id: "03-07",
        layout: "dialog",
        bg: "bg_f2",
        texts: {
            top: "We saw you following the rabbits… \nAre you hunting our prey?",
            middle: "We caught just one, we share what we find.",
            bottom: "We need food, stay out of our way!"
        },
        keys: {
            next: "e",
            nextId: "03-08",   //id of the next page
            prev: "p",
            prevId: "03-06"
        }
    },
    {
        id: "03-08",
        layout: "dialog",
        bg: "bg_f2",
        texts: {
            top: "Do we work together or defend ourselves?",
            middle: "Let's help each other —\nwe can survive better together.",
            bottom: "We'll fight if we must!"
        },
        keys: {
            next: "e",
            nextId: "03-09",   //id of the next page
            prev: "p",
            prevId: "03-07"
        }
    },
    {
        id: "03-09",
        layout: "talk",
        bg: "bg_f2",
        character: {
            key: "homo_9",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "The Neanderthals seem angry. \nFlip the page and find out what comes next.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "04-01",   //id of the next page
            prev: "p",
            prevId: "03-08"
        }
    },





];

