var listingsData = [
    {
        address: 'Herrengasse 10', 
        city: 'Innere Stadt', 
        state: '1010', 
        rooms: 2, 
        price: 600000, 
        floorSpace: 100, 
        extras: [
            'elevator', 
            'balcony', 
            'garage', 
            'wardrobe'
        ], 
        homeType: 'Apartment', 
        image: "https://cdn.homedit.com/wp-content/uploads/2016/10/Penthouse-apartment-in-church-staircase-and-mezzanine.jpg"

    }, 
    {
        address: 'Salavatorgasse 2', 
        city: 'Innere Stadt', 
        state: '1010', 
        rooms: 3, 
        price: 450000, 
        floorSpace: 110, 
        extras: [
            'elevator', 
            'gym', 
            'wardrobe'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Bognergasse 2', 
        city: 'Innere Stadt', 
        state: '1010', 
        rooms: 1, 
        price: 390000, 
        floorSpace: 75, 
        extras: [
            'elevator', 
            'gym', 
            'wardrobe'
        ], 
        homeType: 'Studio', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Sturggase 1', 
        city: 'Leopoldstadt', 
        state: '1020', 
        rooms: 3, 
        price: 600000, 
        floorSpace: 130, 
        extras: [
            'elevator', 
            'gym', 
            'swimming_pool'
        ], 
        homeType: 'House', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    },
    {
        address: 'Schönngasse 2', 
        city: 'Leopoldstadt', 
        state: '1020', 
        rooms: 3, 
        price: 220000, 
        floorSpace: 100, 
        extras: [
            'elevator', 
            'gym', 
            'swimming_pool'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Steingasse 3', 
        city: 'Landstraße', 
        state: '1030', 
        rooms: 3, 
        price: 220000, 
        floorSpace: 100, 
        extras: [
            'elevator', 
            'gym', 
            'swimming_pool'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Ybbstrasse 13', 
        city: 'Leopoldstadt', 
        state: '1020', 
        rooms: 1, 
        price: 100000, 
        floorSpace: 35, 
        extras: [
            'elevator', 
            'gym', 
            'swimming_pool'
        ], 
        homeType: 'Studio', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Baumgasse 55', 
        city: 'Landstrasse', 
        state: '1030', 
        rooms: 2, 
        price: 130000, 
        floorSpace: 55, 
        extras: [
            'elevator', 
        ], 
        homeType: 'Studio', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Mohsgasse 120', 
        city: 'Wieden', 
        state: '1040', 
        rooms: 5, 
        price: 800000, 
        floorSpace: 180, 
        extras: [
            'elevator', 
            'balcony', 
            'swimming_pool', 
            'garage'
        ], 
        homeType: 'House', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Rennweg 320', 
        city: 'Wieden', 
        state: '1040', 
        rooms: 2, 
        price: 560000, 
        floorSpace: 140, 
        extras: [
            'elevator', 
            'balcony'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Spengergasse 33', 
        city: 'Margareten', 
        state: '1050', 
        rooms: 3, 
        price: 310000, 
        floorSpace: 95, 
        extras: [
            'elevator', 
            'balcony'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    },     {
        address: 'Spengergasse 1', 
        city: 'Margareten', 
        state: '1050', 
        rooms: 1, 
        price: 65000, 
        floorSpace: 25, 
        extras: [
            'elevator'
        ], 
        homeType: 'Studio', 
        image: "https://media1.popsugar-assets.com/files/thumbor/2Be9idnvLqLcjgnTvwb0ZbFaUlk/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/01/29/795/n/1922794/6d205cdd4f08d0b9_thumb_temp_image318133621385492441/i/Studio-Apartment-Ideas.jpg"
    }, 
    {
        address: 'Burggasse 100', 
        city: 'Mariahilf', 
        state: '1060', 
        rooms: 3, 
        price: 175000, 
        floorSpace: 75, 
        extras: [
            'elevator', 
            'gym', 
            'swimming_pool', 
            'balcony'
        ], 
        homeType: 'Apartment', 
        image: "https://images1.apartments.com/i2/Uh7pU-5z2gxB-ly2VsPGuVp5gDOYIpjjuekeZ9CA09Y/117/cielo-apartments-charlotte-nc-saltwater-pool-and-courtyard.jpg"
    }, 
    {
        address: 'Zieglergasse 25', 
        city: 'Mariahilf', 
        state: '1060', 
        rooms: 2, 
        price: 115000, 
        floorSpace: 60, 
        extras: [
            'elevator', 
            'balcony'
        ], 
        homeType: 'Studio',
        image: "https://images1.apartments.com/i2/I4gHvfqJgZT3Qip5gapEjci3kYKXeK6NZjI-6GRoweM/117/plaza-apartments-fresno-ca-building-photo.jpg"
    }, 
    {
        address: 'Neubaugasse 60', 
        city: 'Neubau', 
        state: '1070', 
        rooms: 3, 
        price: 180000, 
        floorSpace: 105, 
        extras: [
            'elevator', 
            'balcony', 
            'garage'
        ], 
        homeType: 'Apartment', 
        image: "https://s1.cdn.autoevolution.com/images/news/luxury-skyscraper-allows-residents-to-park-their-car-inside-the-apartment-video-90379-7.jpg"
    },
    {
        address: 'Pfeilgasse 81', 
        city: 'Josefstadt', 
        state: '1080', 
        rooms: 2, 
        price: 115000, 
        floorSpace: 60, 
        extras: [ 
            'balcony', 
            'wardrobe'
        ], 
        homeType: 'Studio', 
        image: "https://www.lavonndacardwell-realtor.com/wp-content/uploads/2017/08/download.jpg"
    },

    {
        address: '1 Elm Street', 
        city: 'Penzing', 
        state: '1140', 
        rooms: 3, 
        price: 450000, 
        floorSpace: 160, 
        extras: [
            'garage', 
            'balcony', 
            'wardrobe', 
            'elevator'
        ], 
        homeType: 'Apartment', 
        image: "https://www.adinahotels.com/wp-content/uploads/sites/4/2016/07/adina-melbourne-flinders-street-apartment-hotel-one-and-two-bedroom-apartment-2-2013.jpg"
    },
    {
        address: 'Kranzgasse 777', 
        city: 'Rudolfsheim-Fünfhaus', 
        state: '1150', 
        rooms: 4, 
        price: 710000, 
        floorSpace: 240, 
        extras: [
            'garage', 
            'elevator', 
            'balcony', 
            'wardrobe'
        ], 
        homeType: 'Apartment', 
        image: "https://ar.rdcpix.com/1687012685/834df9c0032f996cc91c3fac0c7201f0c-f0xd-w480_h480_q80.jpg"
    },
    {
        address: 'Ameisgasse 11', 
        city: 'Penzing', 
        state: '1140', 
        rooms: 2, 
        price: 400000, 
        floorSpace: 140, 
        extras: [
            'garage', 
            'elevator'
        ], 
        homeType: 'Apartment', 
        image: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/6652423/mast-des-bg-800.jpg"
    },
    {
        address: 'Thaliastrasse 1', 
        city: 'Ottakring', 
        state: '1160', 
        rooms: 2, 
        price: 95000, 
        floorSpace: 60, 
        extras: [
            'elevator', 
        ], 
        homeType: 'Studio', 
        image: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/6652423/mast-des-bg-800.jpg"
    },
    {
        address: 'Attemsgasse 60', 
        city: 'Donaustadt', 
        state: '1220', 
        rooms: 1, 
        price: 600000, 
        floorSpace: 150, 
        extras: [
            'elevator', 
            'gym', 
            'balcony', 
            'garage'
        ], 
        homeType: 'Studio', 
        image: "https://i.pinimg.com/736x/57/40/88/57408851e892fa08ff9c78e7243c43ef--facade-design-exterior-design.jpg"
    }, 
    {
        address: 'Andergasse 37', 
        city: 'Hernals', 
        state: '1170', 
        rooms: 3, 
        price: 350000, 
        floorSpace: 150, 
        extras: [
            'elevator', 
            'balcony', 
            'garage'
        ], 
        homeType: 'House', 
        image: "https://i.pinimg.com/736x/57/40/88/57408851e892fa08ff9c78e7243c43ef--facade-design-exterior-design.jpg"
    },
    {
        address: 'Simpsonstrasse 5', 
        city: 'Währing', 
        state: '1180', 
        rooms: 3, 
        price: 600000, 
        floorSpace: 140, 
        extras: [
            'elevator', 
            'wardrobe', 
            'balcony', 
            'garage'
        ], 
        homeType: 'Studio', 
        image: "https://i.pinimg.com/736x/57/40/88/57408851e892fa08ff9c78e7243c43ef--facade-design-exterior-design.jpg"
    },
    {
        address: 'Garfieldgasse 27', 
        city: 'Döbling', 
        state: '1190', 
        rooms: 1, 
        price: 80000, 
        floorSpace: 45, 
        extras: [
            'elevator', 
            'gym', 
            'balcony'
        ], 
        homeType: 'Studio', 
        image: "https://media1.popsugar-assets.com/files/thumbor/2Be9idnvLqLcjgnTvwb0ZbFaUlk/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/01/29/795/n/1922794/6d205cdd4f08d0b9_thumb_temp_image318133621385492441/i/Studio-Apartment-Ideas.jpg"
    },
    {
        address: 'Garfieldgasse 27', 
        city: 'Floridsdorf', 
        state: '1210', 
        rooms: 5, 
        price: 710000, 
        floorSpace: 210, 
        extras: [
            'elevator', 
            'gym', 
            'balcony'
        ], 
        homeType: 'House', 
        image: "https://images1.apartments.com/i2/I4gHvfqJgZT3Qip5gapEjci3kYKXeK6NZjI-6GRoweM/117/plaza-apartments-fresno-ca-building-photo.jpg"
    }
]

export default listingsData;