$(function(){

    const seconds  = [{ name: '*',  value: '*' }];
    const minutes  = [{ name: '*',  value: '*' }];
    const hours  = [{ name: '*',  value: '*' }];
    const dates  = [{ name: '*',  value: '*' }, { name: '?',  value: '?' }];


    for(let i=0; i<60; i++){

        seconds.push({name: i, value: i});
        minutes.push({name: i, value: i});

        if(i < 24){
            hours.push({name: i, value: i});
        }

        if(i> 0 && i < 13 ){
            dates.push({name: i, value: i});
        }
    }

    const days  =
        [
            { name: '*',  value: '*' },
            { name: '?',  value: '?' },
            { name: 'SUNDAY',  value: 'SUN' },
            { name: 'MONDAY',  value: 'MON' },
            { name: 'TUESDAY', value: 'TUE' },
            { name: 'WEDNESDAY', value: 'WED' },
            { name: 'THURSDAY', value: 'THU' },
            { name: 'FRIDAY', value: 'FRI' },
            { name: 'SATURDAY', value: 'SAT' }
        ];

    const months  =
        [
            { name: '*',  value: '*' },
            { name: 'JANUARY',  value: 'JAN' },
            { name: 'FEBRUARY',  value: 'FEB' },
            { name: 'MARCH', value: 'MAR' },
            { name: 'APRIL', value: 'APR' },
            { name: 'MAY', value: 'MAY' },
            { name: 'JUNE', value: 'JUN' },
            { name: 'JULY', value: 'JUL' },
            { name: 'AUGUST',  value: 'AUG' },
            { name: 'SEPTEMBER', value: 'SEP' },
            { name: 'OCTOBER', value: 'OCT' },
            { name: 'NOVEMBER', value: 'NOV' },
            { name: 'DECEMBER', value: 'DEC' }
        ];

    const secondDropdown = document.getElementById("second-dropdown");
    const minuteDropdown = document.getElementById("minute-dropdown");
    const hourDropdown = document.getElementById("hour-dropdown");
    const dateDropdown = document.getElementById("date-dropdown");
    const monthDropdown = document.getElementById("month-dropdown");
    const dayDropdown = document.getElementById("day-dropdown");
    const cron = document.getElementById("cron");

    seconds.forEach(({name,value})=>   {
        secondDropdown.add( new Option(name, value))
    });

    minutes.forEach(({name,value})=>   {
        minuteDropdown.add( new Option(name, value))
    });

    hours.forEach(({name,value})=>   {
        hourDropdown.add( new Option(name, value))
    });

    dates.forEach(({name,value})=>   {
        dateDropdown.add( new Option(name, value))
    });

    months.forEach(({name,value})=>   {
        monthDropdown.add( new Option(name, value))
    })

    days.forEach(({name,value})=>   {
        dayDropdown.add( new Option(name, value))
    })


    $('#btn').on("click", function () {

        const sec = secondDropdown.value;
        const min = minuteDropdown.value;
        const hr = hourDropdown.value;
        const date = dateDropdown.value;
        const mon = monthDropdown.value;
        const day = dayDropdown.value;

        const cronExp = sec + ' ' + min + ' ' + hr + ' ' + date + ' ' + mon + ' ' + day;

        $("#cron").val(cronExp);

        alert(cronExp);

    });
});