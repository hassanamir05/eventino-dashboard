const baseURL = "https://5bff-182-177-9-150.ngrok-free.app";

const getDashboardService = async () => {

    try {

        let response = await fetch(baseURL + '/portal/dashboard', {
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
        return data;

    } catch (e) {

        console.log('Failed to fetch data from the API: ' + e.message);
    }

}

export { getDashboardService, allEventDetailsService }
