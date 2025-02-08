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

    document.addEventListener('click',function(event){
        const botomBar = document.querySelector('.jeg_bottombar')
        const searchIcon =  document.querySelector('.jeg_search_wrapper')


        if(searchIcon && searchIcon.contains(event.target)){
            setTimeout(()=>{
                if(botomBar.classList.contains('jeg_search_expanded')){
                    botomBar.querySelector('.jeg_search_input').focus()
                }
            },200)
        }
        if (botomBar.contains(event.target))return;

        searchIcon.querySelector('i').classList.remove('fa-close')
        searchIcon.querySelector('i').classList.add('fa-search')
        
        botomBar.classList.remove('jeg_search_expanded')
    })
    document.addEventListener('click',function(event){
        const botomBar = document.querySelector('.jeg_mobile_bottombar')
        const searchIcon =  document.querySelector('.jeg_mobile_bottombar .jeg_search_wrapper')

        if(searchIcon && searchIcon.contains(event.target)){
            setTimeout(()=>{
                if(botomBar.classList.contains('jeg_search_expanded')){
                    botomBar.querySelector('.jeg_search_input').focus()
                }
            },200)
        }
        if (botomBar.contains(event.target))return;


        searchIcon.querySelector('i').classList.remove('fa-close')
        searchIcon.querySelector('i').classList.add('fa-search')
        
        botomBar.classList.remove('jeg_search_expanded')
        
    })


        const shareContainer = document.querySelector(".jeg_share_bottom_container");
        const targetContainer = document.querySelector(".saboxplugin-tab");
    
        if (shareContainer && targetContainer) {
            targetContainer.appendChild(shareContainer);
        }
})