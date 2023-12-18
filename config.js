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
    byline: 'By Melhem',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Lebtech',
            image: 'src/images/road1.png',
            // image: 'src/images/road2.png',
            description: '.',
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Anambra',
            image: 'src/images/road2.png',
            // image: 'src/images/road2.png',
            description: 'Construction of Joseph Ebolo Road at Asaba, Delta State.',
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Asaba',
            image: 'scr/images/about-4.png', 
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
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Nigeria',
            image: 'storytelling-main/path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [9.20219, 15.50489],
                zoom: 3.97,
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
