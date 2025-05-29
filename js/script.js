// Fungsi untuk validasi input dan melakukan konversi suhu
function validateInput() {
    let inputSuhu = document.getElementById("input-suhu").value;
    let hasilSuhu = document.getElementById("hasil-suhu");
    let penjelasan = document.getElementById("detail-suhu");
    let labelInput = document.querySelector("label[for='input-suhu']").innerHTML;

    if (inputSuhu === "" || isNaN(inputSuhu)) {
        alert("Masukkan suhu yang valid!");
        return;
    }

    let hasil, formula, explanation;

    if (labelInput.includes("Celcius")) {
        // Konversi Celsius ke Fahrenheit
        hasil = (inputSuhu * 9/5) + 32;
        formula = `°F = (°C × 9/5) + 32`;

        explanation = `
            ${inputSuhu} derajat Celcius (${inputSuhu}°C) setara dengan ${hasil.toFixed(2)} derajat Fahrenheit (${hasil.toFixed(2)}°F).
            Rumus yang digunakan:\n
            ${formula}\n
            Langkah-langkah perhitungan:\n
            1. Kalikan ${inputSuhu} dengan 9/5: (${inputSuhu} × 9/5) = ${(inputSuhu * 9/5).toFixed(2)}
            2. Tambahkan 32: ${(inputSuhu * 9/5).toFixed(2)} + 32 = ${hasil.toFixed(2)}
        `;
    } else {
        // Konversi Fahrenheit ke Celcius
        hasil = (inputSuhu - 32) * 5/9;
        formula = `°C = (°F - 32) × 5/9`;

        explanation = `
            ${inputSuhu} derajat Fahrenheit (${inputSuhu}°F) setara dengan ${hasil.toFixed(2)} derajat Celcius (${hasil.toFixed(2)}°C).
            Rumus yang digunakan:\n
            ${formula}\n
            Langkah-langkah perhitungan:\n
            1. Kurangi ${inputSuhu} dengan 32: (${inputSuhu} - 32) = ${inputSuhu - 32}
            2. Kalikan dengan 5/9: (${inputSuhu - 32} × 5/9) = ${hasil.toFixed(2)}
        `;
    }

    hasilSuhu.value = hasil.toFixed(2) + (labelInput.includes("Celcius") ? "°F" : "°C");
    penjelasan.innerHTML = explanation;
}

// Fungsi untuk menghapus input dan hasil konversi
document.querySelector(".bg-lightcoral").addEventListener("click", function() {
    document.getElementById("input-suhu").value = "";
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("detail-suhu").innerHTML = "";
});

// Fungsi untuk membalik arah konversi (Reverse)
document.querySelector(".bg-lightblue").addEventListener("click", function() {
    let labelInput = document.querySelector("label[for='input-suhu']");
    let labelHasil = document.querySelector("label[for='hasil-suhu']");
    let inputPlaceholder = document.getElementById("input-suhu");
    let tombolReverse = document.querySelector(".bg-lightblue");

    if (labelInput.innerHTML.includes("Celcius")) {
        labelInput.innerHTML = "Fahrenheit (&deg;F):";
        labelHasil.innerHTML = "Celcius (&deg;C):";
        inputPlaceholder.placeholder = "Masukkan suhu dalam Fahrenheit";
        tombolReverse.innerText = "F ke C";
    } else {
        labelInput.innerHTML = "Celcius (&deg;C):";
        labelHasil.innerHTML = "Fahrenheit (&deg;F):";
        inputPlaceholder.placeholder = "Masukkan suhu dalam Celcius";
        tombolReverse.innerText = "C ke F";
    }
});

