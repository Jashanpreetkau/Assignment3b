// Get the necessary elements from the DOM
const smoothieForm = document.getElementById('smoothieForm');
const orderBtn = document.getElementById('orderBtn');
const smoothieResult = document.getElementById('smoothieResult');

// Class representing a Smoothie object
class Smoothie {
  constructor(flavor, ingredients, sweetness) {
    this.flavor = flavor;
    this.ingredients = ingredients;
    this.sweetness = sweetness;
  }

  getDescription() {
    return `You ordered a ${this.flavor} smoothie with ${this.ingredients.join(', ')} and sweetness level ${this.sweetness}/10.`;
  }
}

// Function to get the selected ingredients from the form
function getSelectedIngredients() {
  const ingredientCheckboxes = document.querySelectorAll('input[name="ingredient"]:checked');
  const ingredients = Array.from(ingredientCheckboxes).map(checkbox => checkbox.value);
  return ingredients;
}

// Function to handle the order button click
function handleOrder() {
  const flavor = document.getElementById('flavor').value;
  const ingredients = getSelectedIngredients();
  const sweetness = document.getElementById('sweetness').value;

  // Create a new Smoothie object
  const smoothie = new Smoothie(flavor, ingredients, sweetness);

  // Display the smoothie description
  smoothieResult.textContent = smoothie.getDescription();
}

// Add event listener for the 'Order Smoothie' button
orderBtn.addEventListener('click', handleOrder);
