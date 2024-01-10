document.addEventListener("DOMContentLoaded", function () {
    const getSumBtn = document.getElementById("getSumBtn");
    let totalAdded = false;

    const getSum = () => {
        if (!totalAdded) {
            // Select all elements with class="price"
            const prices = document.querySelectorAll('.price');

            // Calculate the total price
            const totalPrice = Array.from(prices).reduce((sum, price) => {
                return sum + parseInt(price.textContent);
            }, 0);

            // Create a new row for the total
            const totalRow = document.createElement('tr');
            const totalCell1 = document.createElement('td');
            const totalCell2 = document.createElement('td');

            totalCell1.textContent = 'Total Price';
            totalCell2.textContent = totalPrice;

            totalRow.appendChild(totalCell1);
            totalRow.appendChild(totalCell2);

            // Append the new row to the table
            const table = document.getElementById('savingsTable');
            table.appendChild(totalRow);

            totalAdded = true; // Set the flag to true to indicate that the total row has been added
        }
    };

    getSumBtn.addEventListener("click", getSum);
});
