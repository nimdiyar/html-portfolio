document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const stepForms = document.querySelectorAll('.form_steps form');
    let currentStep = 0;

    startButton.addEventListener("click", function() {
        currentStep = 0;
        for (let i = 0; i < stepForms.length; i++) {
            if (i === 0) {
                stepForms[i].parentNode.classList.add('active');
            } else {
                stepForms[i].parentNode.classList.remove('active');
            }
        }
    });
//switch case for make sure to every input field was filled by user befor hit thhe next buttton
    function showNextStep(stepNumber) {
        let inputField;
        switch (stepNumber) {
            case 1:
                inputField = document.getElementById("nameInput");
                break;
            case 2:
                inputField = document.getElementById("surnameInput");
                break;
            case 3:
                inputField = document.getElementById("ageInput");
                break;
            case 4:
                inputField = document.querySelector('input[name="Gender"]:checked');
                break;
            case 5:
                inputField = document.getElementById("RationalInput");
                break;
            case 6:
                inputField = document.getElementById("DoAInput");
                break;
            case 7:
                inputField = document.getElementById("TaskInput");
                break;
            case 8:
                inputField = document.getElementById("placeInput");
                break;
            case 9:
                inputField = document.getElementById("AssignmentInput");
                break;
            case 10:
                inputField = document.getElementById("studyInput");
                break;
            case 11:
                inputField = document.getElementById("degreeInput");
                break;
            case 12:
                inputField = document.getElementById("universityInput");
                break;
            case 13:
                inputField = document.getElementById("yearInput");
                break;
            case 14:
                inputField = document.getElementById("countyInput");
                break;
            case 15:
                inputField = document.getElementById("hoursInput");
                break;
            case 16:
                inputField = document.getElementById("surnameInput");
                break;
            case 17:
                inputField = document.getElementById("telInput");
                break;
            case 18:
                inputField = document.getElementById("emailInput");
                break;
            default:
                inputField = null;
        }

        if (inputField && inputField.value.trim() !== "") {
            stepForms[currentStep].parentNode.classList.remove('active');
            currentStep++;
            if (currentStep < stepForms.length) {
                stepForms[currentStep].parentNode.classList.add('active');
            } else {
                // display output-box and progress-container at the end
                showLastDiv();
            }
        } else {
            alert("Please fill in all required fields.");
        }
    }

    function skipStep() {
        stepForms[currentStep].parentNode.classList.remove('active');
        currentStep++;
        if (currentStep < stepForms.length) {
            stepForms[currentStep].parentNode.classList.add('active');
        } else {
            // display output-box and progress-container at the end
            showLastDiv();
        }
    }

    function showPreviousStep() {
        if (currentStep > 0) {
            stepForms[currentStep].parentNode.classList.remove('active');
            currentStep--;
            stepForms[currentStep].parentNode.classList.add('active');
        }
    }

    function showLastDiv() {
        const lastDiv = document.querySelector('.output-box').parentNode;
        lastDiv.classList.add('active');
    }



//display next input field when user hit next button
    document.getElementById("next1").addEventListener("click", function() { showNextStep(1); });
    document.getElementById("next2").addEventListener("click", function() { showNextStep(2); });
    document.getElementById("next3").addEventListener("click", function() { showNextStep(3); });
    document.getElementById("next4").addEventListener("click", function() { showNextStep(4); });
    document.getElementById("next5").addEventListener("click", function() { showNextStep(5); });
    document.getElementById("next6").addEventListener("click", function() { showNextStep(6); });
    document.getElementById("next7").addEventListener("click", function() { showNextStep(7); });
    document.getElementById("next8").addEventListener("click", function() { showNextStep(8); });
    document.getElementById("next9").addEventListener("click", function() { showNextStep(9); });
    document.getElementById("next10").addEventListener("click", function() { showNextStep(10); });
    document.getElementById("next11").addEventListener("click", function() { showNextStep(11); });
    document.getElementById("next12").addEventListener("click", function() { showNextStep(12); });
    document.getElementById("next13").addEventListener("click", function() { showNextStep(13); });
    document.getElementById("next14").addEventListener("click", function() { showNextStep(14); });
    document.getElementById("next15").addEventListener("click", function() { showNextStep(15); });
    document.getElementById("next16").addEventListener("click", function() { showNextStep(16); });
    document.getElementById("next17").addEventListener("click", function() { showNextStep(17); });
    document.getElementById("next18").addEventListener("click", function() { showNextStep(18); });

