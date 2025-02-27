import "./App.css";
// import "@fullcalendar/react/dist/vdom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useRef } from "react";

function renderEventContent(arg: any) {
  return (
    <>
      <b>{arg.timeText}</b>
      <i>{arg.event.title}</i>
    </>
  );
}

function App() {
  const calendarRef = useRef(null);
  return (
    <>
      <h1>Vite + React</h1>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        // first try with commented out eventContent, later uncomment and compare the results of attached event listeners
        // eventContent={renderEventContent}
        events={[
          { title: "event 1", date: "2024-11-21" },
          { title: "event 1", date: "2024-11-19" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
          { title: "event 1", date: "2024-11-21" },
          { title: "event 2", date: "2024-11-22" },
          { title: "event 3", date: "2024-11-23" },
          { title: "event 4", date: "2024-11-24" },
        ]}
      />
    </>
  );
}

export default App;
