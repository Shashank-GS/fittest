class User {
	constructor(userStats) {
		this.height = userStats.height;
		this.weight = userStats.weight;
		this.excerciseMinutes = userStats.excerciseMinutes;
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

	// Calculate water intake
	waterNeeds() {
		// formula to calculate water intake based on weight and workout minutes
		const waterIntake = parseFloat(
			(
				(this.weight * 2.205 * (2 / 3) + this.excerciseMinutes * 0.4) /
				33.814
			).toFixed(2)
		);

		// return water intake in liters
		return waterIntake;
	}
}

export default User;
