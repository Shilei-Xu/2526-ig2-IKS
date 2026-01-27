const pages_05 = [
    {
        id: "05-01",
        layout: "solo",
        bg: "bg_h3",
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
            next: "n",
            nextId: "05-02",   //id of the next page
            prev: "p",
            prevId: "04-01"
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
            nextId: "05-04",   //id of the next page
            prev: "p",
            prevId: "05-02"
        }
    },
    {
        id: "05-04",
        layout: "choice",
        bg: "bg_h1",
        options: [
            {
                key: "obj_4",          // 正常图片
                highlightKey: "hlobj_4",  // 高亮图片（透明 PNG）
                x: 400,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "1"
            },
            {
                key: "obj_5",
                highlightKey: "hlobj_5",
                x: 800,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "2"
            },
            {
                key: "obj_6",
                highlightKey: "hlobj_6",
                x: 1200,
                y: 450,
                w: 300,
                h: 300,
                selectKey: "3"
            }
        ],
        keys: {
            next: "n",
            nextId: "05-06",   //id of the next page
            prev: "p",
            prevId: "05-03"
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
        text: "Flip the page, dip your brush in water, and draw your favorite moment.",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "05-07",   //id of the next page
            prev: "p",
            prevId: "05-06"
        }
    },

   
];

