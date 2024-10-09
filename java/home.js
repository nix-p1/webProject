<script>
    // Function to perform the search
    function performSearch() {
        var searchInput = document.getElementById("searchInput");
        var searchResults = document.getElementById("searchResults");

        // Clear previous search results
        searchResults.innerHTML = "";

        // Get the search query
        var query = searchInput.value.toLowerCase();

        // Perform the search logic (you can customize this logic based on your needs)
        if (query) {
            // Replace this with your actual search logic
            var results = searchLogic(query);

            // Display the search results
            displaySearchResults(results);
        }
    }

    // Function to simulate search logic (replace this with your actual search logic)
    function searchLogic(query) {
        var allText = document.body.textContent.toLowerCase();
        var results = [];

        // Simple search logic: find occurrences of the query in the document
        var startIndex = 0;
        while (startIndex !== -1) {
            startIndex = allText.indexOf(query, startIndex);
            if (startIndex !== -1) {
                var endIndex = startIndex + query.length;
                results.push({ startIndex, endIndex });
                startIndex = endIndex;
            }
        }

        return results;
    }

    // Function to display search results
    function displaySearchResults(results) {
        var searchResults = document.getElementById("searchResults");

        // Display each result in a span
        results.forEach(function (result) {
            var span = document.createElement("span");
            span.textContent = document.body.textContent.substring(result.startIndex, result.endIndex);
            searchResults.appendChild(span);
        });
    }

    // Function to update the date and time
    function updateDateTime() {
        var datetimeElement = document.getElementById("datetime");
        if (datetimeElement) {
            var currentDate = new Date();
            var options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short"
            };
            var formattedDate = currentDate.toLocaleDateString("en-US", options);
            datetimeElement.textContent = "Current Date and Time: " + formattedDate;
        }
    }

    // Function to initially display the date and time
    function displayDateTime() {
        var datetimeElement = document.getElementById("datetime");
        if (datetimeElement) {
            updateDateTime();
            // Update the date and time every second (you can adjust the interval as needed)
            setInterval(updateDateTime, 1000);
        }
    }

    // Call the function to display the date and time
    displayDateTime();
</script>
