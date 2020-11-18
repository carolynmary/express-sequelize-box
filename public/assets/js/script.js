//=== ADD A POLL ===================================================================================================
$("#submitpoll").on("click", (event) => {
   event.preventDefault();
   const newPoll = {
      user: $("#user").val().trim(),
      question: $("#question").val().trim(),
      optionOne: $("#option-one").val().trim(),
      optionTwo: $("#option-two").val().trim(),
      optionThree: $("#option-three").val().trim(),
      optionFour: $("#option-four").val().trim()
   };
   $.post("/api/new", newPoll, (data) => {
      console.table(data);
      const row = $("<div id='vote-form'>");
      row.append("<h3>" + data.user + " asked: </h3>");
      row.append("<p>" + data.question + "</p>");
      row.append("<input type='radio' name='os' value='" + data.optionOne + "'>" + data.optionOne);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionTwo + "'>" + data.optionTwo);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionThree + "'>" + data.optionThree);
      row.append("<br><br><input type='radio' name='os' value='" + data.optionFour + "'>" + data.optionFour);
      row.append("<br><br><br>");
      row.append("<button id='vote-button'>Submit</button>");
      $("#polldisplay").prepend(row);
      $("#cms").empty();


      //=== VOTING ===================================================================================================
      $("#vote-button").on("click", (data) => {
         console.log("%c this is the data inside vote btn", "color:green; background-color:yellow; fonts-size:22px");
         const choice = document.querySelector("input[name=os]:checked").value;
         const pollData = {
            optionSelect: choice,
            pollId: data.id,
         };
         console.log(pollData.optionSelect);
         
         $.post("/api/vote", pollData, (data) => {
            $.get("/api/results", (results) => {
               
               const dataPoints = [
                  { label: "option-one", y: 1},
                  { label: "option-two", y: 3 },
                  { label: "option-three", y: 0},
                  { label: "option-four", y: 1}
               ];
               const chartContainer = document.querySelector("#chartContainer");
               // taking data and rendring in chart
               if (chartContainer) {
                  // ajax call to get data
                  const chart = new CanvasJS.Chart("chartContainer", {
                     animationEnabled: true,
                     theme: "theme1",
                     title: {
                        text: "Bar Results"
                     },
                     data: [
                        {
                           type: "column",
                           dataPoints: dataPoints
                        }
                     ]
                  });
                  chart.render();
               }
               // READ NOTE IN PARENTHESES BELOW * * * * * * * * * * * * * * * * * * * * * 
               // renderCanvas(need to add the 4 values that we get back from the Get Voting Results api call);
            });
         });

      });
   });
});

//=== CANVAS JS CHART ======================================================================


// });
//=== CALLING CANVAS JS CHART AND VOTING FUNCTIONS ======================================================
// $("#cms").empty();
// $("#user").val("");
// $("#question").val("");
// $("#option-one").val("");
// $("#option-two").val("");
// $("#option-three").val("");
// $("#option-four").val("");
//=== VOTING ============================================================================================
// $(document).on("click", "#vote-form", () => {
//
//    fetch("http://localhost:3360/poll", {
//       method: "post",
//       body: JSON.stringify(data),
//       headers: new Headers({
//          "Content-Type": "application/json"
//       })
//    })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.log(err));
//    e.preventDefault();
// });
// voteChart();


