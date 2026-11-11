
// Search Scholarships
function searchScholarships() {

    let input = document.getElementById("searchInput")
        .value.toLowerCase();

    let category = document.getElementById("category").value;

    let cards = document.querySelectorAll(".card");

    let count = 0;

    cards.forEach(function(card) {

        let title = card.querySelector("h3")
            .innerText.toLowerCase();

        let cardCategory = card.dataset.category;

        let nameMatch = title.includes(input);

        let categoryMatch =
            category === "all" || cardCategory === category;

        if (nameMatch && categoryMatch) {
            card.style.display = "block";
            count++;
        } else {
            card.style.display = "none";
        }

    });

    document.getElementById("noResults").style.display =
        count === 0 ? "block" : "none";
}


// Apply for Scholarship
function apply(scholarshipName) {

    document.getElementById("selectedScholarship").value =
        scholarshipName;

    document.getElementById("apply").scrollIntoView({
        behavior: "smooth"
    });

}


// Student Application Form
document.getElementById("applicationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;

        let email = document.getElementById("email").value;

        let course = document.getElementById("course").value;

        let scholarship =
            document.getElementById("selectedScholarship").value;

        if (name && email && course && scholarship) {

            document.getElementById("message").innerHTML =
                "Thank you, " + name +
                "! Your application for " + scholarship +
                " has been submitted successfully.";

            this.reset();

        }

    });
