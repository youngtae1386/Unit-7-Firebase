var employeeData = {
    apiKey: "AIzaSyC1yYMNVs-rkVP040Su6ZwFSDVCXLZwC5I",
    authDomain: "firstproject-c32a7.firebaseapp.com",
    databaseURL: "https://firstproject-c32a7.firebaseio.com",
    projectId: "firstproject-c32a7",
    storageBucket: "firstproject-c32a7.appspot.com",
    messagingSenderId: "1089648735509"
};
// firebase.initializeApp(config);
// var database = firebase.database();
// database.ref().on("value", function(snapshot) {
//database.ref().on("value", function (snapshot) {

        $("#addEmployeeBtn").on("click", function (event) {
            event.preventDefault();
            var empName = $("#employeeNameInput").val().trim();
            var empRole = $("#roleInput").val().trim();
            var empDate = moment($("#dateInput").val().trim(), "DD/MM/YYYY").format("X");
           // var empMonthsWorked;
            var empRate = $("#rateInput").val().trim();
           // var empTotalBill;


          var newEmp = {
            trainName: empName,
            role: empRole,
            start: empDate,
            rate: empRate
          }

          employeeData.ref().push(newEmp);
                       // store data in firebase
                    //    database.ref().push({
                    //     empName: empName,
                    //     empRole: empRole,
                    //     empDate: empDate,
                    //     empRate: empRate

            console.log(empName);
            var newTRow = $("<tr>").append(

                $("<td>").text(empName),
                $("<td>").text(empRole),
                $("<td>").text(empDate),
                $("<td>").text(empMonthsWorked),
                $("<td>").text(empRate),
                $("<td>").text(empTotalBill),
            );
            
            employeeData.on("child_added", function(childSnapshot, prevChildKey){

            console.log(childSnapshot.val());

            //store everything into a variable.
            var empName = childSnapshot.val().trainName;
            var empRole = childSnapshot.val().role;
            var empStart = childSnapshot.val().start;
            var empRate = childSnapshot.val().rate;
         
            console.log(empRole);
            console.log(empName);
            console.log(empStart);
            console.log(empRate);

            // Prettify the employee start
            var empStartPretty = moment.unix(empDate).format("MM/DD/YYYY");
            console.log(empStartPretty);

            // Calculate the months worked using hardcore math
            // To calculate the months worked
            var empMonths = moment().diff(moment(empDate, "X"), "months");
            console.log(empMonths);

            // Calculate the total billed rate
            var empBilled = empMonths * empRate;
            console.log(empBilled);


            $("employeeTable > #tbody").append(
                "<tr><td>" + empName + 
                "</td><td>" + empRole + 
                "</td><td>" + empStartPretty + 
                "</td><td>" + empMonths + 
                "</td><td>" +  emRate + 
                "</td><td>" + "<tr><td>")
        
    })
})
