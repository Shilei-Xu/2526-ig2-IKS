const pages_05 = [
    {
        id: "05-01",
        layout: "solo",
        bg: "bg_h2",
        texts: [
            {
                content: "Chapter 5",
                font: "ui",
                size: 70,
                y: 210
            },
            {
                content: "Night Celebration",
                font: "ui",
                size: 200,
                y: 350
            },
            {
                content: "8 : 30 PM   Cave camp",
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
            nextId: "05-08",   //id of the next page
            prev: "p",
            prevId: "04-09"
        }
    },
    {
        id: "05-02",
        layout: "talk",
        bg: "bg_h2",
        character: {
            key: "homo_6",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "This day was full of adventure and new experiences!\nThe sun is setting, and it's time to settle down.\nGather around the campfire with your family and friends.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "05-03",   //id of the next page
            prev: "p",
            prevId: "05-01"
        }
    },
    {
        id: "05-03",
        layout: "solo2",
        bg: "bg_h2",
        keys: {
            next: "c",
            nextId: "05-04",   //id of the next page
            prev: "p",
            prevId: "05-02"
        }
    },
     {
        id: "05-04",
        layout: "solo2",
        bg: "bg_h1",
        keys: {
            next: "c",
            nextId: "05-05",   //id of the next page
            prev: "p",
            prevId: "05-03"
        }
    },
 {
        id: "05-05",
        layout: "display",
        bg: "bg_h1",

        images: [
            {
                key: "nean_1",
                x: 580,
                y: 500,
                maxW: 300,
                maxH: 400,
                scale: 1.2,
                breathe: true
            },
            {
                key: "homo_3",
                x: 1080,
                y: 550,
                maxW: 300,
                maxH: 400,
                scale: 1.2,
                breathe: true
            }
        ],

        keys: {
            next: "c",
            nextId: "05-06",
            prev: "p",
            prevId: "05-04"
        }
    },
    {
        id: "05-06",
        layout: "talk",
        bg: "bg_h2",
        character: {
            key: "homo_6",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "We should make some paint to capture today's experiences.\nLet's pick an ingredient that could work for RED dye.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "05-07",   //id of the next page
            prev: "p",
            prevId: "05-05"
        }
    },
    {
        id: "05-07",
        layout: "choice",
        bg: "bg_h2",
        options: [
            {
                key: "obj_4",          // 正常图片
                highlightKey: "hlobj_4",  // 高亮图片（透明 PNG）
                x: 400,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "q"
            },
            {
                key: "obj_5",
                highlightKey: "hlobj_5",
                x: 800,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "w"
            },
            {
                key: "obj_6",
                highlightKey: "hlobj_6",
                x: 1200,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "e"
            }
        ],
        keys: {
            next: "n",
            nextId: "05-08",   //id of the next page
            prev: "p",
            prevId: "05-06"
        }
    },
{
        id: "05-08",
        layout: "display",
        bg: "bg_h1",

        images: [
            {
                key: "homo_5",
                x: 580,
                y: 500,
                maxW: 300,
                maxH: 400,
                scale: 1,
                breathe: true
            },
            {
                key: "homo_6",
                x: 780,
                y: 200,
                maxW: 300,
                maxH: 600,
                scale: 1,
                breathe: true
            }
        ],

        keys: {
            next: "c",
            nextId: "05-09",
            prev: "p",
            prevId: "05-07"
        }
    },
    {
        id: "05-09",
        layout: "talk",
        bg: "bg_h1",
        character: {
            key: "homo_6",   // images 对象里的 key
            x: 480,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.5,      // 缩放
            breathe: true    // 是否启用轻微上下浮动
        },
        text: "Flip the page, dip your brush in water, and draw your favorite moment.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "05-10",   //id of the next page
            prev: "p",
            prevId: "05-08"
        }
    },
    
 {
        id: "05-10",
        layout: "solo2",
        bg: "bg_h2",
        texts: [
           
            {
                content: "The End",
                font: "ui",
                size: 200,
                y: 400
            }
        ],
        keys: {
            next: "c",
            nextId: null,   //id of the next page
            prev: "p",
            prevId: "05-09"
        }
    },
   
];

