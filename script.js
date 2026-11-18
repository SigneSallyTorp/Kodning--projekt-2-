const menuKnap = document.querySelector(".menu-knap");
const navigation = document.querySelector(".navigation");

menuKnap.addEventListener("click", function() {
    navigation.classList.toggle("aktiv");

    const menuErAaben = navigation.classList.contains("aktiv");

    menuKnap.setAttribute("aria-expanded", menuErAaben);
});

// Skift mellem boksene i "Vores hjælp"

{
    const bokse = document.querySelectorAll(".vores-hjælp-boks");
    const forrigePil = document.querySelector(".forrige");
    const næstePil = document.querySelector(".næste");

    if (bokse.length && forrigePil && næstePil) {

        let aktivBoks = 0;

        function visBoks() {
            bokse.forEach((boks, index) => {
                boks.classList.toggle("aktiv", index === aktivBoks);
            });
        }

        næstePil.addEventListener("click", () => {
            aktivBoks = (aktivBoks + 1) % bokse.length;
            visBoks();
        });

        forrigePil.addEventListener("click", () => {
            aktivBoks = (aktivBoks - 1 + bokse.length) % bokse.length;
            visBoks();
        });

        visBoks();
    }
}

// Slider til "Vores hjælp"

const bokse = document.querySelectorAll(".vores-hjælp-boks");
const forrigePil = document.querySelector(".forrige");
const næstePil = document.querySelector(".næste");

if (bokse.length && forrigePil && næstePil) {

    let aktivBoks = 0;

    function visBoks() {
        bokse.forEach((boks, index) => {
            boks.classList.toggle("aktiv", index === aktivBoks);
        });
    }

    næstePil.addEventListener("click", () => {
        aktivBoks = (aktivBoks + 1) % bokse.length;
        visBoks();
    });

    forrigePil.addEventListener("click", () => {
        aktivBoks = (aktivBoks - 1 + bokse.length) % bokse.length;
        visBoks();
    });

    visBoks();
}