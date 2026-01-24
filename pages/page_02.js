const pages_02 = [
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
                content: "08 : 15 AM   Open plains",
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
            nextId: "02-02",   //id of the next page
            prev: "p",
            prevId: "01-01"
        }
    },

    {
        id: "02-02",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_4",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.2,      // 缩放
            breathe: true,    // 是否启用轻微上下浮动

        },
        text: "Hey, grab your tools! \nStep into the forest carefully and check the traps your sister set—there might be food waiting.",
        keys: {
            next: "n",
            nextId: "02-03",   //id of the next page
            prev: "p",
            prevId: "02-01"
        }
    },
    {
        id: "02-03",
        layout: "choice",
        bg: "bg_f2",
        options: [
            {
                key: "obj_1",          // 正常图片
                highlightKey: "hlobj_1",  // 高亮图片（透明 PNG）
                x: 400,
                y: 500,
                w: 300,
                h: 300,
                selectKey: "1"
            },
            {
                key: "obj_1",
                highlightKey: "hlobj_1",
                x: 800,
                y: 500,
                w: 300,
                h: 300,
                selectKey: "2"
            },
            {
                key: "obj_1",
                highlightKey: "hlobj_1",
                x: 1200,
                y: 500,
                w: 300,
                h: 300,
                selectKey: "3"
            }
        ],
        keys: {
            next: "n",
            nextId: "02-05",   //id of the next page
            prev: "p",
            prevId: "02-03"
        }
    },
    {
        id: "02-04",
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
        text: "Sadly, the traps are empty. \nLooks like the rabbits were smarter this time! \n\nEarly humans made traps from sticks, stones, and vines to catch small animals—but sometimes even the cleverest trap failed.\n\nWell, I guess I'll keep exploring the forest and see what new discoveries await!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "02-05",   //id of the next page
            prev: "p",
            prevId: "02-03"
        }
    },
    {
        id: "02-05",
        layout: "talk",
        bg: "bg_f1",
        character: {
            key: "homo_4",   // images 对象里的 key
            x: 450,          // x 坐标
            y: 430,          // y 坐标
            maxW: 400,       // 最大宽度
            maxH: 400,       // 最大高度
            scale: 1.2,      // 缩放
            breathe: true,    // 是否启用轻微上下浮动

        },
        text: "Move further into the woods-rabbits are hopping all around.\nBe quick! Tap the rabbit before it escapes!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "02-07",   //id of the next page
            prev: "p",
            prevId: "02-01"
        }
    },
     {
        id: "02-07",
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
        text: "You caught a rabbit! Tonight, we might have a proper meal.\n\nEarly humans relied on hunting small animals, gathering fruits, roots, and nuts-they had to be clever to find enough food each day!\n\nAlright, let's turn the page to the next chapter and continue our adventure!",
        textMode: "instant",
        keys: {
            next: "n",
            nextId: "03-01",   //id of the next page
            prev: "p",
            prevId: "02-06"
        }
    },

];

