const baseURL = "http://192.168.101.93:3000";

//---------------------------------------------------------
//get data api's


const getDashboardService = async () => {

    try {
        let response = await fetch(baseURL + '/portal/dashboard', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok.');
        }

        let data = await response.json();
        return data;

    } catch (e) {

        console.log('Failed to fetch data from the API: ' + e.message);
    }
}


const allEventDetailsService = async () => {

    try {

        let response = await fetch(baseURL + '/portal/AllEvents?page_number=1', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "ngrok-skip-browser-warning": "69420"
            }
        });

        if (response.status !== 200) {
            throw new Error('Network response was not ok.');
        }

        let data = await response.json();
        console.log('data from the api : ', data)
        return data;

    } catch (e) {

        console.log('Failed to fetch data from the API: ' + e.message);
    }

}


//---------------------------------------------------------
//set data api's




//---------------------------------------------------------
//update data api's

const updateAllEventService = async (updatedEventData) => {

    console.log('inside updation service function, displayin paramnters', updatedEventData)

    try {

        const response = await fetch((baseURL + '/portal/AllEvents'), {
            method: "PUT",
            // headers: {
            //     "Content-Type": "multipart/form-data",
            // },
            body: updatedEventData
        });


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log('successfully updated data in service function, message : ', data.message)
        console.log(data)


        return data;

    } catch (error) {
        console.error('Error updating event:', error);

        throw error;
    }
};


//---------------------------------------------------------
//delete data api's 

const deleteAllEventService = async (eventId) => {

    console.log('inside delete event service function, id : ', eventId)

    try {
        const response = await fetch(`${baseURL}/portal/AllEvents?id=${eventId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data;
        try {
            data = await response.json();
        } catch (jsonError) {
            throw new Error('Error parsing JSON response: ' + jsonError.message);
        }

        console.log('Successfully deleted data in service function, message:', data.message);
        console.log(data);

        return data;
    } catch (error) {
        console.error('Error deleting event:', error);
        throw error;
    }
}


export { getDashboardService, allEventDetailsService, updateAllEventService, deleteAllEventService }
