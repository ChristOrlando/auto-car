
export const urls = [
    {
        id: 1,
        title: "nav.home",
        path: "/",
    },
    {
        id: 2,
        title: "nav.product",
        path: "/#product",
    },
    {
        id: 3,
        title: "nav.about",
        path: "/about",
    },
    {
        id: 4,
        title: "nav.target",
        path: "/#target",
    },
    {
        id: 5,
        title: "nav.contact",
        path: "/contact",
    },
];



export const productType = [
    {
        id: 1,
        title: "home.product.cards.card-1.title",
        content: [
            "home.product.cards.card-1.item-1",
            "home.product.cards.card-1.item-2",
            "home.product.cards.card-1.item-3",
        ],
    },
    {
        id: 2,
        title: "home.product.cards.card-1.title",
        content: [
            "home.product.cards.card-2.item-1",
            "home.product.cards.card-2.item-2",
        ],
    },
];

export const products = [
    {
        id: 1,
        img: "/product-1.png",
        title: "home.product.product-cards.product-card-1.title",
        subtitle: "home.product.product-cards.product-card-1.technic.title",
        first: {
            title: "home.product.product-cards.product-card-1.technic.small-dimension.title",
            width: "home.product.product-cards.product-card-1.technic.small-dimension.width.value",
            length: "home.product.product-cards.product-card-1.technic.small-dimension.lenght.value",
            state: true
        },
        second: {
            title: "home.product.product-cards.product-card-1.technic.large-dimension.title",
            state: false
        },
        third: {
            title: "home.product.product-cards.product-card-1.technic.qualite.title",
            value: "home.product.product-cards.product-card-1.technic.qualite.value"
        },
        fourth: {
            title: "home.product.product-cards.product-card-1.technic.attachment.title",
            state: false,
        },
        fifth: {
            title: "home.product.product-cards.product-card-1.technic.life-cicle.title",
            value: "home.product.product-cards.product-card-1.technic.life-cicle.value"
        },
        sixth: {
            title: "home.product.product-cards.product-card-1.advantage.title",
            content: [
                "home.product.product-cards.product-card-1.advantage.items.item-1",
                "home.product.product-cards.product-card-1.advantage.items.item-2"
            ]
        }
    },
    {
        id: 2,
        img: "/product-2.png",
        title: "home.product.product-cards.product-card-2.title",
        subtitle: "home.product.product-cards.product-card-2.technic.title",
        first: {
            title: "home.product.product-cards.product-card-2.technic.small-dimension.title",
            width: "home.product.product-cards.product-card-2.technic.small-dimension.width.value",
            length: "home.product.product-cards.product-card-2.technic.small-dimension.lenght.value",
            state: true
        },
        second: {
            title: "home.product.product-cards.product-card-2.technic.large-dimension.title",
            state: false
        },
        third: {
            title: "home.product.product-cards.product-card-2.technic.qualite.title",
            value: "home.product.product-cards.product-card-2.technic.qualite.value"
        },
        fourth: {
            title: "home.product.product-cards.product-card-2.technic.attachment.title",
            state: false,
        },
        fifth: {
            title: "home.product.product-cards.product-card-2.technic.life-cicle.title",
            value: "home.product.product-cards.product-card-2.technic.life-cicle.value"
        },
        sixth: {
            title: "home.product.product-cards.product-card-2.advantage.title",
            content: [
                "home.product.product-cards.product-card-2.advantage.items.item-1",
                "home.product.product-cards.product-card-2.advantage.items.item-2"
            ]
        }
    },

]

export type ProductType = {
    id: number;
    img: string;
    title: string;
    subtitle: string;
    first: {
        title: string;
        width: string;
        length: string;
        state: boolean;
    };
    second: {
        title: string;
        state: boolean;
    };
    third: {
        title: string;
        value: string;
    };
    fourth: {
        title: string;
        state: boolean;
    };
    fifth: {
        title: string;
        value: string;
    };
    sixth: {
        title: string;
        content: string[];
    };
};

export const personalVehicle = [
    {
        id: 1,
        title: "home.target.tabs.tab-1.items.item-1",
        img: "/target-1.png",
    },
    {
        id: 2,
        title: "home.target.tabs.tab-1.items.item-2",
        img: "/target-2.png",
    },
    {
        id: 3,
        title: "home.target.tabs.tab-1.items.item-3",
        img: "/target-1.png",
    },
    {
        id: 4,
        title: "home.target.tabs.tab-1.items.item-4",
        img: "/target-1.png",
    },
    {
        id: 5,
        title: "home.target.tabs.tab-1.items.item-5",
        img: "/target-2.png",
    },
];

export const transportVehicle = [
    {
        id: 1,
        title: "home.target.tabs.tab-2.items.item-1",
        img: "/target-1.png",
    },
    {
        id: 2,
        title: "home.target.tabs.tab-2.items.item-2",
        img: "/target-2.png",
    },
    {
        id: 3,
        title: "home.target.tabs.tab-2.items.item-3",
        img: "/target-1.png",
    },
    {
        id: 4,
        title: "home.target.tabs.tab-2.items.item-4",
        img: "/target-1.png",
    },
    {
        id: 5,
        title: "home.target.tabs.tab-2.items.item-5",
        img: "/target-2.png",
    },
    {
        id: 6,
        title: "home.target.tabs.tab-2.items.item-6",
        img: "/target-2.png",
    },
    {
        id: 7,
        title: "home.target.tabs.tab-2.items.item-7",
        img: "/target-2.png",
    },
    {
        id: 8,
        title: "home.target.tabs.tab-2.items.item-8",
        img: "/target-2.png",
    },
    {
        id: 9,
        title: "home.target.tabs.tab-2.items.item-9",
        img: "/target-2.png",
    },
];

export const otherVehicle = [
    {
        id: 1,
        title: "home.target.tabs.tab-3.items.item-1",
        img: "/target-1.png",
    },
    {
        id: 2,
        title: "home.target.tabs.tab-3.items.item-2",
        img: "/target-2.png",
    },
    {
        id: 3,
        title: "home.target.tabs.tab-3.items.item-3",
        img: "/target-1.png",
    },
    {
        id: 4,
        title: "home.target.tabs.tab-3.items.item-4",
        img: "/target-1.png",
    },
    {
        id: 5,
        title: "home.target.tabs.tab-3.items.item-5",
        img: "/target-2.png",
    },
    {
        id: 6,
        title: "home.target.tabs.tab-3.items.item-6",
        img: "/target-2.png",
    },
    {
        id: 7,
        title: "home.target.tabs.tab-3.items.item-7",
        img: "/target-2.png",
    },
];




