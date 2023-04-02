import React from "react";
import f3 from "family-chart";  // npm i family-chart
import './familyChart.scss';

export default class FamilyTree extends React.Component {
    cont = React.createRef();

    componentDidMount() {
        if (!this.cont.current) return;

        const store = f3.createStore({
            data: data(),
            node_separation: 250,
            level_separation: 150
        }),
            view = f3.d3AnimationView({
                store,
                cont: document.querySelector("#FamilyChart")
            }),
            Card = f3.elements.Card({
                store,
                svg: view.svg,
                card_dim: { w: 220, h: 70, text_x: 75, text_y: 15, img_w: 60, img_h: 60, img_x: 5, img_y: 5 },
                card_display: [d => `${d.data['first name'] || ''}`, d => `${d.data['last name'] || ''}`, d => `${d.data['birthday'] || ''}`],
                mini_tree: true,
                link_break: false
            })

        view.setCard(Card)
        store.setOnUpdate(props => view.update(props || {}))
        store.update.tree({ initial: true })

        function data() {
            return [
                {
                    "id": "0",
                    "rels": {
                        "father": "542a18c1-ff8d-4cfa-bbd2-969eca172f85",
                        "mother": "2c0e17ce-3132-40fd-b11b-303228054cab",
                        "spouses": [
                            "bc7393c3-165f-4989-80b5-cb32e33f6b3f"
                        ]
                    },
                    "data": {
                        "first name": "Zunaid",
                        "last name": "Alam",
                        "birthday": "1996",
                        "avatar": "https://github.com/ZunaidRehan/portfolio/raw/master/src/images/zunaid.png",
                        "gender": "M"
                    }
                },
                {
                    "id": "542a18c1-ff8d-4cfa-bbd2-969eca172f85",
                    "data": {
                        "gender": "M",
                        "first name": "Shakir ",
                        "last name": "Hussain",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "children": [
                            "0",
                            "d6ea99f1-92ad-4ab6-91e9-cd710ece9551",
                            "714fc381-b04f-4ea9-ab50-c5f1020e6df1"
                        ],
                        "spouses": [
                            "2c0e17ce-3132-40fd-b11b-303228054cab"
                        ],
                        "father": "a597890b-c671-4a44-b839-8c4701a9b97b",
                        "mother": "1ed6ad29-9eaf-4e59-ad14-74f4ab6e1941"
                    }
                },
                {
                    "id": "2c0e17ce-3132-40fd-b11b-303228054cab",
                    "data": {
                        "gender": "F",
                        "first name": "Hedaitun ",
                        "last name": "Khatoon",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "542a18c1-ff8d-4cfa-bbd2-969eca172f85"
                        ],
                        "children": [
                            "0",
                            "d6ea99f1-92ad-4ab6-91e9-cd710ece9551",
                            "714fc381-b04f-4ea9-ab50-c5f1020e6df1"
                        ],
                        "father": "d634c94f-05d4-4cdd-b3b4-6033f415dc8e",
                        "mother": "1eb82eec-b55b-4c65-a8fa-a9807996b5a9"
                    }
                },
                {
                    "id": "a597890b-c671-4a44-b839-8c4701a9b97b",
                    "data": {
                        "gender": "M",
                        "first name": "Muhammad",
                        "last name": "Mustaqueem Ansari",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "children": [
                            "542a18c1-ff8d-4cfa-bbd2-969eca172f85"
                        ],
                        "spouses": [
                            "1ed6ad29-9eaf-4e59-ad14-74f4ab6e1941"
                        ]
                    }
                },
                {
                    "id": "1ed6ad29-9eaf-4e59-ad14-74f4ab6e1941",
                    "data": {
                        "gender": "F",
                        "first name": "Asgari",
                        "last name": "Khatoon",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "a597890b-c671-4a44-b839-8c4701a9b97b"
                        ],
                        "children": [
                            "542a18c1-ff8d-4cfa-bbd2-969eca172f85"
                        ]
                    }
                },
                {
                    "id": "d634c94f-05d4-4cdd-b3b4-6033f415dc8e",
                    "data": {
                        "gender": "M",
                        "first name": "Muhammad ",
                        "last name": "Hanif Ansari",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "children": [
                            "2c0e17ce-3132-40fd-b11b-303228054cab"
                        ],
                        "spouses": [
                            "1eb82eec-b55b-4c65-a8fa-a9807996b5a9"
                        ]
                    }
                },
                {
                    "id": "1eb82eec-b55b-4c65-a8fa-a9807996b5a9",
                    "data": {
                        "gender": "F",
                        "first name": "Gul Bano",
                        "last name": "Khatoon",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "d634c94f-05d4-4cdd-b3b4-6033f415dc8e"
                        ],
                        "children": [
                            "2c0e17ce-3132-40fd-b11b-303228054cab"
                        ]
                    }
                },
                {
                    "id": "d6ea99f1-92ad-4ab6-91e9-cd710ece9551",
                    "data": {
                        "gender": "M",
                        "first name": "Salim ",
                        "last name": "Ansari",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "mother": "2c0e17ce-3132-40fd-b11b-303228054cab",
                        "father": "542a18c1-ff8d-4cfa-bbd2-969eca172f85",
                        "spouses": [
                            "15066aa6-91de-425a-94ea-96d8815be3ae"
                        ]
                    }
                },
                {
                    "id": "714fc381-b04f-4ea9-ab50-c5f1020e6df1",
                    "data": {
                        "gender": "F",
                        "first name": "Tarannum ",
                        "last name": "Naaz",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "mother": "2c0e17ce-3132-40fd-b11b-303228054cab",
                        "father": "542a18c1-ff8d-4cfa-bbd2-969eca172f85",
                        "spouses": [
                            "e2e29594-02b7-4374-a3e0-a9ac70103f68"
                        ],
                        "children": [
                            "89468be9-98c3-44ea-9513-690c6f4f3b91",
                            "18d325dd-498d-4b14-bd5d-9dfb0d6fece4"
                        ]
                    }
                },
                {
                    "id": "15066aa6-91de-425a-94ea-96d8815be3ae",
                    "data": {
                        "gender": "F",
                        "first name": "Sadia",
                        "last name": "Zaki",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "d6ea99f1-92ad-4ab6-91e9-cd710ece9551"
                        ]
                    }
                },
                {
                    "id": "e2e29594-02b7-4374-a3e0-a9ac70103f68",
                    "data": {
                        "gender": "M",
                        "first name": "Iftikhal",
                        "last name": "Alam",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "714fc381-b04f-4ea9-ab50-c5f1020e6df1"
                        ],
                        "children": [
                            "89468be9-98c3-44ea-9513-690c6f4f3b91",
                            "18d325dd-498d-4b14-bd5d-9dfb0d6fece4"
                        ]
                    }
                },
                {
                    "id": "89468be9-98c3-44ea-9513-690c6f4f3b91",
                    "data": {
                        "gender": "M",
                        "first name": "Faheem",
                        "last name": "Ahmad",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "father": "e2e29594-02b7-4374-a3e0-a9ac70103f68",
                        "mother": "714fc381-b04f-4ea9-ab50-c5f1020e6df1"
                    }
                },
                {
                    "id": "18d325dd-498d-4b14-bd5d-9dfb0d6fece4",
                    "data": {
                        "gender": "F",
                        "first name": "Inaya",
                        "last name": "Parween",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "father": "e2e29594-02b7-4374-a3e0-a9ac70103f68",
                        "mother": "714fc381-b04f-4ea9-ab50-c5f1020e6df1"
                    }
                },
                {
                    "id": "bc7393c3-165f-4989-80b5-cb32e33f6b3f",
                    "data": {
                        "gender": "F",
                        "first name": "?",
                        "last name": "",
                        "birthday": "",
                        "avatar": ""
                    },
                    "rels": {
                        "spouses": [
                            "0"
                        ]
                    }
                }
            ]
        }

    }

    render() {
        return <>
            <div className="container">
                <div className='contentWrap'>
                    <h2 className='header lovable'>Family</h2>
                    <div className="f3" id="FamilyChart" ref={this.cont}></div>
                </div>
            </div>
        </>
    }
}