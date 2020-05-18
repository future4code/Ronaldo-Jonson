console.log("ok");

let allPayments = new Array();

function MakeNewPayment()
{
    let payment = {
        'cost' : '0',
        'type' : 'casa',
        'description' : 'texxt'
    }

    payment.cost = GetElementTextAndClear("cost");
    payment.type = GetElementTextAndClear("type");
    payment.description = GetElementTextAndClear("description");

    if(payment.description != "" && payment.type != "" && payment.cost != "")
    {
        allPayments.push(payment);
        console.log(allPayments);
        WriteToScreen(allPayments);
    }
}

function WriteToScreen(array)
{
    let expenses = "";

    array.forEach(element => {
        expenses += `${element.cost} <br> ${element.type} <br> ${element.description} <br><br>`
    });

    document.getElementById("expenseTable").innerHTML = expenses;
}

const filters = document.getElementsByClassName("checkBox");
const filterNames = new Array();

for(let i = 0; i < filters.length; i++)
{
    filterNames.push(filters[i].value);
}

console.log("Teste" + filters.length);

function FilterList()
{
    let useFilter = false;

    filters.forEach((element) =>{
        if(element.checked == true)
            useFilter = true;
    })

    if(useFilter)
    {
        let array = allPayments.filter((current, index, array) => {

            for(let i = 0; i < filters.length; i++)
            {
                if(filters[i].checked)
                    if(filterNames[i] == current.type)
                        return true;
            }
    
            return false;
        })
    
        WriteToScreen(array);
    }
}

function GetElementTextAndClear(origin){
    let deltaString = document.getElementById(origin).value;
    document.getElementById(origin).value = "";
    return deltaString;
}