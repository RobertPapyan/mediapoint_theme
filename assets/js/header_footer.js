document.addEventListener('DOMContentLoaded',function(){

    

    document.querySelector('#calendar-icon').addEventListener('click',()=>{
        document.querySelector('#calendar').classList.toggle('show')
    })
    document.querySelector('#calendar-icon-mobile').addEventListener('click',()=>{
        document.querySelector('#calendar-mobile').classList.toggle('show')
    })

    document.addEventListener('click', function (event) {
        const calendar = document.getElementById('calendar');
        const calendarIcon = document.getElementById('calendar-icon');
    
        // Check if the calendar exists
        if (!calendar) return;
    
        // If the clicked target is #calendar, its children, #calendar-icon, or its children, do nothing
        if (
            calendar.contains(event.target) || 
            (calendarIcon && calendarIcon.contains(event.target))
        ) {
            return;
        }
    
        // Remove the 'show' class from the calendar
        calendar.classList.remove('show');
    });
    document.addEventListener('click', function (event) {
        const calendar = document.getElementById('calendar-mobile');
        const calendarIcon = document.getElementById('calendar-icon-mobile');
    
        // Check if the calendar exists
        if (!calendar) return;
    
        // If the clicked target is #calendar, its children, #calendar-icon, or its children, do nothing
        if (
            calendar.contains(event.target) || 
            (calendarIcon && calendarIcon.contains(event.target))
        ) {
            return;
        }
    
        // Remove the 'show' class from the calendar
        calendar.classList.remove('show');
    });
})