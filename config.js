var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibnVlbDEiLCJhIjoiY2xwZnloaGNhMG9uNjJqcGI1dW1yc2M4MyJ9.3hK7G5FYYwLBWNGOYCx1gw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Lebtech Construction',
    subtitle: 'Road construction is the art of connectivity, linking communities and fostering progress...',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Lebtech',
            image: 'src/images/road1.png',
            // image: 'src/images/road2.png',
            description: 'Welcome to Lebtech',
            location: {
                center: [6.98634, 6.26218],
                zoom: 8.72,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/about-4.jpg', 
            description: 'Construction of Okpanam Ibuzu Road, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Delta State',
            image: 'src/images/asaba-1.png',
            description: 'Construction of Joseph Ebolo Road at Asaba, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Delta State',
            image: 'src/images/Ebolo-Road.png',
            // image: 'src/images/road2.png',
            description: 'Construction of Joseph Ebolo Road at Asaba, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Anambra',
            image: 'src/images/Umunya Road.png',
            // image: 'src/images/road2.png',
            description: 'Construction of Awkuzu – Umunya Road (6.614km) in Oyi LGA, Anambra State (On-going)',
            location: {
                center: [6.98634, 6.26218],
                zoom: 8.72,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Okpanam.png', 
            description: 'Drainage / Storm Water Control Works at Okpanam, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Okotomi.png', 
            description: 'Construction of Road at Okotomi, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Okotomi-1.png', 
            description: 'Construction of Road at Okotomi, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Okotomi-2.png', 
            description: 'Construction of Road at Okotomi, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Ebolo-1.png', 
            description: 'Construction of Joseph Ebolo Road in Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Obiaruku Bridge.png', 
            description: 'Construction of Joseph Ebolo Road in Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'first-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Edo',
            image: 'src/images/Okpe.png', 
            description: '4 cells box culvert 4m x 4m at Okpe, Edo State',
            location: {
                center: [5.62141, 6.38299],
                zoom: 7.94,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Delta State',
            image: 'src/images/Ogwashi.png', 
            description: 'Construction of Road at Ogwashi Uku, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Delta State',
            image: 'src/images/Ogwashi-1.png', 
            description: 'Construction of Road at Ogwashi Uku, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Ogwashi-2.png', 
            description: 'Construction of Road at Ogwashi Uku, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Asaba',
            image: 'src/images/Ogwashi-3.png', 
            description: 'Construction of Agidiehi Road at Ogwashi Uku, Delta State',
            location: {
                center: [6.71742, 6.19109],
                zoom: 10.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Abuja',
            image: 'src/images/road3.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [7.48562, 9.06957],
                zoom: 9.33,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Nigeria',
            image: 'storytelling-main/path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [8.13843, 9.96311],
                zoom: 4.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
