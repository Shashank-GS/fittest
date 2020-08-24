class User {
	constructor(userStats) {
		this.height = userStats.height;
		this.weight = userStats.weight;
		this.excerciseHours = userStats.excerciseHours;
	}

	bmi() {
		// Calculate BMI
		const bmi = parseFloat((this.weight / (this.height / 100) ** 2).toFixed(2));
		// Declare result message
		let message;

		// Decide result message based on BMI range
		if (bmi >= 18.5 && bmi <= 24.9) message = "Normal or Healthy Weight";
		else if (bmi >= 25.0 && bmi <= 29.9) message = "Overweight";
		else if (bmi < 18.5) message = "Underweight";
		else message = "Obese";

		// return the result
		return { bmi, message };
	}
}

export default User;
