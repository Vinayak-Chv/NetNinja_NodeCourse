function calculate() {
    const totalAmt = document.getElementById("total-amt");
    const principal = Number(document.getElementById("principal").value);
    const rate = Number(document.getElementById("rate").value / 100);
    const years = Number(document.getElementById("years").value);

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
    }

    if (rate < 0 || isNaN(rate)) {
        rate = 0
    }

    if (years < 0 || isNaN(years)) {
        years = 0
    }

    const res = principal * Math.pow((1 + rate / 1), 1 * years);

    totalAmt.textContent = res.toLocaleString(undefined, {style: "currency", currency: "INR"});
}