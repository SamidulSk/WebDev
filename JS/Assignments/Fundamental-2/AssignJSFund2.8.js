// calculate the number of days between the current date and event date
function calculateRemainingDays(EventDate) {
    const eventdate = new Date(EventDate);
    const currentDate = new Date();
    const timeDifference = eventdate - currentDate;  // in milisecond
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // convert the time difference from milliseconds to days.

    return daysRemaining;
}

const eventDate = '2023-10-15'
console.log(calculateRemainingDays(eventDate));
// output:: 28