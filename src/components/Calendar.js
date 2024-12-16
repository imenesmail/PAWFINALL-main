import React, { useState } from "react";

import "../App.css";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Changer de mois
  const changeMonth = (direction) => {
    if (direction === "prev") {
      setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
      if (currentMonth === 0) setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
      if (currentMonth === 11) setCurrentYear(currentYear + 1);
    }
  };

  // Ajouter un événement
  const addEvent = (date) => {
    const eventName = prompt("Enter event name:");
    const eventTime = prompt("Enter event time (e.g., 14:00):");
    if (eventName && eventTime) {
      setEvents([
        ...events,
        { date: `${date}/${currentMonth + 1}/${currentYear}`, eventName, eventTime },
      ]);
    }
  };

  // Filtrer les événements par date
  const getEventsForDate = (date) => {
    const formattedDate = `${date}/${currentMonth + 1}/${currentYear}`;
    return events.filter((event) => event.date === formattedDate);
  };

  // Afficher les jours du mois
  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const hasEvents = getEventsForDate(i).length > 0;
      days.push(
        <div
          className={`day ${hasEvents ? "has-events" : ""}`}
          key={i}
          onClick={() => {
            setSelectedDate(i);
            addEvent(i);
          }}
        >
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="left">
        <div className="calendar">
          <div className="month">
            <button className="prev" onClick={() => changeMonth("prev")}>
              {"<"}
            </button>
            <div className="date">
              {`${new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })} ${currentYear}`}
            </div>
            <button className="next" onClick={() => changeMonth("next")}>
              {">"}
            </button>
          </div>
          <div className="weekdays">
            {weekdays.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="days">{renderDays()}</div>
        </div>
      </div>
      <div className="right">
        <div className="today-date">
          <div className="event-day">
            {selectedDate
              ? `Selected: ${selectedDate}/${currentMonth + 1}/${currentYear}`
              : "No date selected"}
          </div>
        </div>
        <div className="events">
          <h3>Events:</h3>
          {selectedDate && getEventsForDate(selectedDate).length > 0 ? (
            getEventsForDate(selectedDate).map((event, index) => (
              <div key={index} className="event-item">
                <div className="event-name">{event.eventName}</div>
                <div className="event-time">{event.eventTime}</div>
              </div>
            ))
          ) : (
            <p>No events for this day</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
