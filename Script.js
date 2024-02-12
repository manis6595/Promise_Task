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


document.addEventListener('DOMContentLoaded', () => {
    const bibleContainer = document.getElementById('bibleContainer');

    // Function to fetch Bible data
    const fetchBibleData = () => {
        fetch('https://www.abibliadigital.com.br/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Display Bible data on the webpage
                data.forEach(book => {
                    const bookCard = document.createElement('div');
                    bookCard.classList.add('col-md-4', 'mb-4');
                    bookCard.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${book.name}</h5>
                                <p class="card-text">Chapters: ${book.chapters}</p>
                                <p class="card-text">Group: ${book.group}</p>
                            </div>
                        </div>
                    `;
                    bibleContainer.appendChild(bookCard);
                });
            })
            .catch(error => {
                console.error('Error fetching Bible data:', error);
                bibleContainer.innerHTML = '<p class="text-danger">Failed to fetch Bible data. Please try again later.</p>';
            });
    };

    // Fetch Bible data on page load
    fetchBibleData();
});
