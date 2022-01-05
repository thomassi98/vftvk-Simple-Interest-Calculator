function compute(){
    // Computes interest and displays it in result span if principal is valid
    var principal = document.getElementById("principal").value;
    // Check if principal is valid
    var princ_valid = validatePrincipal()
    if (!princ_valid){
        return false
    }

    // Retrieve values
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Calculate interest
    var interest = principal * years * rate/100;
    
    // Find year for interest
    var year = new Date().getFullYear()+parseInt(years);

    // Create and store result string
    var result_text = "If you deposit <mark>" + principal + "</mark>,\<br\> at an interest rate of <mark>"+ rate + "</mark>.\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\> in the year <mark>" + year + "</mark>";
    
    // Display result string
    document.getElementById("result").innerHTML=result_text;
}

function updateRate(){
    // Display current rate value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validatePrincipal() {
    // Validate that input principal is above 0
    var principal = document.getElementById("principal");
    if (principal.value < 1) {
        principal.value = ""
        alert("Please enter an amount value over 0.")
        document.getElementById("principal").focus();
        return false
    }
    return true
}
        