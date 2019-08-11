A daily scheduler to manage conference room schedules on any given day. Built to minimize the number of conference rooms needed on a given day, the scheduler will automtically modify event location as new events are added.

**How to use**

Click "Add Event" to schedule an `Event`. An `Event` consists of a `title`, `startTime`, `endTime`, and `description`. You can modify events by clicking on them directly. Each `Event` must have a `startTime` that precedes its `endTime` as well as a `title`.

The range of valid `Event` times has been arbitrarily defined from 9AM-9PM.

**Technical Notes**

- All components are functional components built from scratch, making use of React Hooks and Context (`useForm` is a SOLID hook);
- Events are placed on the schedule programmatically (no framework involved)
- Flex used for the list of times, header, and room label placement


**Future Directions**

- Make beautiful and usable on mobile
- Persistent Data Storage
- Use Zapier to integrate and sync with Google Calendar
- Build a `ThemeContext` for DarkMode
- Users (filter calendar by person and add person to event)
