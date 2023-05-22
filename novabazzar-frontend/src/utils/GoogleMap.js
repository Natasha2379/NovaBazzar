import { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import PropTypes from "prop-types";

/*global google*/

function MapContainer(props) {
    const [mapCenter, setMapCenter] = useState({
        lat: 28.7041,
        lng: 77.1025,
    });

    useEffect(() => {
        const address = `${props.state}, ${props.city}, ${props.location}`;
        geocodeByAddress(address)
            .then((results) => getLatLng(results[0]))
            .then((latLng) => {
                // console.log("Success", latLng);
                setMapCenter(latLng);
            })
            .catch((error) => console.error("Error", error));
    }, [props.city, props.state, props.location]);

    return (
        <div id="googleMaps">
            <Map
                // disableDefaultUI={true}
                zoom={17}
                google={props.google}
                style={{
                    width: "100%",
                    height: "100%",
                }}
                initialCenter={{
                    lat: 28.7041,
                    lng: 77.1025,
                }}
                center={{
                    lat: mapCenter.lat,
                    lng: mapCenter.lng,
                }}
            >
                <Marker
                    icon={{
                        path: google?.maps?.SymbolPath?.CIRCLE,
                        fillColor: "red",
                        fillOpacity: 0.2,
                        scale: 20,
                        strokeColor: "white",
                        strokeWeight: 0.5,
                    }}
                    position={{
                        lat: mapCenter.lat,
                        lng: mapCenter.lng,
                    }}
                />
            </Map>
        </div>
    );
}

MapContainer.propTypes = {
    state: PropTypes.string,
    city: PropTypes.string,
    location: PropTypes.string,
    google: PropTypes.object,
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyAEh9eMLYsV66D6yRHTowuZ7Rgh6aQ9Alo",
})(MapContainer);
