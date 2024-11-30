<script>
    import { onMount } from 'svelte';

    let selectedClass = 1; // Ukládá aktuálně vybranou třídu
    let subjects = ["Matematika", "Angličtina", "Fyzika", "Český jazyk", "Dějepis", "Biologie", "Geografie", "Hudební výchova", "Tělesná výchova", "Informatika", "Volno"];
    let showForm = false;
    let currentSubject = '';
    let selectedCell = null;

    function zmena(cislo) {
        selectedClass = cislo;
    }

    function otevrit(tdElement) {
        currentSubject = tdElement.innerText;
        selectedCell = tdElement;
        showForm = true;
    }

    function savef() {
        if (selectedCell) {
            selectedCell.innerText = currentSubject;
            selectedCell.style.backgroundColor = 'pink';
        }
        closeForm();
    }

    function closeForm() {
        showForm = false;
    }
</script>

<main>
    <div id="rozvrhstr">
        <!-- Výběr třídy -->
        <div id="tridy">
            {#each Array(5) as _, i}
                <button 
                    class="navbutton" 
                    onclick={() => zmena(i + 1)} 
                    disabled={selectedClass === i + 1}>
                    {i + 1}.A
                </button>
            {/each}
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
                    {#each Array(5) as _, rowIndex}
                        <tr>
                            <td>{8 + rowIndex}:00 - {9 + rowIndex}:00</td>
                            {#each Array(5) as _}
                                <td onclick={(e) => otevrit(e.target)}>
                                    Předmět 
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <!-- Změna v rozvrhu -->
        {#if showForm}
            <div id="form">
                <div class="form-group">
                    <label for="subjectSelect">Vyberte Předmět:</label>
                    <select id="subjectSelect" bind:value={currentSubject}>
                        {#each subjects as subject}
                            <option value={subject}>{subject}</option>
                        {/each}
                    </select>
                </div>

                <div class="form-group">
                    <button id="saveButton" onclick={savef}>Uložit</button>
                </div>

                <div class="form-group">
                    <button id="closeButton" onclick={closeForm}>Zavřít</button>
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
    /* Stylování zůstává stejné jako původní */
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

    #tridy {
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

    tr:hover {
        background-color: #ddd;
    }

    td:hover {
        background-color: #77899d;
    }

    #form {
        position: absolute;
        display: flex;
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
