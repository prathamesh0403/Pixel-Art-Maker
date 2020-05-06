function print()
{
    var height=document.getElementById('inputHeight').value;
    var width=document.getElementById('inputWidth').value;
    makeGrid(height,width);
}
function makeGrid(x,y) { 
    var table=document.getElementsByTagName('table')[0];
    for(var i=0;i<x;i++)
    {
        var newRow= document.createElement('tr');
        table.appendChild(newRow);
        for(j=0;j<y;j++)
        {
            var cell= document.createElement('td');
            cell.setAttribute('id','table'+j);
            cell.setAttribute('class','data')
            newRow.appendChild(cell);

        }
    }
    addColor();
    
}
function addColor()
{
    var color = document.getElementById("colorPicker").value;
    var data = document.getElementsByClassName('data');
    for(var i = 0; i < data.length; i++)
    {
        data[i].addEventListener("click", function(event) {
            var clickeddata = event.target;
            if (clickeddata.hasAttribute('style'))
            {
                clickeddata.removeAttribute('style');
            }
            else
            {
                clickeddata.style.backgroundColor = color;
            }
        });
    }
}
