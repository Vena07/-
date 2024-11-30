<script>
    import { onMount } from "svelte";

    let classSelected = "1.A";
    let studentSelected = "Jan Novák";
    let absenceFormVisible = false;
    let absenceTable = [
        { date: "2024-11-06", duvod: "Nemoc", excused: true },
        { date: "2024-11-06", duvod: "Lekař", excused: false }
    ];

    function otevritAbsenciForm() {
        absenceFormVisible = true;
    }

    function zavritAbsenci() {
        absenceFormVisible = false;
    }

    function pridatAbsenci(date, duvod, isExcused) {
        absenceTable = [...absenceTable, { date, duvod, excused: isExcused }];
        zavritAbsenci();
    }

    let absenceDate = "";
    let absenceHour = "";
    let isExcused = false;
</script>

<main>
    <div class="container">
        <div>
            <label for="classSelect">Vyberte Třídu:</label>
            <select id="classSelect" bind:value={classSelected}>
                <option value="1.A">1.A</option>
                <option value="2.A">2.A</option>
                <option value="3.A">3.A</option>
                <option value="4.A">4.A</option>
                <option value="5.A">5.A</option>
            </select>
        </div>

        <div>
            <label for="studentSelect">Vyberte Studenta:</label>
            <select id="studentSelect" bind:value={studentSelected}>
                <option value="Jan Novák">Jan Novák</option>
                <option value="Anna Dvořáková">Anna Dvořáková</option>
                <option value="Petra Svobodová">Petra Svobodová</option>
                <option value="Martin Procházka">Martin Procházka</option>
                <option value="Lukáš Veselý">Lukáš Veselý</option>
            </select>
        </div>

        <button class="btn" onclick={otevritAbsenciForm}>Přidat Absenci</button>
    </div>

    <div class="table-container">
        <table id="absenceTable">
            <thead>
                <tr>
                    <th>Čas</th>
                    <th>Omluvená</th>
                </tr>
            </thead>
            <tbody>
                {#each absenceTable as { date, duvod, excused }}
                    <tr>
                        <td>{date} | {duvod}</td>
                        <td class={excused ? "absence-green" : "absence-red"}>
                            {excused ? "Omluvená" : "Neomluvená"}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <div class="modal" style="display: {absenceFormVisible ? 'flex' : 'none'}">
        <label for="absenceDate">Datum:</label>
        <input type="date" id="absenceDate" bind:value={absenceDate}>

        <label for="absenceHour">Hodina:</label>
        <input type="text" id="absenceHour" placeholder="Důvod" bind:value={absenceHour}>

        <label for="isExcused">Omluvená:</label>
        <input type="checkbox" id="isExcused" bind:checked={isExcused}>

        <button class="btn" onclick={() => pridatAbsenci(absenceDate, absenceHour, isExcused)}>Uložit</button>
        <button class="btn" onclick={zavritAbsenci}>Zavřít</button>
    </div>
</main>

<style>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    font-family: Arial, sans-serif;
}

.container {
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



label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

select, input[type="date"], input[type="text"], .btn {
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 200px;
    box-sizing: border-box;
}

.btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin: 5px;
}

.btn:hover {
    background-color: #0056b3;
}

.table-container {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    
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
    padding: 20px;
    text-align: center;
}

th {
    background-color: #007bff;
    color: #fff;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

#absenceTable {
    width: 80%;
    border-collapse: collapse;
    margin-top: 20px;
}

#absenceTable th, #absenceTable td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.absence-green {
    background-color: #d4edda;
    color: #155724;
}

.absence-red {
    background-color: #f8d7da;
    color: #721c24;
}

.modal {
    display: none;
    position: absolute;
    flex-direction: column;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 20px auto;
    margin-top: 200px;
    text-align: center;
}

</style>