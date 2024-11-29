<script>
    function zavrit(cislo){
    switch(cislo){
        case 1:
            document.getElementById("rozvrh").disabled = true;
            document.getElementById("znamky").disabled = false;
            document.getElementById("absence").disabled = false;
            document.getElementById("rozvrhstr").style.display = "flex";
            document.getElementById("znamkystr").style.display = "none";
            document.getElementById("absencestr").style.display = "none";
            break
        case 2:
            document.getElementById("rozvrh").disabled = false;
            document.getElementById("znamky").disabled = true;
            document.getElementById("absence").disabled = false;
            document.getElementById("rozvrhstr").style.display = "none";
            document.getElementById("znamkystr").style.display = "flex";
            document.getElementById("absencestr").style.display = "none";
            break
        case 3:
            document.getElementById("rozvrh").disabled = false;
            document.getElementById("znamky").disabled = false;
            document.getElementById("absence").disabled = true;
            document.getElementById("rozvrhstr").style.display = "none";
            document.getElementById("znamkystr").style.display = "none";
            document.getElementById("absencestr").style.display = "flex";
            break
    }
}
</script>

<header>
    <div class="logoheader">
        <img class="logo" src="my-app\src\routes\ikona.png" alt="EduPortal Logo">
        <p class="logotext">EduPortal</p>
    </div>    
    <nav>
        <button type="disable" class="navbutton" id="rozvrh" onclick={() => zavrit(1)}>Rozvrh</button>
        <button  id="znamky" class="navbutton" onclick={() => zavrit(2)}>Známky</button>
        <button  id="absence" class="navbutton" onclick={() => zavrit(3)}>Absence</button>
    </nav>
</header>

<style>
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 15px;
    background-color: #fff;
}

.logo {
    width: 50px;
    height: auto;
    margin-right: 10px;
}

.logotext {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.logoheader {
    display: flex;
    align-items: center;
}

nav {
    display: flex;
    gap: 15px;
}

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

</style>