<script>
    

function zmena(cislo) {
    switch(cislo) {
        case 1:
            document.getElementById("1.A").disabled = true;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 2:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = true;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 3:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = true;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = false;
            break;
        case 4:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = true;
            document.getElementById("5.A").disabled = false;
            break;
        case 5:
            document.getElementById("1.A").disabled = false;
            document.getElementById("2.A").disabled = false;
            document.getElementById("3.A").disabled = false;
            document.getElementById("4.A").disabled = false;
            document.getElementById("5.A").disabled = true;
            break;
    }
}

function save() {
    const student = document.getElementById("studentSelect").value;
    const subject = document.getElementById("subjectSelect").value;
    
}

let aktualniTdElement;

function otevrit(tdElement) {
    aktualniTdElement = tdElement;
    document.getElementById('form').style.display = 'flex';
}

function savef() {
    const selectElement = document.getElementById("subjectSelect");
    const selectedValue = selectElement.value;
    aktualniTdElement.innerHTML = selectedValue;
    aktualniTdElement.style.backgroundColor = 'pink';
    document.getElementById('form').style.display = 'none';

}

function closeForm(){
    document.getElementById('form').style.display = 'none';
}
</script>


<main>
<div id="rozvrhstr">

    <!-- Výběr třídy -->
    <div id="tridy">
        <button class="navbutton" onclick={() => zmena(1)}>1.A</button>
        <button class="navbutton" onclick={() => zmena(2)}>2.A</button>
        <button class="navbutton" onclick={() => zmena(3)}>3.A</button>
        <button class="navbutton" onclick={() => zmena(4)}>4.A</button>
        <button class="navbutton" onclick={() => zmena(5)}>5.A</button>
    </div>

    <!-- Rozvrh tříd -->
    <div id="rozvrh">
    <table>
        <thead>
            <tr>
                <th>Čas</th>
                <th>Pondělí</th>
                <th>Úterý</th>
                <th>Středa</th>
                <th>Čtvrtek</th>
                <th>Pátek</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8:00 - 9:00</td>
                <td onclick="{() => otevrit('Matematika')}">Matematika</td>
                <td onclick="{() => otevrit('Angličtina')}">Angličtina</td>
                <td onclick="{() => otevrit('Fyzika')}">Fyzika</td>
                <td onclick="{() => otevrit('Český jazyk')}">Český jazyk</td>
                <td onclick="{() => otevrit('Dějepis')}">Dějepis</td>
            </tr>
            <tr>
                <td>9:10 - 10:10</td>
                <td onclick="{() => otevrit('Biologie')}">Biologie</td>
                <td onclick="{() => otevrit('Matematika')}">Matematika</td>
                <td onclick="{() => otevrit('Angličtina')}">Angličtina</td>
                <td onclick="{() => otevrit('Geografie')}">Geografie</td>
                <td onclick="{() => otevrit('Fyzika')}">Fyzika</td>
            </tr>
            <tr>
                <td>10:20 - 11:20</td>
                <td onclick="{() => otevrit('Český jazyk')}">Český jazyk</td>
                <td onclick="{() => otevrit('Biologie')}">Biologie</td>
                <td onclick="{() => otevrit('Dějepis')}">Dějepis</td>
                <td onclick="{() => otevrit('Matematika')}">Matematika</td>
                <td onclick="{() => otevrit('Hudební výchova')}">Hudební výchova</td>
            </tr>
            <tr>
                <td>11:30 - 12:30</td>
                <td onclick="{() => otevrit('Geografie')}">Geografie</td>
                <td onclick="{() => otevrit('Fyzika')}">Fyzika</td>
                <td onclick="{() => otevrit('Angličtina')}">Angličtina</td>
                <td onclick="{() => otevrit('Biologie')}">Biologie</td>
                <td onclick="{() => otevrit('Tělesná výchova')}">Tělesná výchova</td>
            </tr>
            <tr>
                <td>12:40 - 13:40</td>
                <td onclick="{() => otevrit('Informatika')}">Informatika</td>
                <td onclick="{() => otevrit('Český jazyk')}">Český jazyk</td>
                <td onclick="{() => otevrit('Hudební výchova')}">Hudební výchova</td>
                <td onclick="{() => otevrit('Angličtina')}">Angličtina</td>
                <td onclick="{() => otevrit('Matematika')}">Matematika</td>
            </tr>
        </tbody>
    </table>
        
    </div>

    <!-- Změna v rozvrhu-->
    <div id="form">
        <div class="form-group">
            <label for="subjectSelect">Vyberte Předmět:</label>
            <select id="subjectSelect">
                <option value="Matematika">Matematika</option>
                <option value="Angličtina">Angličtina</option>
                <option value="Fyzika">Fyzika</option>
                <option value="Český jazyk">Český jazyk</option>
                <option value="Dějepis">Dějepis</option>
                <option value="Biologie">Biologie</option>
                <option value="Geografie">Geografie</option>
                <option value="Hudební výchova">Hudební výchova</option>
                <option value="Tělesná výchova">Tělesná výchova</option>
                <option value="Informatika">Informatika</option>
                <option value="Volno">Volno</option>
            </select>
        </div>

        <div class="form-group">
            <button id="saveButton" onclick="{() => save}">Uložit</button>
        </div>

        <div class="form-group">
            <button id="closeButton" onclick="{() => closeForm}">Zavřít</button>
        </div>
    </div>
</div>
</main>


<style>
    .navbutton:disabled {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        background-color: #e0e0e0;
        color: #999;
        cursor: not-allowed;
    }

    .navbutton {
        height: 40px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .navbutton:hover:not(:disabled) {
        background-color: #0056b3;
    }
    
    main {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    }
    
    #rozvrhstr {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        gap: 15px;
    }

    #tridy{ 
        width: 90%;
        max-width: 900px;  
        border: 1px solid #ddd; 
        border-radius: 5px; 
        box-shadow: rgba(50, 50, 93, 0.1) 0px 4px 6px -2px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px; 
        background-color: #fff; 
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        gap: 10px;
    }

    

    table {
        width: 100%;
        max-width: 900px;
        font-size: 25px;
        border-collapse: collapse;
        background-color: #fff;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }

    th {
        background-color: #007bff;
        color: #fff;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #ddd;
    }

    td:hover{
        background-color: #77899d;
    }


    #form{
        position: absolute;
        display: none;
        width: 90%;
        max-width: 300px;  
        border: 1px solid #ddd; 
        border-radius: 5px; 
        box-shadow: rgba(50, 50, 93, 0.1) 0px 4px 6px -2px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px; 
        background-color: #fff; 
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        gap: 10px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group select, .form-group button {
        padding: 10px;
        font-size: 16px;
        width: 100%;
        max-width: 300px;
    }

    .form-group button {
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .form-group button:hover {
        background-color: #0056b3;
    }
</style>