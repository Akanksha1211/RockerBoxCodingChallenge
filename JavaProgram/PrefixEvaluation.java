import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Stack;

/**
 * author Akanksha Avhad
 */
public class PrefixEvaluation {

	/**
	 * readFile method takes path of the file as a input in the string format
	 * FileReader and BufferedReader is used to parse the text file line by line
	 * 
	 * @param path
	 *            The path to the input file throws IOException
	 */
	public void readFile(String path) throws IOException {
		BufferedReader br;
		br = new BufferedReader(new FileReader(path));
		String line;
		while ((line = br.readLine()) != null) {
			prefixEvaluation(line);
		}
		br.close();
	}

	/**
	 * isInt method check whether the given input is of type Integer. Input is
	 * 
	 * @param String
	 *            expression in string format
	 * @return boolean true if the input is integer
	 */
	public static boolean isInt(String s) {
		try {
			Integer.parseInt(s);
			return true;
		} catch (NumberFormatException e) {
			return false;
		}
	}

	/**
	 * prefixEvaluation evaluations the given prefixExpression and prints the
	 * output
	 * 
	 * @param input
	 *            of type string
	 */
	public void prefixEvaluation(String input) {
		Stack<Float> result = new Stack<Float>();
		String strArr[] = input.split("\\s+");
		boolean valid = true;

		for (int i = strArr.length - 1; i >= 0 && valid; i--) {
			String currentValue = strArr[i];
			if (isInt(currentValue)) {
				result.push(Float.parseFloat(strArr[i]));
			} else if (currentValue.equals("*") || currentValue.equals("/") || currentValue.equals("+")) {

				if (result.size() < 2) {
					valid = false;
					break;
				}

				float operand1 = result.pop();
				float operand2 = result.pop();

				float answer = 0;
				switch (strArr[i]) {
				case "*":
					answer = operand1 * operand2;
					break;

				case "/":
					if (operand2 == 0) {
						valid = false;
						break;
					}
					answer = operand1 / operand2;
					break;

				case "+":
					answer = operand1 + operand2;
					break;
				}
				result.push(answer);
			}

		}
		if (result.size() == 1 && valid) {
			System.out.println(result.pop().intValue());
		} else {
			System.out.println("Invalid Input");
		}
	}

	public static void main(String[] args) throws IOException {
		PrefixEvaluation ps = new PrefixEvaluation();
		String path = args[0];
		ps.readFile(path);

	}

}
