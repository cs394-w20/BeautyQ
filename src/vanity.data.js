const data = {
    "1234": {
        "name": "PETER THOMAS ROTH 24K Gold Mask Pure Luxury Lift & Firm Mask",
        "product_name": "24K Gold Mask Pure Luxury Lift & Firm Mask",
        "brand_name": "Peter Thomas",
        "raw_instructions": [
            "Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face", 
            "Allow to remain on for five to ten minutes",
            "Rinse thoroughly with warm water"
        ],
        "sbs_instructions": [
            {
                "text": "Apply a very generous, non-transparent layer to clean skin, thoroughly covering entire face",
                "pause": 5000,
                "hasPause": false
            },
            {
                "text": "Allow to remain on for five to ten minutes",
                "pause": 500,
                "hasPause": true
            },
            {
                "text": "Rinse thoroughly with warm water",
                "pause": 5000,
                "hasPause": false

            }
        ],
        "image": require('../assets/images/shopping.png')
    },
    "2345": {
        "name": "Murad Essential C Cleanser",
        "product_name": "Essential C Cleanser",
        "brand_name": "Murad",
        "raw_instructions": [
            "Massage a small amount over dampened face and neck.",
            "Rinse with warm water and pat dry.",
            "Follow with a Murad Step two treatment."
        ],
        "sbs_instructions": [
            {
                "text": "Massage a small amount over dampened face and neck.",
                "pause": 1000,
                "hasPause": false
            },
            {
                "text": "Rinse with warm water and pat dry.",
                "pause": 1000,
                "hasPause": false
            },
            {
                "text": "Follow with a Murad Step two treatment.",
                "pause": 1000,
                "hasPause": false
            }
        ],
        "image": require('../assets/images/Murad.jpeg')
    }, 
    "3456": {
        "name": "Elemis Papaya Enzyme Peel",
        "product_name": "Papaya Enzyme Peel",
        "brand_name": "Elemis",
        "raw_instructions": [
            "Apply to cleansin skin avoiding delicate areas around the eyes.",
            "Leave on for 10-15 mintues.",
            "Rinse with lukewarm water to reveal a brighter complexion"
        ],
        "sbs_instructions": [
            {
                "text": "Apply to cleansin skin avoiding delicate areas around the eyes.",
                "hasPause": false
            },
            {
                "text": "Leave on for 10-15 mintues.",
                "hasPause": false
            },
            {
                "text": "Rinse with lukewarm water to reveal a brighter complexion",
                "hasPause": false
            }
        ],
        "image": require('../assets/images/Papaya.jpg'),
    }
}

export default data;