let map;
let placesService;
let markers = [];

function initMap() {
    const mapOptions = {
        zoom: 12,
        center: { lat: -23.5505, lng: -46.6333 }, 
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    placesService = new google.maps.places.PlacesService(map);

    map.addListener('click', (event) => {
        const latLng = event.latLng;
        showAddPlaceModal(latLng);
    });

    loadAdaptedPlaces();
}

function loadAdaptedPlaces() {
    const placesRef = firestore.collection('locais-adaptados');
    placesRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const placeData = doc.data();
            addPlaceMarker(placeData);
        });
    });
}

function addPlaceMarker(placeData) {
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(placeData.location.latitude, placeData.location.longitude),
        map: map,
        title: placeData.name,
    });

    marker.addListener('click', () => {
        showPlaceDetails(placeData);
    });

    markers.push(marker);
}

function showPlaceDetails(placeData) {
    // Implementar a lógica para exibir os detalhes do local selecionado
    console.log('Detalhes do local:', placeData);
}

function showAddPlaceModal(latLng) {
    // Implementar a lógica para exibir o modal de adicionar um novo local adaptado
    console.log('Adicionar novo local em:', latLng.lat(), latLng.lng());
}

// Manipulador de eventos para o campo de pesquisa
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.trim();
    if (searchQuery.length > 0) {
        performSearch(searchQuery);
    } else {
        clearSearch();
    }
});

function performSearch(query) {
    const request = {
        query: query,
        fields: ['name', 'geometry', 'formatted_address'],
    };

    placesService.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            clearSearch();
            results.forEach((place) => {
                showSearchResult(place);
            });
        }
    });
}

function showSearchResult(place) {
    const placesList = document.getElementById('places-list');
    const listItem = document.createElement('div');
    listItem.textContent = place.name;
    placesList.appendChild(listItem);
}

function clearSearch() {
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = '';
}

// Manipulador de eventos para o botão "Adicionar Local"
const addPlaceBtn = document.getElementById('add-place-btn');
addPlaceBtn.addEventListener('click', () => {
    const latLng = map.getCenter();
    showAddPlaceModal(latLng);
});

// Chamada para inicializar o mapa
initMap();