//display next input field when user hit skip button
    document.getElementById("skip1").addEventListener("click", skipStep);
    document.getElementById("skip2").addEventListener("click", skipStep);
    document.getElementById("skip3").addEventListener("click", skipStep);
    document.getElementById("skip4").addEventListener("click", skipStep);
    document.getElementById("skip5").addEventListener("click", skipStep);
    document.getElementById("skip6").addEventListener("click", skipStep);
    document.getElementById("skip7").addEventListener("click", skipStep);
    document.getElementById("skip8").addEventListener("click", skipStep);
    document.getElementById("skip9").addEventListener("click", skipStep);
    document.getElementById("skip10").addEventListener("click", skipStep);
    document.getElementById("skip11").addEventListener("click", skipStep);
    document.getElementById("skip12").addEventListener("click", skipStep);
    document.getElementById("skip13").addEventListener("click", skipStep);
    document.getElementById("skip14").addEventListener("click", skipStep);
    document.getElementById("skip15").addEventListener("click", skipStep);
    document.getElementById("skip16").addEventListener("click", skipStep);
    document.getElementById("skip17").addEventListener("click", skipStep);
    document.getElementById("skip18").addEventListener("click", skipStep);

    // Add event listeners for previous buttons
    const prevButtons = document.querySelectorAll('.prev-button');
    prevButtons.forEach(function(button) {
        button.addEventListener('click', showPreviousStep);
    });
//display the user inputs within the output-box
    function showLastDiv() {
        const lastDiv = document.querySelector('.output-box');
        let outputHTML = "<p><strong>Personal Details:</strong></p>";
        outputHTML += "<ul>";
        outputHTML += "<li>Name: " + (document.getElementById("nameInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Surname: " + (document.getElementById("surnameInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Age: " + (document.getElementById("ageInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Gender: " + (document.querySelector('input[name="Gender"]:checked') ? document.querySelector('input[name="Gender"]:checked').value : "Not provided") + "</li>";
        outputHTML += "</ul>";
        outputHTML += "<p><strong>Volunteering Task:</strong></p>";
        outputHTML += "<ul>";
        outputHTML += "<li>What brings you to this cause: " + (document.getElementById("RationalInput").value || "Not provided") + "</li>";
        outputHTML += "<li>DoA: " + (document.getElementById("DoAInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Task: " + (document.getElementById("TaskInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Place: " + (document.getElementById("placeInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Assignment type: " + (document.getElementById("AssignmentInput").value || "Not provided") + "</li>";
        outputHTML += "</ul>";
        outputHTML += "<p><strong>Qualification:</strong></p>";
        outputHTML += "<ul>";
        outputHTML += "<li>Area of study: " + (document.getElementById("studyInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Highest degree: " + (document.getElementById("degreeInput").value || "Not provided") + "</li>";
        outputHTML += "<li>University / Institution: " + (document.getElementById("universityInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Completion Year: " + (document.getElementById("yearInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Country: " + (document.getElementById("countyInput").value || "Not provided") + "</li>";
        outputHTML += "</ul>";
        outputHTML += "<p><strong>Availabilty and Contact:</strong></p>";
        outputHTML += "<ul>";
        outputHTML += "<li>Min hours per week: " + (document.getElementById("hoursInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Surname: " + (document.getElementById("surnameInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Tel: " + (document.getElementById("telInput").value || "Not provided") + "</li>";
        outputHTML += "<li>Email: " + (document.getElementById("emailInput").value || "Not provided") + "</li>";
        outputHTML += "</ul>";
        lastDiv.innerHTML = outputHTML;
        lastDiv.parentNode.classList.add('active');
    }

});

