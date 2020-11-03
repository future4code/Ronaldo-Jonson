import moment from 'moment'

type DateEvent = {
    eventName: string,
    description: string,
    startDate: moment.Moment,
    endDate: moment.Moment
}

const AllEvents: DateEvent[] = [
    {
        eventName: "teste",
        description: "teste",
        startDate: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        endDate: moment("25/06/2020 19:00", "DD/MM/YYYY HH:mm")
    },
    {
        eventName: "teste",
        description: "teste",
        startDate: moment("11/02/2021 09:00", "DD/MM/YYYY HH:mm"),
        endDate: moment("25/03/2021 12:00", "DD/MM/YYYY HH:mm")
    }
]

function ShowEventDetails(events: DateEvent[]){
    events.map(currentEvent => {
        console.log(`Nome: ${currentEvent.eventName}`);
        console.log(`Horario de inicio: ${currentEvent.startDate.format("dddd, DD [do] MM [de] YYYY, HH:mm")}`);
        console.log(`Horario de fim: ${currentEvent.endDate.format("dddd, DD [do] MM [de] YYYY, HH:mm")}`);
        console.log(`Descricao: ${currentEvent.description}`);

        const duration = currentEvent.endDate.diff(currentEvent.startDate, "minutes");
        console.log('Duracao: ' + duration + ' minutos');

        const today = moment();
        const daysUntilEvent = currentEvent.startDate.diff(today, "days");
        console.log('Dias ate o evento: ' + daysUntilEvent);


        console.log('\n');
    })
}

// Mudar a ordem da formatação para dddd, YYYY MM de DD

function CreateEvent(_name: string, _description: string, _startDate: moment.Moment, _endDate: moment.Moment)
{
    if(_name != '' && _description != '' && _startDate != undefined  && _endDate != undefined){
        const today = moment();
        const daysUntilEvent = _startDate.diff(today, "days");
        const minutesToEvent = _startDate.diff(today, "minutes");

        console.log(minutesToEvent + "MINUTOS")

        if(daysUntilEvent >= 0 && minutesToEvent > 0){
                AllEvents.push({ 
                eventName: _name,
                description: _description,
                startDate: _startDate,
                endDate: _endDate
            })
        }
    }
}

CreateEvent('Festonha', 'uma festonha', moment("11/02/1998 09:00", "DD/MM/YYYY HH:mm"), moment("25/03/2021 12:00", "DD/MM/YYYY HH:mm"));
CreateEvent('Festenha', 'uma festenha', moment("11/02/2021 09:00", "DD/MM/YYYY HH:mm"), moment("25/03/2021 12:00", "DD/MM/YYYY HH:mm"));
CreateEvent('Festinha', 'uma festenha', moment("29/07/2020 17:00", "DD/MM/YYYY HH:mm"), moment("29/07/2020 18:00", "DD/MM/YYYY HH:mm"));


ShowEventDetails(AllEvents)
   
