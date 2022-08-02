import React from "react";
import NavBar from "../Components/navBar.js";
import AddButton from "../Components/addButton.js";
import ScheduleCard from "../Components/scheduleCard";
import CompletedTaskCard from "../Components/completedTaskCard.js";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid/non-secure";

const url = process.env.NEXT_PUBLIC_DB_URL ?? "http://localhost:3000";

const SchedulePage = () => {
  const [stateCount, setStateCount] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await fetch(`${url}/reminders`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const response = await fetch(`${url}/reminders`);
      const data = await response.json();
      setData(data.payload);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [stateCount]);

  if (!data) {
    return <p>is loading</p>;
  }

  /*
  need to add a post method to this function to create a copy of the card going into completed, but generate a new reminder_id, and perform an update on the date based on frequency chosen at inital creation
  */
  async function patchFunction(data) {
    await fetch(`${url}/reminders/${data.reminder_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .then(() => {
        setStateCount((c) => c + 1);
      });
    }

    async function postFunction(data) {
      await fetch(`${url}/reminders`, {
        method: "POST",
        body: JSON.stringify({
          user_id: data.user_id,
                  pet_id: data.pet_id,
                  reminder_id: nanoid(10),
                  task: data.task,
                  date: "?????",
                  completed: false,
                  repeated: data.repeated,
                  frequency: data.frequency
                  }),
        headers: {
          "Content-Type": "application/json",
      },
    })}

    function onClick(data) {
      patchFunction(data);
      postFunction(data);
    }

  async function onDelete(data) {
    await fetch(`${url}/reminders/${data.reminder_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .then(() => {
        setStateCount((c) => c + 1);
      });
  }

  return (
    <main>
      <NavBar />
      <div className="m10">
        <h2 className="text-center">Check Schedule</h2>
        {data
          .filter((object) => object.completed === false)
          .map((filteredData) => (
            <ScheduleCard
              key={filteredData.reminder_id}
              data={filteredData}
              onClick={onClick}
              onDelete={onDelete}
            />
          ))}
      </div>
      <div className="m10">
        <h2 className="text-center">Completed Tasks</h2>
        {data
          .filter((object) => object.completed === true)
          .map((filteredData) => (
            <CompletedTaskCard
              key={filteredData.reminder_id}
              data={filteredData}
              onDelete={onDelete}
            />
          ))}
      </div>

      <AddButton text="Add Reminder" href="/addReminder" />
    </main>
  );
};

export default SchedulePage;
