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
            // {
            //     "text": "I will set a five minute timer for you",
            //     "pause": 10000,
            // },
            // {
            //     "text": "beep beep beep beep, your five minutes are up",
            //     "pause": 500,
            // },
            {
                "text": "Rinse thoroughly with warm water",
                "pause": 5000,
                "hasPause": false

            }
        ],
        "image": require('../assets/images/shopping.png')
    }
}

export default data;