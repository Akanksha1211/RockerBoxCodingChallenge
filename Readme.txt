Submission of Coding Assessment for Akanksha Avhad

The coding assessment is been done in two languages
# 1. JavaScript/HTML5
# 2. JAVA

How to run file for JavaScript/HTML
1. Make sure that index.html and implementation.js are in the same folder structure
2. Open index.html in any web browser.
3. Upload the input.txt file
4. The Output will be displayed in the HTML and the console.
5. A Download button is created dynamically which downloads an output.txt file which contains the result of all the prefix expressions.

How to run file for Java
1. Make sure you have JDK installed on your machine. It can be checked in program files of the C drive.
2. Copy the PrefixEvaluation.java at any location.
3. Open a command prompt and go to the location where the file is been stored.
For Example use the command: cd C:\Users\aavha\Desktop\prefix-Avhad
4. Now we need to compile our java file.
Write javac PrefixEvaluation.java in your command prompt.
5. After successful compilation, we need to run the file and also we need to provide the location of the txt file.
For example java PrefixEvaluation C:\Users\aavha\Desktop\input.txt

How the program works
1. The prefix expression is read from the input file.
2. Stack data structure is used for the implementation.
3. The loop starts from the last index of string and if the input is of type integer it pushed to the stack
4. If the input contains any of the operator *, + or /, the stack is popped two times the arithmetic evaluation is formed and the result is pushed to the stack.

Note: The division used is floating point division. However, the final answer is typecasted to an integer.
Assumption: The input contains only integer number and *, + or /, operator.


