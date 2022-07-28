import React from "react";
import NavBar from "../Components/navBar.js";
import AddButton from "../Components/addButton.js";
import ScheduleCard from "../Components/scheduleCard"

const SchedulePage = () => {
 
  return (
    <main>
      <NavBar />
      <div className="m10">
         <h2 className="text-center">Check Schedule</h2>
          <ScheduleCard/>
      </div>
      <AddButton text="Add Reminder" href="/addReminder" />
    </main>
  );
};

export default SchedulePage;
