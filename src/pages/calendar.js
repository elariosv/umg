import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ResponsiveAppBar from '../components/menu';
import WhatsAppButton from '../components/Whatsapp';

const events = [
    { title: 'Daily', start: '2023-11-05T10:00:00' },
    { title: 'Stand up', start: '2023-11-10T14:30:00' },
    { title: 'Restrospective', start: '2023-11-15T11:00:00' },
    { title: 'Meeting 1', start: '2023-11-06T15:00:00' },
    { title: 'Meeting 2', start: '2023-11-07T09:30:00' },
    { title: 'Project Review', start: '2023-11-11T13:45:00' },
    { title: 'Daily', start: '2023-11-29T10:00:00' },
    { title: 'Stand up', start: '2023-11-28T14:30:00' },
    { title: 'Restrospective', start: '2023-11-21T11:00:00' },
    { title: 'Meeting 1', start: '2023-11-30T15:00:00' },
    { title: 'Meeting 2', start: '2023-11-22T09:30:00' },
    { title: 'Project Review', start: '2023-11-11T13:45:00' },
];


export function Calendar() {
  return (
    <div>
        <ResponsiveAppBar />
        <WhatsAppButton />
        <div style={{ margin: "50px" }}>
        <h1>OPERATIONS CALENDAR</h1>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
        />
        </div>
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}