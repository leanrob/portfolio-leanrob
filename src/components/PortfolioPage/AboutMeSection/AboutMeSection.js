import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

const AboutMeSection = () => {

	const codeString = '(num) => num + 1';
	const goCodeString = `import "fmt"
func main() {
    var a [5]int
    fmt.Println("emp:", a)
    a[4] = 100
    fmt.Println("set:", a)
    fmt.Println("get:", a[4])
    fmt.Println("len:", len(a))
    b := [5]int{1, 2, 3, 4, 5}
    fmt.Println("dcl:", b)
    var twoD [2][3]int
    for i := 0; i < 2; i++ {
        for j := 0; j < 3; j++ {
            twoD[i][j] = i + j
        }
    }
    fmt.Println("2d: ", twoD)
}`;

	return (
		<div className="main-content" id="aboutMe">
			<h1>About Me</h1>
			<h2>Software Developer. I get shit done</h2>
			<SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>
			<SyntaxHighlighter language='go' style={docco}>{goCodeString}</SyntaxHighlighter>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Rob Byrne</h1>
			<h2>Software Developer. I get shit done</h2>
			<h1>Section End</h1>
		</div>
	)
};


export default AboutMeSection