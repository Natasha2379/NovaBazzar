import React from "react";
import "./Location.scss";
import Navbar from "../../components/Navbar/Navbar";
// export default Location;
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const Location = (props) => {


    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        // clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        // clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        props.setUserLocation(description.split(",")[0], false);
        localStorage.setItem("location", description.split(",")[0]);

        // clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
            const { lat, lng } = getLatLng(results[0]);
            console.log("📍 Coordinates: ", { lat, lng });
        });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <div
                    key={place_id}
                    onClick={() => {
                        handleSelect(suggestion);
                    }}
                    style={{
                        padding: "0.5rem",
                        margin: "0.5rem",
                        backgroundColor: "grey",
                        cursor: "pointer",
                    }}
                >
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </div>
            );
        });

    return (
        <div className="mylocation">
            <Navbar userLocation={props.userLocation} />
            <div className="locationsArea">
                <div className="location-input flex align-center">
                    <span>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <div ref={ref}>
                        <input
                            value={value}
                            onChange={handleInput}
                            disabled={!ready}
                            placeholder="Where are you going?"
                        />
                        {/* We can use the "status" to decide whether we should display the dropdown or not */}
                    </div>
                </div>
                {/* if input area is not empty show this type of results */}
                <div className="search-results flex column ">
                    <h4>Searche Results</h4>
                    {status === "OK" && (
                        <div className="location">
                            <span>{renderSuggestions()}</span>
                        </div>
                    )}
                </div>
                {/* if input area is empty show recent this */}
                {/* <div className="recent-searches  ">
                    <h4>Recent Searches</h4>
                    <div className="recent-choose flex">
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Goslan</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Kaira</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Dirhama</span>
                        </span>
                        <span className="recents">
                            <span>
                                <i className="fa-regular fa-clock"></i>
                            </span>
                            <span>Ambil</span>
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Location;
