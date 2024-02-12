document.addEventListener('DOMContentLoaded', () => {
    const statsContainer = document.getElementById('statsContainer');

    // Function to fetch COVID-19 statistics for India
    const fetchCovidStats = () => {
        fetch('https://data.covid19india.org/v4/min/data.min.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Extracting data for India
                const indiaData = data['TN'];

                // Displaying statistics for India
                const statsHTML = `
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">COVID-19 Statistics - India</h2>
                                <p class="card-text">Total Cases: ${indiaData.total.confirmed}</p>
                                <p class="card-text">Total Deaths: ${indiaData.total.deceased}</p>
                                <p class="card-text">Total Recovered: ${indiaData.total.recovered}</p>
                            </div>
                        </div>
                    </div>
                `;
                statsContainer.innerHTML = statsHTML;
            })
            .catch(error => {
                console.error('Error fetching COVID-19 statistics for India:', error);
                statsContainer.innerHTML = '<p class="text-danger">Failed to fetch COVID-19 statistics for India. Please try again later.</p>';
            });
    };

    // Fetch COVID-19 statistics for India on page load
    fetchCovidStats();
});

